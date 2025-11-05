// app/layout.tsx
import './globals.css';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Cada Hogar Cuba',
  description: 'Building a community with purpose'
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
