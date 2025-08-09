import { Provider } from '@/providers/provider';
import './globals.css';
import type { Metadata } from 'next';
import { HorizontalProgressBar } from './_components/splashscreen/splashscreen';


export const metadata: Metadata = {
  title: 'bermuda',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider
          children={children}
        />
      </body>
    </html>
  );
}