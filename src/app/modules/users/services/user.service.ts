import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@iapps/ngx-dhis2-http-client';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http: NgxDhis2HttpClientService) { }

  getData(): Observable<any>{
    const programUrl = 'users.json?fields=id,displayName,userCredentials[username,disabled,lastLogin]&paging=false'
    return this.http.get(programUrl)
  }

  // getCurrentData(id: string): Observable<any>{
  //   return this.http.get(`programs/${id}.json?fields=id,name,user[name]`)
  // }

}
