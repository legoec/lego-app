import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { VendorRequest } from 'src/app/models/vendor-request';

@Injectable()
export class VendorRequestService {
  constructor(private http: HttpClient) { }

  private baseUrl: string = `${environment.apiBase}/v0/vendor_requests`;

  sendRequest(vendorRequest: VendorRequest) {
    return this.http.post<VendorRequest>(this.baseUrl, { vendor_request: vendorRequest });
  }

}
