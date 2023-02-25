import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ADMIN_LOGIN, ADMIN_LOGOUT, CREATE_ADMIN_USER } from '../endpoints';
import { ILogin } from 'src/models';

@Injectable({ providedIn: 'root' })

export class AdminAuthService {

  constructor(private http: HttpClient) { }

  adminLogin = (data) => {
    const res = this.http.post<ILogin>(ADMIN_LOGIN, data).pipe(res => res);
    return res;
  }

  adminLogout = () => {
    const res = this.http.post<ILogin>(ADMIN_LOGOUT, '').pipe(res => res);
    return res;
  }

  createAdminUser = (data) => {
    const res = this.http.post<ILogin>(CREATE_ADMIN_USER, data).pipe(res=>res);
    return res;
  }

  isLoggedIn = () => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const token = userData?.token;
    if(token) {
      return true;
    } else {
      return false;
    }
  }
  
}