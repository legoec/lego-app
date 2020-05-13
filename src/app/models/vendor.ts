import { Category } from './category';

export interface Vendor {
  id?: number;
  ruc?: string;
  economic_activity?: string;
  legal_representative?: string;
  business_name?: string;
  image?: string;
  logo?: string;
  slogan?: string;
  contributor_type?: string;
  mobile?: string;
  category_id?: number;
  category?: Category
}
