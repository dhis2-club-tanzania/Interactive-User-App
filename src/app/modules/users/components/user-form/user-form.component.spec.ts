import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import {
  MatFormFieldModule,
  MatDatepickerModule,
  MatSelectModule
} from "@angular/material";
import { UserFormComponent } from "./user-form.component";
import { MatInputModule, MatNativeDateModule } from "@angular/material";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatOptionModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("UserFormComponent", () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDatepickerModule,
        MatNativeDateModule,
        MatOptionModule,
        MatButtonModule,
        MatCheckboxModule,
        BrowserAnimationsModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule
      ],
      declarations: [UserFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
