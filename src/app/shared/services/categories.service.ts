import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Category } from '../../models/category'

@Injectable()
export class CategoriesService {
  constructor(private http: HttpClient) { }

  private baseUrl: string = `${environment.apiBase}/v0/categories`;

  getCategories():Observable<Category[]> {
      return this.http.get<Category[]>(this.baseUrl);
  }
}