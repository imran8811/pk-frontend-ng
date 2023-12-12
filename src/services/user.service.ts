import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, catchError, tap, filter, takeUntil } from 'rxjs';
import { IUser } from 'src/models';
import { environment } from '../environments/environment.prod';

import { 
  USER_LOGIN
} from '../api-endpoints';

@Injectable({ providedIn: 'root' })

export class UserService {

  constructor(private http: HttpClient) { }

  userLogin = (data) => {
    console.log('in user service')
    const res = this.http.post<IUser[]>(USER_LOGIN, data).pipe(res=>res);
    return res;
  }
}