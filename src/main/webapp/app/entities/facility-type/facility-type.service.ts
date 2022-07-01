import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { IFacilityType } from './facility-type.model';
import { AbstractEntityService } from 'app/shared/base/abstract-entity.service';

@Injectable({ providedIn: 'root' })
export class FacilityTypeService extends AbstractEntityService<IFacilityType> {
  constructor(protected http: HttpClient, protected applicationConfigService: ApplicationConfigService) {
    super(http);
    this.resourceUrl = this.applicationConfigService.getEndpointFor('services/los/api/facility-types');
  }

  protected isNew(entity: IFacilityType): boolean {
    return entity.id === undefined || entity.id === null;
  }

  protected preSave(entity: IFacilityType) {}
}
