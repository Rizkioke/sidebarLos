import { Component, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventManager } from 'app/core/util/event-manager.service';
import { AlertService } from 'app/core/util/alert.service';
import { BaseDataUtils } from 'app/shared/base/base-data-utils.service';
import { HttpResponse } from '@angular/common/http';

import { IRoleInternal, RoleInternal } from './role-internal.model';
import { RoleInternalService } from './role-internal.service';
import { IRoleType, RoleType } from 'app/entities/role-type/role-type.model';
import { RoleTypeService } from 'app/entities/role-type/role-type.service';
import { IParty, Party } from 'app/entities/party/party.model';
import { PartyService } from 'app/entities/party/party.service';
import { AccountService } from 'app/core/auth/account.service';
import { combineLatest, Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';

import { ConfirmationService, MessageService } from 'primeng/api';
import { AbstractEntityUpdateComponent } from 'app/shared/base/abstract-entity-update.component';
import { ReportUtilService } from 'app/shared/base/report-util.service';

type SelectableEntity = IRoleType | IParty;

@Component({
  selector: 'jhi-role-internal-update',
  templateUrl: './role-internal-update.component.html',
})
export class RoleInternalUpdateComponent extends AbstractEntityUpdateComponent<IRoleInternal> {
  roletypes: IRoleType[] = [];

  parties: IParty[] = [];
  roleId: string;
  partyId: string;

  constructor(
    protected dataUtils: BaseDataUtils,
    protected alertService: AlertService,
    protected roleInternalService: RoleInternalService,
    protected roleTypeService: RoleTypeService,
    protected partyService: PartyService,
    protected elementRef: ElementRef,
    protected activatedRoute: ActivatedRoute,
    protected confirmationService: ConfirmationService,
    protected eventManager: EventManager,
    protected toastService: MessageService,
    protected accountService: AccountService,
    protected reportUtils: ReportUtilService
  ) {
    super(dataUtils, roleInternalService, elementRef, confirmationService, toastService, activatedRoute);
    this.listChangeEventName = 'roleInternalListModification';
  }

  protected initialState(): any {
    return { item: new RoleInternal(), tasks: [], id: undefined };
  }

  initialize() {
    combineLatest([this.accountService.identity(), this.activatedRoute.queryParams]).subscribe(([account_, params]) => {
      this.currentAccount = account_;

      // Read Route Parameter
      if (params['roleId']) {
        this.roleId = params['roleId'];
      }
      if (params['partyId']) {
        this.partyId = params['partyId'];
      }
    });

    this.roleTypeService.loadCacheAll().subscribe((res: IRoleType[]) => (this.roletypes = res || []));

    this.partyService.loadCacheAll().subscribe((res: IParty[]) => (this.parties = res || []));
  }

  protected loadRelatedEntityEffect(state: any): Observable<any> {
    const result = of(state);
    return result;
  }

  protected buildDependencyEffect(state: any): Observable<any> {
    return of(state);
  }

  protected prepareSaveEffect(state: any): Observable<any> {
    return of(state);
  }

  trackRoleTypeById(index: number, item: IRoleType) {
    return item.id;
  }

  trackPartyById(index: number, item: IParty) {
    return item.id;
  }

  itemKey() {
    return this.stateSubject.getValue().item.id;
  }

  get roleInternal() {
    return this.item;
  }

  print() {
    this.reportUtils.viewFile('/api/report/RoleInternal/pdf', {});
    return false;
  }
}
