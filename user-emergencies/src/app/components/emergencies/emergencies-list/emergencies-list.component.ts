import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SortEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import { Observable } from 'rxjs';
import { Emergency } from 'src/app/models/emergency.model';

@Component({
  selector: 'app-emergencies-list',
  templateUrl: './emergencies-list.component.html',
  styleUrls: ['./emergencies-list.component.scss']
})
export class EmergenciesListComponent implements OnInit {

  @Input() emergencies$: Observable<Emergency[]>;
  @Output() sortEvent: EventEmitter<SortEvent> = new EventEmitter<SortEvent>();
  @Output() filterEvent: EventEmitter<{event: any, ref: Table}> = new EventEmitter<{event: any, ref: Table}>();

  constructor() { }

  ngOnInit(): void {
  }

  sort(event: SortEvent) {
    this.sortEvent.emit(event);
  }

  filter(event: any, ref: Table) {
    this.filterEvent.emit({event, ref});
  }
}
