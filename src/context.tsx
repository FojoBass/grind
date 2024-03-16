'use client';

import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { createContext } from 'react';

interface ContextInt {
  isSideOpen?: boolean;
  setIsSideOpen?: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<ContextInt>({});

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isSideOpen, setIsSideOpen] = useState(false);

  const sharedProps: ContextInt = {
    isSideOpen,
    setIsSideOpen,
  };

  return (
    <AppContext.Provider value={sharedProps}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
