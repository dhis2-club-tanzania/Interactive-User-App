import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatPaginatorModule} from '@angular/material'
import { UserPaginationComponent } from './user-pagination.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('UserPaginationComponent', () => {
  let component: UserPaginationComponent;
  let fixture: ComponentFixture<UserPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatPaginatorModule, BrowserAnimationsModule],

      declarations: [ UserPaginationComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
