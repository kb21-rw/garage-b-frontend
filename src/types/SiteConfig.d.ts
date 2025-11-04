import { Image } from "./Image";
import { Link } from "./Link";
import { RichText } from "./richText";

interface RootObject {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  footer: Footer;
  navbar: Navbar;
}
interface Logo {
  id: number;
  image: Image;
  link: Link;
  text: string;
}

interface MenuIcon {
  id: number;
  image: Image;
  link: Link;
  text: string;
}
export interface SocialMedia {
  id: number;
  image: Image;
  link: Link;
  text: string;
}
export interface Footer {
  copyright: RichText[];
  email: string;
  socialmedia: SocialMedia[];
}

export interface NavBar {
  favicon: Favicon;
  id: number;
  logo: Logo;
  menuIcon: MenuIcon;
}
