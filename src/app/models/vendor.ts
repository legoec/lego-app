import { Category } from './category';
import { Image } from './image';

export interface Vendor {
  id?: number;
  ruc?: string;
  economic_activity?: string;
  legal_representative?: string;
  business_name?: string;
  image?: string;
  logo?: Image;
  slogan?: Image;
  contributor_type?: string;
  mobile?: string;
  category_id?: number;
  category?: Category;
}
