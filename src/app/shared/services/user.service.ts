import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { User } from 'src/app/models/user';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  private baseUrl = `${environment.apiBase}/v0/users`;

  updateUser(id: number, formDataUser: FormData): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/${id}`, formDataUser);
  }

}
