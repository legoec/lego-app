import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Recomendation } from 'src/app/models/recomendation';


@Injectable()
export class RecomendationsService {
  constructor(private http: HttpClient) { }

  private baseUrl: string = `${environment.apiBase}/v0`;

  getRecomendationsFromService(serviceId: number): Observable<Recomendation[]> {
    return this.http.get<Recomendation[]>(`${this.baseUrl}/services/${serviceId}/recomendations`);
  }

  createRecomendation(recomendation: Recomendation): Observable<Recomendation> {
    return this.http.post<Recomendation>(`${this.baseUrl}/recomendations`, { recomendation });
  }

}
