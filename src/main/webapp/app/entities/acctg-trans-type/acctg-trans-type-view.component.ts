import { Component, OnChanges, SimpleChanges, ElementRef, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { BaseDataUtils } from 'app/shared/base/base-data-utils.service';
import { AlertService } from 'app/core/util/alert.service';
import { EventManager } from 'app/core/util/event-manager.service';

import { IAcctgTransType, AcctgTransType } from './acctg-trans-type.model';
import { AcctgTransTypeService } from './acctg-trans-type.service';
import { MessageService } from 'primeng/api';
import { AccountService } from 'app/core/auth/account.service';
import { CODE } from 'app/shared/constants/base.constants';
import { AbstractEntityBaseViewComponent } from 'app/shared/base/abstract-entity-view.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'jhi-acctg-trans-type-view',
  templateUrl: './acctg-trans-type-view.component.html',
})
export class AcctgTransTypeViewComponent extends AbstractEntityBaseViewComponent<IAcctgTransType> implements OnChanges {
  @Input() id: string;
  readonly CODE: typeof CODE = CODE;

  acctgtranstypes: IAcctgTransType[] = [];
  parentId: string;

  constructor(
    protected dataUtils: BaseDataUtils,
    protected alertService: AlertService,
    protected acctgTransTypeService: AcctgTransTypeService,
    protected elementRef: ElementRef,
    protected activatedRoute: ActivatedRoute,
    protected messageService: MessageService,
    protected translateService: TranslateService,
    protected eventManager: EventManager,
    public account: AccountService
  ) {
    super(acctgTransTypeService, messageService, elementRef, dataUtils, account, eventManager);
    this.item = new AcctgTransType();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['id']) {
      if (changes['id'].isFirstChange()) {
        this.initialize();
      }
      if (this.id) {
        this.item = new AcctgTransType();
        this.acctgTransTypeService.find(this.id).subscribe(result => {
          this.item = result.body;
          this.prepareView();
        });
      }
    }

    if (changes['item']) {
      if (changes['item'].isFirstChange()) {
        this.initialize();
      }
      if (this.item) {
        this.prepareView();
      }
    }

    if (changes['isSaving'] && this.item.id) {
      if (this.isSaving) {
        this.save();
      }
    }
  }

  initialize() {
    this.acctgTransTypeService.loadCacheAll().subscribe((res: IAcctgTransType[]) => (this.acctgtranstypes = res || []));
  }

  prepareView() {}

  get acctgTransType() {
    return this.item;
  }

  set acctgTransType(acctgTransType: IAcctgTransType) {
    this.item = acctgTransType;
  }

  trackAcctgTransTypeById(index: number, item: IAcctgTransType) {
    return item.id;
  }

  itemKey() {
    return this.item.id;
  }
}
