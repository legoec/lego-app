import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Vendor } from '../../models/vendor';

@Injectable()
export class VendorsService {
  constructor(private http: HttpClient) { }

  private baseUrl: string = `${environment.apiBase}/v0/vendors`;

  getVendors(): Observable<Vendor[]> {
      return this.http.get<Vendor[]>(this.baseUrl);
  }

}