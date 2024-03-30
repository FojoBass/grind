import { useGlobalContext } from '@/context';
import React, { useEffect, useRef } from 'react';
import ShortUniqueId from 'short-unique-id';

const ImgScrollEff = ({
  children,
  intersectionRefs,
}: {
  children: React.ReactElement;
  intersectionRefs: React.MutableRefObject<HTMLElement[]>;
}) => {
  if (!React.isValidElement(children)) {
    throw new Error('Yo, wrong child bruff');
  }
  const handleEventRefs = useRef<{ callBack: EventListener; id: string }[]>([]);
  const { imgRefs } = useGlobalContext();

  const callBack: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      const targetEl = entry.target as HTMLElement;

      if (!targetEl.dataset.id) {
        targetEl.dataset.id = new ShortUniqueId({
          length: 10,
        }).rnd();
      }

      if (
        !handleEventRefs.current.find((opt) => opt.id === targetEl.dataset.id)
      )
        handleEventRefs.current.push({
          id: targetEl.dataset.id,
          callBack: () => eventCallBack(targetEl),
        });

      if (entry.isIntersecting) {
        targetEl.dataset.initialY = String(scrollY);
        const { callBack } = handleEventRefs.current.find(
          (opt) => opt.id === targetEl.dataset.id
        )!;
        addEventListener('scroll', callBack);
      } else {
        const { callBack } = handleEventRefs.current.find(
          (opt) => opt.id === targetEl.dataset.id
        )!;
        removeEventListener('scroll', callBack);
      }
    });
  };

  const eventCallBack = (el: HTMLElement) => {
    const initialY = Number(el.dataset.initialY);
    const offset = scrollY >= initialY ? -20 : 20;
    const diff = (scrollY - initialY) / 30 + offset;

    el.style.transform = `translateY(${diff}px)`;
  };

  useEffect(() => {
    if (imgRefs && imgRefs.current.length) {
      const childEls = imgRefs.current;
      const observer = new IntersectionObserver(callBack);

      childEls.forEach((el) => {
        observer.observe(el);
      });
    }
  }, [imgRefs?.current.length]);

  return (
    <div
      className='img_wrapper scroll_eff'
      ref={(el) => el && intersectionRefs.current.push(el)}
    >
      {children}
    </div>
  );
};

export default ImgScrollEff;
