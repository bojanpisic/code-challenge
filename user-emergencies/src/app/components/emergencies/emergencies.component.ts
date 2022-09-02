import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { SortEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import { Observable } from 'rxjs';
import { Emergency } from 'src/app/models/emergency.model';

@Component({
  selector: 'app-emergencies',
  templateUrl: './emergencies.component.html',
  styleUrls: ['./emergencies.component.scss']
})
export class EmergenciesComponent implements OnInit {
  @Input() emergencies$: Observable<Emergency[]> | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

  customSort(event: SortEvent) {
    if(event.field !== "requestTime") return;

    event.data?.sort((a,b) => {
      let result = Number(new Date(a.emergency.requestTime)) - Number(new Date(b.emergency.requestTime));

      return event.order ? event.order * result : result;
    });
  }

  filter(event: any, ref: Table) {
    ref.filterGlobal(event.target.value, 'contains')
  }
}
