import { useGlobalContext } from '@/context';
import React, { useEffect, useRef, useState } from 'react';
import ShortUniqueId from 'short-unique-id';

interface ImgScrollEffInt {
  children: React.ReactNode;
  intersectionRefs: React.MutableRefObject<HTMLElement[]>;
}

const ImgScrollEff2: React.FC<ImgScrollEffInt> = ({
  children,
  intersectionRefs,
}) => {
  const { img2Refs } = useGlobalContext();
  const handleEventRefs = useRef<{ callBack: EventListener; id: string }[]>([]);
  const [inlineOffset, setInlineOffset] = useState(40);
  const initialInlineOffset = useRef(40);
  const firstEntry = useRef(true);

  const eventCallBack = (el: HTMLElement) => {
    const initialY = Number(el.dataset.initialY);
    const scrollDiff =
      scrollY > initialY ? (scrollY - initialY) / 6 : (scrollY - initialY) / 12;

    setInlineOffset((prev) => {
      const diff = initialInlineOffset.current - scrollDiff;

      if (diff < 0) {
        return 0;
      }

      if (diff > 40) {
        return 40;
      }

      return diff;
    });
  };

  const callBack: IntersectionObserverCallback = (entries, observer) => {
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

        const topDiff =
          entry.boundingClientRect.top > (entry.rootBounds?.top ?? 0)
            ? (entry.boundingClientRect.top - (entry.rootBounds?.top ?? 0)) / 6
            : (entry.boundingClientRect.top - (entry.rootBounds?.top ?? 0)) /
              12;

        if (firstEntry.current) {
          setInlineOffset((prev) => {
            const diff = initialInlineOffset.current - topDiff;

            targetEl.dataset.initialY = String(scrollY - diff);

            if (diff < 0) {
              return 0;
            }

            if (diff > 40) {
              return 40;
            }
            // initialInlineOffset.current = diff;
            return diff;
          });
        }

        addEventListener('scroll', callBack);
        firstEntry.current = false;
      } else {
        const { callBack } = handleEventRefs.current.find(
          (opt) => opt.id === targetEl.dataset.id
        )!;
        setInlineOffset((prev) => {
          if (entry.boundingClientRect.bottom < (entry.rootBounds?.top ?? 0)) {
            initialInlineOffset.current = 0;
            return 0;
          }
          initialInlineOffset.current = prev;
          return prev;
        });
        removeEventListener('scroll', callBack);
        firstEntry.current = false;
      }
    });
  };

  useEffect(() => {
    if (img2Refs && img2Refs.current.length) {
      const imgEls = img2Refs.current;

      const observer = new IntersectionObserver(callBack, {
        rootMargin: '-75% 0px 0px 0px',
      });

      imgEls.forEach((el) => {
        observer.observe(el);
      });
    }
  }, []);

  return (
    <div
      className='img_wrapper scroll_eff2'
      ref={(el) => {
        if (el && img2Refs) {
          intersectionRefs.current.push(el);
          !img2Refs.current.find((rEl) => rEl === el) &&
            img2Refs.current.push(el);
        }
      }}
      style={{ clipPath: `inset(0 ${inlineOffset}% round 20px)` }}
    >
      {children}
    </div>
  );
};

export default ImgScrollEff2;
