/* istanbul ignore file */

import {environment} from './../../../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const authUrl = `${environment.authUrl}/api/auth/`;

@Injectable({providedIn: 'root'})
export class AuthAPIService {
  constructor(public http: HttpClient) {}

  postData(credentials: any, type: any) {
    return new Promise((resolve, reject) => {
      const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'}),
      };

      this.http
        .post(authUrl + type, JSON.stringify(credentials), httpOptions)
        .subscribe(
          res => {
            resolve(res);
          },
          err => {
            reject(err);
          }
        );
    });
  }
}
