import { Navbar } from './components/navbar';
import './globals.css';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'نظام الإدارة | لوحة التحكم',
  description: 'نظام إدارة متكامل للمنتجات والطلبات والمدراء',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}