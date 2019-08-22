import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BasicUserInfoComponent } from "./basic-user-info.component";
import {
  MatFormFieldModule,
  MatCheckboxModule,
  MatOptionModule,
  MatSelectModule
} from "@angular/material";

describe("BasicUserInfoComponent", () => {
  let component: BasicUserInfoComponent;
  let fixture: ComponentFixture<BasicUserInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatFormFieldModule,
        MatCheckboxModule,
        MatSelectModule,
        MatOptionModule
      ],
      declarations: [BasicUserInfoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it("should create", () => {
  //   expect(component).toBeTruthy();
  // });
});
