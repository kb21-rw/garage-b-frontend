import { Image } from "@/types/image";
import { Link } from "@/types/link";
import { RichText } from "@/types/richText";

export interface HeroSectionBlock {
  __component: "blocks.hero-section";
  id: number;
  BackgroundImage: Image[];
  Header: string;
}

export interface TextBlockSectionBlock {
  __component: "blocks.text-block-section";
  id: number;
  title: string;
  description: RichText[];
}

interface Icon {
  id: number;
  text: string;
  link: Link;
  image: Image;
}

export interface ImageSliderSectionBlock {
  __component: "blocks.image-slider-section";
  id: number;
  header: {
    description: RichText[];
    id: number;
    title: string;
  };
  images: Icon[];
}

export interface IconCard {
  id: number;
  title: string;
  description: RichText[];
  icon: Image;
}

export interface IconCardBlock {
  __component: "blocks.icon-card-block";
  id: number;
  Header: {
    description: RichText[];
    id: number;
    title: string;
  };
  Cards: IconCard[];
}

export type Block =
  | HeroSectionBlock
  | TextBlockSectionBlock
  | ImageSliderSectionBlock
  | IconCardBlock;

export interface HomepageData {
  id: number;
  documentId: string;
  Title: string;
  Description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  blocks: Block[];
}

export interface BlockType {
  __component: string;
}
