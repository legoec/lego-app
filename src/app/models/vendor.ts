export interface Vendor {
  ruc?: string;
  economic_activity?: string;
  legal_representative?: string;
  business_name?: string;
  image?: string;
  logo?: string;
  slogan?: string;
  status?: VendorStatus;
}

export enum VendorStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  DISABLED = 'disabled',
  DECLINED = 'declined'
}
