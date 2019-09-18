import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserComponent } from './new-user.component';
import {
  MatFormFieldModule,
  MatOptionModule,
  MatInputModule,
  MatStepperModule,
  MatSelectModule,
  MatCheckboxModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { BasicUserInfoComponent } from '../basic-user-info/basic-user-info.component';
import { OrgUnitAssignmentComponent } from '../org-unit-assignment/org-unit-assignment.component';
import { UserRoleAssignmentComponent } from '../user-role-assignment/user-role-assignment.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('NewUserComponent', () => {
  let component: NewUserComponent;
  let fixture: ComponentFixture<NewUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatFormFieldModule,
        MatOptionModule,
        MatInputModule,
        MatCheckboxModule,
        MatSelectModule,
        MatStepperModule,
        RouterTestingModule,
        BrowserDynamicTestingModule,
        BrowserAnimationsModule
      ],
      declarations: [
        NewUserComponent,
        BasicUserInfoComponent,
        OrgUnitAssignmentComponent,
        UserRoleAssignmentComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it("should create", () => {
  //   expect(component).toBeTruthy();
  // });
});
