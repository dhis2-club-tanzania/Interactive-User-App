import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { OrgUnitAssignmentComponent } from "./org-unit-assignment.component";
import { MatFormFieldModule } from "@angular/material";

describe("OrgUnitAssignmentComponent", () => {
  let component: OrgUnitAssignmentComponent;
  let fixture: ComponentFixture<OrgUnitAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatFormFieldModule],
      declarations: [OrgUnitAssignmentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgUnitAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it("should create", () => {
  //   expect(component).toBeTruthy();
  // });
});
