import { Component, OnInit } from '@angular/core';
import { SortEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import { Observable } from 'rxjs';
import { Emergency } from 'src/app/models/emergency.model';
import { EmergencyService } from '../../services/emergency.service';

@Component({
  selector: 'app-emergencies',
  templateUrl: './emergencies.component.html',
  styleUrls: ['./emergencies.component.scss']
})
export class EmergenciesComponent implements OnInit {
  emergencies$: Observable<Emergency[]>;
  
  constructor(private emergencyService: EmergencyService) {}

  ngOnInit(): void {
    this.emergencies$ = this.emergencyService.getAllEmergencies();
  }

  customSort(event: SortEvent) {
    if(event.field !== "requestTime") return;

    event.data?.sort((a,b) => {
      let result = Number(new Date(a.emergency.requestTime)) - Number(new Date(b.emergency.requestTime));

      return event.order ? event.order * result : result;
    });
  }

  filter(prop: {event: any, ref: Table}) {
    prop.ref.filterGlobal(prop.event.target.value, 'contains')
  }
}
