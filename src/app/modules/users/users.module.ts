import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from 'src/app/modules/users/components/user/user.component';
import { UserPaginationComponent } from 'src/app/modules/users/components/user-pagination/user-pagination.component';
import { UserFormComponent } from 'src/app/modules/users/components/user-form/user-form.component';
import { RouterModule } from '@angular/router';
import {
  MatPaginatorModule,
  MatIconModule,
  MatGridListModule,
  MatStepperModule,
  MatHorizontalStepper
} from '@angular/material';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatSelectModule,
  MatOptionModule
} from '@angular/material';
import { UserTableComponent } from './components/user-table/user-table.component';
import { MatTableModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { NewUserComponent } from './components/new-user/new-user.component';
import { BasicUserInfoComponent } from './components/basic-user-info/basic-user-info.component';
import { UserRoleAssignmentComponent } from './components/user-role-assignment/user-role-assignment.component';
import { OrgUnitAssignmentComponent } from './components/org-unit-assignment/org-unit-assignment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { NgxDhis2OrgUnitFilterModule } from '@iapps/ngx-dhis2-org-unit-filter';
// import { NgPipesModule } from 'ngx-pipes';
import { SelectFilterPipe } from './pipes/select-filter.pipe';
import { FilterPipe } from './pipes/user-role-filter.pipe';
import { MatProgressSpinnerModule } from '@angular/material';
import { SearchByNamePipe } from './pipes/search-by-name.pipe';

@NgModule({
  declarations: [
    UserComponent,
    UserPaginationComponent,
    UserFormComponent,
    UserTableComponent,
    NewUserComponent,
    BasicUserInfoComponent,
    UserRoleAssignmentComponent,
    OrgUnitAssignmentComponent,
    EditUserComponent,
    SelectFilterPipe,
    FilterPipe,
    SearchByNamePipe
  ],
  imports: [
    MatTableModule,
    CommonModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatMenuModule,
    MatStepperModule,
    MatIconModule,
    MatNativeDateModule,
    NgxDhis2OrgUnitFilterModule,
    // NgPipesModule,
    MatOptionModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: UserComponent },
      {
        path: 'create-user',
        component: NewUserComponent,
        children: [
          { path: 'basic-user-info', component: BasicUserInfoComponent },
          { path: 'user-roles', component: UserRoleAssignmentComponent },
          { path: 'org-unit', component: OrgUnitAssignmentComponent }
        ]
      },
      { path: 'edit-user/:id', component: EditUserComponent }
    ])
  ]
})
export class UsersModule {}
