import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNotesViewComponent } from './admin-notes-view.component';

describe('AdminNotesViewComponent', () => {
  let component: AdminNotesViewComponent;
  let fixture: ComponentFixture<AdminNotesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNotesViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminNotesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
