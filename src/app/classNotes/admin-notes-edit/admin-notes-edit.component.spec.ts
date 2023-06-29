import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNotesEditComponent } from './admin-notes-edit.component';

describe('AdminNotesEditComponent', () => {
  let component: AdminNotesEditComponent;
  let fixture: ComponentFixture<AdminNotesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNotesEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminNotesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
