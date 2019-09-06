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
      'users.json?fields=id,displayName,userCredentials[username,disabled,lastLogin]&paging=false'
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
