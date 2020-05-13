import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { VendorActivity } from 'src/app/models/vendor-activity';

@Injectable({
  providedIn: 'root'
})
export class VendorActivityService {
  private baseUrl: string = `${environment.apiBase}/v0/services`;

  constructor(private http: HttpClient) { }

  addService(service: VendorActivity): Observable<VendorActivity> {
    return this.http.post<VendorActivity>(this.baseUrl, { service });
  }

  getMyServices(vendorId: string) {}
}
