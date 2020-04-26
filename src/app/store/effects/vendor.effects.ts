import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';

import { VendorService } from '../../shared/services/vendor.service';
import {
    VendorActionTypes,
    SetVendor,
    SetVendorRequest
} from '../actions/vendor.actions';

@Injectable()
export class VendorEffects {

  constructor(
    private actions: Actions,
    private vendorService: VendorService
  ) { }

    SetVendorRequest: Observable<any> = createEffect(() => this.actions
    .pipe(ofType(VendorActionTypes.SET_VENDOR_REQUEST),
      map((action: SetVendorRequest) => action),
      switchMap(() =>
        this.vendorService.getVendorInformation().pipe(
          map((response) => {
            return new SetVendor({vendorRequest: response});
          })
        )
      )
    ));
}
