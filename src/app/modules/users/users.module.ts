import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from 'src/app/modules/users/components/user/user.component';
import { UserPaginationComponent } from 'src/app/modules/users/components/user-pagination/user-pagination.component';
import { UserFormComponent } from 'src/app/modules/users/components/user-form/user-form.component';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule, MatIconModule } from '@angular/material';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { MatButtonModule, MatCheckboxModule, MatSelectModule, MatOptionModule } from '@angular/material';
import { UserTableComponent } from './components/user-table/user-table.component';
import { MatTableModule } from '@angular/material';
import { MatMenuModule} from '@angular/material/menu';
import { NewUserComponent } from './components/new-user/new-user.component';



@NgModule({
  declarations: [
    UserComponent,
    UserPaginationComponent,
    UserFormComponent,
    UserTableComponent,
    NewUserComponent
  ],
  imports: [
    MatTableModule,
    CommonModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatMenuModule,
    MatIconModule,
    MatNativeDateModule,
    MatOptionModule,
    MatButtonModule, MatCheckboxModule, MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild([
      { path: '', component: UserComponent },
      { path: 'create-user', component: NewUserComponent }
    ])
  ]
})
export class UsersModule {
}
