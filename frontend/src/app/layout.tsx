import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'gmgm-web3',
  description: 'The Stellar ecosystem growth hub',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
