import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNotesAddComponent } from './admin-notes-add.component';

describe('AdminNotesAddComponent', () => {
  let component: AdminNotesAddComponent;
  let fixture: ComponentFixture<AdminNotesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNotesAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminNotesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
