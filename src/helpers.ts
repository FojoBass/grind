import { DropDownInt } from './types';

const dropDown: DropDownInt = (isDrop, wrapperEl, contentEl) => {
  if (isDrop)
    wrapperEl.style.height = `${contentEl.getBoundingClientRect().height}px`;
  else wrapperEl.style.height = '0';
};

const toggleAnimate = (isAnimate: boolean) => {
  if (isAnimate) document.documentElement.classList.add('animate');
  else document.documentElement.classList.remove('animate');
};

export { dropDown, toggleAnimate };
