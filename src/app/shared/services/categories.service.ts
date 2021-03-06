import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Category } from '../../models/category';

@Injectable()
export class CategoriesService {
  constructor(private http: HttpClient) { }

  private baseUrl = `${environment.apiBase}/v0/categories`;

  getCategories(): Observable<Category[]> {
      return this.http.get<Category[]>(this.baseUrl);
  }

  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.baseUrl, { category });
  }

  getCategory(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.baseUrl}/${id}`);
  }

  updateCategory(id: number, category: Category): Observable<Category> {
    return this.http.put<Category>(`${this.baseUrl}/${id}`, { category });
  }

}
