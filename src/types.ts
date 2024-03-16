export interface NavOptInt {
  title: string;
  link: string;
  subOpts?: NavOptInt[];
}

export interface DropDownInt {
  (isDrop: boolean, wrapperEl: HTMLElement, contentEl: HTMLElement): void;
}

export interface ServiceOptInt {
  title: string;
  url: string;
}

export enum OverlayPosEnum {
  tr = 'tr',
  br = 'br',
}
