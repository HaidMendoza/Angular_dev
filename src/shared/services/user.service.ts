import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PATHS } from 'src/environments/default';
import { environments } from 'src/environments/environments';
import { User } from '../model/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user: string = environments.urlBase.url + PATHS.createUser;

  constructor(private http: HttpClient) { }

  createUser(data: any){
    return this.http.post(this._user, data)
  }
}
