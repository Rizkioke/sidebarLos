import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IPeriodType } from './period-type.model';
import { LazyLoadEvent, ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'jhi-period-type-detail',
  templateUrl: './period-type-detail.component.html',
})
export class PeriodTypeDetailComponent implements OnInit {
  periodType: IPeriodType | null = null;

  constructor(protected activatedRoute: ActivatedRoute, private toastService: MessageService) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ periodType }) => (this.periodType = periodType));
  }

  previousState(): void {
    window.history.back();
  }
}
