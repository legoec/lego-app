import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, getAuthenticatedUserId, getVendorRequest } from 'src/app/store/app.states';
import { SetVendorRequest, ClearVendor,  } from 'src/app/store/actions/vendor.actions';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Vendor } from 'src/app/models/vendor';
import { environment } from 'src/environments/environment';
import { take, switchMap } from 'rxjs/operators';
import { VendorRequest } from 'src/app/models/vendor-request';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  private userVendorUrl: string = `${environment.apiBase}/v0/users`;
  private baseUrl: string = `${environment.apiBase}/v0/vendors`;

  constructor(
    private store: Store<AppState>,
    private http: HttpClient
  ) { }

  setVendor(): void {
    this.store.dispatch(new SetVendorRequest());
  }

  getVendorInformation(): Observable<Vendor> {
    return this.store.select(getAuthenticatedUserId).pipe(
      take(1),
      switchMap(userId => {
        return this.http.get<Vendor>(`${this.userVendorUrl}/${userId}/vendor`);
      })
    )
  }

  getVendorRequest(): Observable<VendorRequest> {
    return this.store.select(getVendorRequest);
  }

  clearVendorRequest(): void {
    this.store.dispatch(new ClearVendor());
  }

  createVendor(formDataVendor: FormData): Observable<VendorRequest> {
    return this.http.post<VendorRequest>(this.baseUrl, formDataVendor);
  }

  updateVendor(formDataVendor: FormData, vendorId: number): Observable<VendorRequest> {
    return this.http.put<VendorRequest>(`${this.baseUrl}/${vendorId}`, formDataVendor);
  }
}
