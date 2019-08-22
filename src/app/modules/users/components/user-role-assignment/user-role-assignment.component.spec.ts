import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { UserRoleAssignmentComponent } from "./user-role-assignment.component";
import { MatFormFieldModule } from "@angular/material";
import { ReactiveFormsModule } from "@angular/forms";

describe("UserRoleAssignmentComponent", () => {
  let component: UserRoleAssignmentComponent;
  let fixture: ComponentFixture<UserRoleAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatFormFieldModule, ReactiveFormsModule],
      declarations: [UserRoleAssignmentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRoleAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it("should create", () => {
  //   expect(component).toBeTruthy();
  // });
});
