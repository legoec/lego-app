import { Image } from './image';

export interface User {
  id?: number;
  name: string;
  email: string;
  admin?: boolean;
  isVendor?: boolean;
  nickname?: string;
  image?: Image;
}
