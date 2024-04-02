'use client';

import React, {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { createContext } from 'react';
import { Position } from './types';

interface ContextInt {
  isSideOpen?: boolean;
  setIsSideOpen?: Dispatch<SetStateAction<boolean>>;
  pos?: Position;
  setPos?: Dispatch<SetStateAction<Position>>;
  highlightElRefs?: MutableRefObject<HTMLElement[]>;
  setHPos?: Dispatch<SetStateAction<Position[]>>;
  hPos?: Position[];
  imgRefs?: MutableRefObject<HTMLElement[]>;
  img2Refs?: MutableRefObject<HTMLElement[]>;
  slidesPerView?: number;
}

const AppContext = createContext<ContextInt>({});

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isSideOpen, setIsSideOpen] = useState(false);
  const [pos, setPos] = useState<Position>({ x: 0, y: 0 });
  const highlightElRefs = useRef<HTMLElement[]>([]);
  const [hPos, setHPos] = useState<Position[]>([]);
  const imgRefs = useRef<HTMLElement[]>([]);
  const img2Refs = useRef<HTMLElement[]>([]);
  const [slidesPerView, setSlidesPerView] = useState(1);

  const widthCheck = () => {
    if (innerWidth <= 750) setSlidesPerView(1);
    else if (innerWidth <= 1000) setSlidesPerView(2);
    else setSlidesPerView(3);
  };

  useEffect(() => {
    widthCheck();

    addEventListener('resize', () => {
      widthCheck();
    });
  }, []);

  useEffect(() => {
    const highlightEls = highlightElRefs.current;
    if (highlightEls.length) {
    }
  }, []);

  const sharedProps: ContextInt = {
    isSideOpen,
    setIsSideOpen,
    pos,
    setPos,
    highlightElRefs,
    hPos,
    setHPos,
    imgRefs,
    img2Refs,
    slidesPerView,
  };

  return (
    <AppContext.Provider value={sharedProps}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
