import React, { useEffect, useRef } from 'react';

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

  const initialY = useRef(0);
  const handleEventRef = useRef<EventListener | null>(null);

  const callBack: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (!handleEventRef.current)
        handleEventRef.current = () =>
          eventCallBack(entry.target as HTMLElement);
      if (entry.isIntersecting) {
        addEventListener('scroll', handleEventRef.current);
      } else {
        if (handleEventRef.current)
          removeEventListener('scroll', handleEventRef.current);
      }
    });
  };

  const eventCallBack = (el: HTMLElement) => {
    const diff = (scrollY - initialY.current) / 10;
    const percent = 50 + (diff / el.getBoundingClientRect().height) * 100;

    el.style.objectPosition = `50% ${percent}%`;
  };

  const calibrate = (el: HTMLElement) => {
    initialY.current =
      el.getBoundingClientRect().top > innerHeight
        ? el.getBoundingClientRect().bottom -
          el.getBoundingClientRect().height -
          innerHeight
        : el.getBoundingClientRect().bottom - el.getBoundingClientRect().height;
  };

  useEffect(() => {
    const childEl = (children as any).ref.current as HTMLElement;

    calibrate(childEl);

    addEventListener('resize', () => calibrate(childEl));

    const observer = new IntersectionObserver(callBack);

    observer.observe(childEl);

    return () => removeEventListener('resize', () => calibrate(childEl));
  }, []);

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
