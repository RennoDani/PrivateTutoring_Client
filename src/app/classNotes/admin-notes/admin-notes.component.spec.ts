import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNotesComponent } from './admin-notes.component';

describe('AdminNotesComponent', () => {
  let component: AdminNotesComponent;
  let fixture: ComponentFixture<AdminNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
