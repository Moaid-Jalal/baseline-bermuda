"use client"

import SplashScreen from '@/app/_components/splashscreen/splashscreen';
import { useState } from 'react';

interface ProviderProps {
  children: React.ReactNode;
}

export const Provider = ({ children }: ProviderProps) => {
  const [loadingFinished, setLoadingFinished] = useState(false);

  return (
    <>
      {!loadingFinished && <SplashScreen onFinish={() => setLoadingFinished(true)} />}
      <main style={{ display: loadingFinished ? 'block' : 'none' }}>
        {children}
      </main>
    </>
  );
}
