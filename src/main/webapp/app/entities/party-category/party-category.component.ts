import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'app/core/auth/account.service';
import { ITEMS_PER_PAGE } from 'app/config/pagination.constants';
import { IPartyCategory } from './party-category.model';
import { PartyCategoryService } from './party-category.service';
import { LazyLoadEvent, ConfirmationService, MessageService } from 'primeng/api';
import { AbstractEntityComponent } from 'app/shared/base/abstract-entity.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { saveAs } from 'file-saver';
import { BaseDataUtils } from 'app/shared/base/base-data-utils.service';
import { ParseLinks } from 'app/core/util/parse-links.service';
import { AlertService } from 'app/core/util/alert.service';
import { EventManager } from 'app/core/util/event-manager.service';

@Component({
  selector: 'jhi-party-category',
  templateUrl: './party-category.component.html',
})
export class PartyCategoryComponent extends AbstractEntityComponent<IPartyCategory> {
  @ViewChild('inputFile', { static: false }) inputFile: ElementRef;

  constructor(
    protected partyCategoryService: PartyCategoryService,
    protected parseLinks: ParseLinks,
    protected alertService: AlertService,
    public accountService: AccountService,
    protected activatedRoute: ActivatedRoute,
    protected dataUtils: BaseDataUtils,
    protected router: Router,
    protected eventManager: EventManager,
    protected messageService: MessageService,
    protected modalService: NgbModal,
    protected confirmationService: ConfirmationService
  ) {
    super(
      partyCategoryService,
      parseLinks,
      accountService,
      activatedRoute,
      dataUtils,
      router,
      eventManager,
      messageService,
      confirmationService
    );

    this.parentRoute = '/party-category';
    this.listChangeEventName = 'partyCategoryListModification';
    this.entityKeyName = 'id';

    this.routeData = this.activatedRoute.data.subscribe(data => {
      this.page = data.pagingParams.page;
      this.previousPage = data.pagingParams.page;
      this.reverse = data.pagingParams.ascending;
      this.predicate = data.pagingParams.predicate;
      activatedRoute.queryParams.subscribe(params => {
        this.itemsPerPage = params['size'] || ITEMS_PER_PAGE;
        this.first = (this.page - 1) * this.itemsPerPage || 0;
      });
    });
    this.currentSearch =
      this.activatedRoute.snapshot && this.activatedRoute.snapshot.params['search'] ? this.activatedRoute.snapshot.params['search'] : '';
  }

  trackId(index: number, item: IPartyCategory) {
    return item.id;
  }

  get partyCategories() {
    return this.items;
  }

  set partyCategories(partyCategory: IPartyCategory[]) {
    this.items = partyCategory;
  }

  downloadFile(name: string) {
    this.itemService
      .process(
        {
          fileName: name,
          header: 'id',
          fields: 'id',
        },
        { processName: 'buildDownloadFile' }
      )
      .subscribe(() => {
        this.itemService.downloadFile(name).subscribe(res => {
          const blobFileName = name;
          const blob = new Blob([res.body], { type: 'application/octet-stream' });
          saveAs(blob, blobFileName);
        });
      });
  }

  onUploadFile(event: any) {
    const files: FileList = event.target.files;

    if (files.length > 0) {
      const formData: FormData = new FormData();
      formData.append('file', files[0], files[0].name);
      this.itemService.uploadFile(formData).subscribe(res => {
        this.inputFile.nativeElement.value = null;
        this.itemService.process({ fileName: res.body.fileName }, { processName: 'processUploadFile' }).subscribe(() => {
          this.eventManager.broadcast({ name: this.listChangeEventName, content: 'Completed upload data' });
          this.messageService.add({ severity: 'info', summary: 'Upload Done', detail: 'Upload ' + res.body.fileName + ' done process' });
        });
      });
    }
  }
}
