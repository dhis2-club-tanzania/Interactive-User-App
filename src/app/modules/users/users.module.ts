import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from 'src/app/modules/users/components/user/user.component';
import { UserPaginationComponent } from 'src/app/modules/users/components/user-pagination/user-pagination.component';
import { UserFormComponent } from 'src/app/modules/users/components/user-form/user-form.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    UserComponent,
    UserPaginationComponent,
    UserFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: UserComponent }
    ])
  ]
})
export class UsersModule { }
