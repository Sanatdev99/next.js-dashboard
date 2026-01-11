import '@/app/ui/globals.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="eng">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}