import { Vendor } from './vendor';

export interface Service {
    id?: number;
    name?: string;
    price?: number;
    amount?: boolean;
    vendor_id?: number;
    vendor?: Vendor
}
