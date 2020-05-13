import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Service } from '../../models/service';

@Injectable()
export class ServicesService {
  constructor(private http: HttpClient) { }

  private baseUrl: string = `${environment.apiBase}/v0/`;

  getServicesFromCategory(categoryId: number): Observable<Service[]> {
      return this.http.get<Service[]>(`${this.baseUrl}/categories/${categoryId}/services`);
  }

  addService(service: Service): Observable<Service> {
    return this.http.post<Service>(`${this.baseUrl}/services`, { service });
  }

  getService(id: number): Observable<Service> {
    return this.http.get<Service>(`${this.baseUrl}/services/${id}`);
  }

  updateService(service: Service): Observable<Service> {
    return this.http.put<Service>(`${this.baseUrl}/services/${service.id}`, { service });
  }
}
