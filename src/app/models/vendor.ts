import { EVendorRequestStatus } from './vendor-request';

export interface Vendor {
  id?: number;
  ruc?: string;
  economic_activity?: string;
  legal_representative?: string;
  business_name?: string;
  image?: string;
  logo?: string;
  slogan?: string;
  status?: EVendorRequestStatus;
}
