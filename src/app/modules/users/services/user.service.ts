import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@iapps/ngx-dhis2-http-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: NgxDhis2HttpClientService) {}

  getData(): Observable<any> {
    return this.http.get(
      // tslint:disable-next-line: max-line-length
      'users.json?fields=id,name,surname,telegram,skype,twitter,whatsApp,facebookMessenger,email,firstName,phoneNumber,displayName,databaseLanguage,userCredentials[openId,ldapId,externalAuth,username,disabled,userRoles[id,name],lastLogin,invitation,selfRegistered],dataViewOrganisationUnits[id],organisationUnits[id],userGroups[id,name]&paging=false'
      // tslint:disable-next-line: max-line-length
      // 'users.json?fields=id,name,surname,telegram,skype,twitter,facebookMessenger,email,whatsApp,firstName,phoneNumber,displayName,userCredentials[id,name,openId,displayName,ldapId,userInfo[id],username,disabled,userRoles[id,name],lastLogin,invitation,selfRegistered],organisationUnits[id],dataViewOrganisationUnits[id],userGroups[id,name]&paging=false'
    );
  }

  getUserRoles(): Observable<any> {
    return this.http.get(
      'userRoles.json?fields=id,name&canIssue=true&paging=false'
    );
  }

  getUserGroups(): Observable<any> {
    return this.http.get('userGroups.json?fields=id,name&paging=false');
  }

  postNewUser(user: any) {
    return this.http.post('users', user);
  }

  getUserDimensions(): Observable<any> {
    return this.http.get(
      'dimensions/constraints.json?fields=id,name&paging=false'
    );
  }
}
