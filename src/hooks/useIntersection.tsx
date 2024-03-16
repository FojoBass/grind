import { useEffect, useRef } from 'react';

const useIntersection = () => {
  const intersectionRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    if (intersectionRefs.current.length) {
      const callback: IntersectionObserverCallback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add('intersects');
            el.ontransitionend = () => {
              if (el.classList.contains('link_wrapper'))
                el.removeAttribute('style');
            };
            observer.unobserve(el);
          }
        });
      };

      const observer = new IntersectionObserver(callback, {
        threshold: 0.3,
      });

      const intersectionEls = [...new Set(intersectionRefs.current)];

      intersectionEls.forEach((el) => {
        observer.observe(el);
      });

      return () => observer.disconnect();
    }
  }, [intersectionRefs.current.length]);

  return intersectionRefs;
};

export default useIntersection;
