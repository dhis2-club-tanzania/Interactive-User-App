import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { EditUserComponent } from "./edit-user.component";
import {
  MatFormFieldModule,
  MatOptionModule,
  MatInputModule,
  MatCheckboxModule,
  MatSelectModule,
  MatStepperModule
} from "@angular/material";
import { RouterTestingModule } from "@angular/router/testing";
import { BrowserDynamicTestingModule } from "@angular/platform-browser-dynamic/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("EditUserComponent", () => {
  let component: EditUserComponent;
  let fixture: ComponentFixture<EditUserComponent>;

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
      declarations: [EditUserComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it("should create", () => {
  //   expect(component).toBeTruthy();
  // });
});
