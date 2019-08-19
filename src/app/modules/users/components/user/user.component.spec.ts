import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import {
   MatFormFieldModule,
   MatDatepickerModule,
    MatNativeDateModule,
     MatOptionModule,
      MatButtonModule,
      MatCheckboxModule,
      MatSelectModule,
      MatInputModule,
      MatTableModule,
      MatPaginatorModule
     } from '@angular/material';
import { UserFormComponent } from '../user-form/user-form.component';
import { UserPaginationComponent } from '../user-pagination/user-pagination.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserTableComponent } from '../user-table/user-table.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatTableModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatOptionModule,
        MatButtonModule,
        MatCheckboxModule,
        BrowserAnimationsModule,
        MatDatepickerModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule,
        BrowserAnimationsModule
      ],
      declarations: [ UserComponent , UserFormComponent, UserPaginationComponent, UserTableComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
