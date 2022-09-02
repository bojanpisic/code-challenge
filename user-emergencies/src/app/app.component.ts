import { Component, OnInit } from '@angular/core';
import { EmergencyService } from './services/emergency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  emergencies$: any;
  constructor(private emergencyService: EmergencyService) {}

  ngOnInit(): void {
    this.emergencies$ = this.emergencyService.getAllEmergencies();
  }
}
