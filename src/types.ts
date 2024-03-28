import { StaticImageData } from 'next/image';
import { IconType } from 'react-icons';

export interface LinkInt {
  title: string;
  link: string;
}

export interface NavOptInt extends LinkInt {
  subOpts?: NavOptInt[];
}

export interface DropDownInt {
  (isDrop: boolean, wrapperEl: HTMLElement, contentEl: HTMLElement): void;
}

export interface FullServiceOptInt {
  title: string;
  info: string;
  price: number;
}

export interface Position {
  x: number;
  y: number;
  id?: string;
}

export interface WhyUsOptInt {
  title: string;
  slicePoints: { start: number; end: number };
  info: string;
}

export interface PortOptInt {
  categ: PortCategEnum;
  title: string;
  imgUrl: StaticImageData;
}

export interface TestimonialsInt {
  msg: string;
  author: string;
  position: string;
  stars: number;
}

export interface SocialsInt {
  Icon: IconType;
  id: string;
  url: '/';
}

export interface FooterLinksInt {
  title: string;
  linkOpts: LinkInt[];
}

export enum OverlayPosEnum {
  tr = 'tr',
  br = 'br',
}

export enum PortCategEnum {
  br = 'branding',
  ad = 'advertising',
  mk = 'marketing',
}
