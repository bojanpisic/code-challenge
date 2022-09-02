import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergenciesListComponent } from './emergencies-list.component';

describe('EmergenciesListComponent', () => {
  let component: EmergenciesListComponent;
  let fixture: ComponentFixture<EmergenciesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmergenciesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmergenciesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
