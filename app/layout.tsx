import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ReduxProvider } from '@/components/providers/ReduxProvider';
import { Toaster } from 'sonner'; 

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LinkedIn AI Post Scheduler',
  description: 'Generate and schedule LinkedIn posts with AI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          {children}
          <Toaster position="top-right" richColors />
        </ReduxProvider>
      </body>
    </html>
  );
}