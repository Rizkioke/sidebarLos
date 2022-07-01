import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { ITermType } from './term-type.model';
import { AbstractEntityService } from 'app/shared/base/abstract-entity.service';

@Injectable({ providedIn: 'root' })
export class TermTypeService extends AbstractEntityService<ITermType> {
  constructor(protected http: HttpClient, protected applicationConfigService: ApplicationConfigService) {
    super(http);
    this.resourceUrl = this.applicationConfigService.getEndpointFor('services/los/api/term-types');
  }

  protected isNew(entity: ITermType): boolean {
    return entity.id === undefined || entity.id === null;
  }

  protected preSave(entity: ITermType) {}
}
