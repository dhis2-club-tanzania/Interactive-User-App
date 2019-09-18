import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { Observable } from 'rxjs';
import { User } from 'src/app/core';
import { getSelectedUser } from 'src/app/store/selectors/users.selectors';
import { BasicUserInfo } from '../../models/basic-user-info.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  basicInfo: BasicUserInfo;

  selectedUser$: Observable<User>;
  constructor(
    private router: Router,
    private store: Store<State>,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.selectedUser$ = this.store.select(
      getSelectedUser(this.route.snapshot.params['id'])
    );
    this.getSelecteUserDetails();
  }

  getSelecteUserDetails() {
    this.selectedUser$.subscribe(user => {
      if (user) {
        this.basicInfo = {
          email: user.email,
          surname: user.surname,
          firstName: user.firstName,
          userCredentials: {
            username: user.userCredentials.username,
            openId: user.userCredentials.openId,
            ldapId: user.userCredentials.ldapId,
            externalAuth: user.userCredentials.externalAuth
          },
          interfaceLanguage: user.interfaceLanguage,
          databaseLanguage: user.databaseLanguage,
          skype: user.skype,
          telegram: user.telegram,
          phoneNumber: user.phoneNumber,
          whatsApp: user.whatsApp,
          facebookMessenger: user.facebookMessenger,
          twitter: user.twitter
        };
      }
    });
    console.log(this.basicInfo);
  }
}
