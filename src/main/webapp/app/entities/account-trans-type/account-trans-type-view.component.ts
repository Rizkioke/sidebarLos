import { Component, OnChanges, SimpleChanges, ElementRef, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { BaseDataUtils } from 'app/shared/base/base-data-utils.service';
import { AlertService } from 'app/core/util/alert.service';
import { EventManager } from 'app/core/util/event-manager.service';

import { IAccountTransType, AccountTransType } from './account-trans-type.model';
import { AccountTransTypeService } from './account-trans-type.service';
import { MessageService } from 'primeng/api';
import { AccountService } from 'app/core/auth/account.service';
import { CODE } from 'app/shared/constants/base.constants';
import { AbstractEntityBaseViewComponent } from 'app/shared/base/abstract-entity-view.component';
import { TranslateService } from '@ngx-translate/core';
import { IAccountTransCategory, AccountTransCategory } from 'app/entities/account-trans-category/account-trans-category.model';
import { AccountTransCategoryService } from 'app/entities/account-trans-category/account-trans-category.service';

type SelectableEntity = IAccountTransType | IAccountTransCategory;

@Component({
  selector: 'jhi-account-trans-type-view',
  templateUrl: './account-trans-type-view.component.html',
})
export class AccountTransTypeViewComponent extends AbstractEntityBaseViewComponent<IAccountTransType> implements OnChanges {
  @Input() id: string;
  readonly CODE: typeof CODE = CODE;

  accounttranstypes: IAccountTransType[] = [];

  accounttranscategories: IAccountTransCategory[] = [];
  parentId: string;
  transCategoryId: string;

  constructor(
    protected dataUtils: BaseDataUtils,
    protected alertService: AlertService,
    protected accountTransTypeService: AccountTransTypeService,
    protected accountTransCategoryService: AccountTransCategoryService,
    protected elementRef: ElementRef,
    protected activatedRoute: ActivatedRoute,
    protected messageService: MessageService,
    protected translateService: TranslateService,
    protected eventManager: EventManager,
    public account: AccountService
  ) {
    super(accountTransTypeService, messageService, elementRef, dataUtils, account, eventManager);
    this.item = new AccountTransType();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['id']) {
      if (changes['id'].isFirstChange()) {
        this.initialize();
      }
      if (this.id) {
        this.item = new AccountTransType();
        this.accountTransTypeService.find(this.id).subscribe(result => {
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
    this.accountTransTypeService.loadCacheAll().subscribe((res: IAccountTransType[]) => (this.accounttranstypes = res || []));

    this.accountTransCategoryService.loadCacheAll().subscribe((res: IAccountTransCategory[]) => (this.accounttranscategories = res || []));
  }

  prepareView() {}

  get accountTransType() {
    return this.item;
  }

  set accountTransType(accountTransType: IAccountTransType) {
    this.item = accountTransType;
  }

  trackAccountTransTypeById(index: number, item: IAccountTransType) {
    return item.id;
  }

  trackAccountTransCategoryById(index: number, item: IAccountTransCategory) {
    return item.id;
  }

  itemKey() {
    return this.item.id;
  }
}
