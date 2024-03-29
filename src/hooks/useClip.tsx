import { OverlayPosEnum } from '@/types';
import ShortUniqueId from 'short-unique-id';

interface UseClipInt {
  (bgEl: HTMLElement, overEl: HTMLElement, pos: OverlayPosEnum): string;
}

const useClip: UseClipInt = (bgEl, overEl, pos) => {
  const uid = new ShortUniqueId({ length: 6 });
  const clipId = `clipper${uid.rnd()}`;
  const wrapperEl = bgEl.parentElement!;

  const constructSvg = () => {
    if (
      wrapperEl.children[
        wrapperEl.children.length - 1
      ].tagName.toLowerCase() === 'svg'
    ) {
      wrapperEl.children[wrapperEl.children.length - 1].remove();
    }

    const br = parseFloat(getComputedStyle(bgEl).borderRadius);
    const bW = bgEl.getBoundingClientRect().width;
    const bH = bgEl.getBoundingClientRect().height;
    const oW = overEl.getBoundingClientRect().width;
    const oH = overEl.getBoundingClientRect().height;
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const clipPath = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'clipPath'
    );
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    svg.setAttribute('width', '0');
    svg.setAttribute('height', '0');
    svg.classList.add('clip_svg');

    clipPath.setAttribute('id', clipId);
    let d: string;

    switch (pos) {
      case OverlayPosEnum.tr:
        d = `M0 ${br} 
             a${br} ${br} 0 0 1 ${br} -${br}
             H${bW - oW - br}
             a${br} ${br} 0 0 1 ${br} ${br}
             V${oH - br}
             a${br} ${br} 0 0 0 ${br} ${br}
             h${oW - 2 * br}
             a${br} ${br} 0 0 1 ${br} ${br}
             V${bH - br}
             a${br} ${br} 0 0 1 -${br} ${br}
             H${br}
             a${br} ${br} 0 0 1 -${br} -${br}
             Z
             `;
        break;
      case OverlayPosEnum.br:
        d = `M0 ${br}
             a${br} ${br} 0 0 1 ${br} -${br}
             H${bW - br}
             a${br} ${br} 0 0 1 ${br} ${br}
             V${bH - oH - br}
             a${br} ${br} 0 0 1 -${br} ${br}
             H${bW - oW + br}
             a${br} ${br} 0 0 0 -${br} ${br}
             V${bH - br}
             a${br} ${br} 0 0 1 -${br} ${br}
             H${br}
             a${br} ${br} 0 0 0 -${br} -${br}
             Z
            `;
        break;
      default:
        return '';
    }
    path.setAttribute('d', d);
    clipPath.appendChild(path);
    defs.appendChild(clipPath);
    svg.appendChild(defs);

    bgEl.parentElement!.appendChild(svg);
  };

  constructSvg();

  return clipId;
};

export default useClip;
