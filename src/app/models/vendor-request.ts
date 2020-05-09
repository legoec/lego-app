import { Vendor } from './vendor';

export interface VendorRequest {
    id?: number;
    vendor?: Vendor;
    status?: EVendorRequestStatus;
    feedback?: string;
}

export enum EVendorRequestStatus {
    PENDING = 'pending',
    APPROVED = 'approved',
    DISABLED = 'disabled',
    DECLINED = 'declined'
}
