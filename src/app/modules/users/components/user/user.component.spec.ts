import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatOptionModule, MatButtonModule, MatCheckboxModule, MatSelectModule, MatInputModule, MatPaginatorModule } from '@angular/material'
import { UserFormComponent } from '../user-form/user-form.component';
import { UserPaginationComponent } from '../user-pagination/user-pagination.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

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
        MatInputModule,
        MatPaginatorModule, 
        BrowserAnimationsModule
      ],
      declarations: [ UserComponent , UserFormComponent, UserPaginationComponent]
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
