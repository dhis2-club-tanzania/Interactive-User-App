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
  MatPaginatorModule,
  MatMenuModule,
  MatIconModule
} from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';

import { UserFormComponent } from '../user-form/user-form.component';
import { UserPaginationComponent } from '../user-pagination/user-pagination.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserTableComponent } from '../user-table/user-table.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from 'src/app/store/reducers';
import { FormsModule } from '@angular/forms';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatTableModule,
        MatMenuModule,
        MatIconModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatOptionModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatCheckboxModule,
        BrowserAnimationsModule,
        MatDatepickerModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule,
        RouterTestingModule,
        HttpClientTestingModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        BrowserAnimationsModule
      ],
      declarations: [
        UserComponent,
        UserFormComponent,
        UserPaginationComponent,
        UserTableComponent
      ]
    }).compileComponents();
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
