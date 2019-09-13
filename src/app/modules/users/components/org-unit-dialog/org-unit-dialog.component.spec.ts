import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { OrgUnitDialogComponent } from "./org-unit-dialog.component";
import { NgxDhis2OrgUnitFilterModule } from "@iapps/ngx-dhis2-org-unit-filter";
import { MatDialogModule } from "@angular/material";
import { StoreModule } from "@ngrx/store";
import { reducers, metaReducers } from "src/app/store/reducers";
import { HttpClientModule, HttpClient } from "@angular/common/http";

describe("OrgUnitDialogComponent", () => {
  let component: OrgUnitDialogComponent;
  let fixture: ComponentFixture<OrgUnitDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxDhis2OrgUnitFilterModule,
        HttpClientModule,
        MatDialogModule,
        StoreModule.forRoot(reducers, { metaReducers })
      ],
      declarations: [OrgUnitDialogComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgUnitDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it("should create", () => {
  //   expect(component).toBeTruthy();
  // });
});
