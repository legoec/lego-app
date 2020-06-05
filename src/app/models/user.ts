export interface User {
  id?: number;
  name: string;
  email: string;
  admin?: boolean;
  isVendor?: boolean;
  nickname?: string;
  image?: Image;
}

interface Image {
  url: string;
}
