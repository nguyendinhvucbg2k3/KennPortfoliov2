import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { LanguageProvider } from '@/context/language-context';
import { ThemeProvider } from '@/context/theme-context';
import { QuickContact } from '@/components/layout/QuickContact';
import { MotionWrapper } from '@/components/layout/MotionWrapper';
import { ScrollProgressDragon } from '@/components/layout/ScrollProgressDragon';
import { OfflineIndicator } from '@/components/layout/OfflineIndicator';

const fontInter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const fontSpaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'Thac Nguyen Dinh Vu - Portfolio',
  description: 'The graphic design portfolio of Thac Nguyen Dinh Vu.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased',
          fontInter.variable,
          fontSpaceGrotesk.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <div className="relative flex min-h-dvh flex-col bg-background">
              <ScrollProgressDragon />
              <Header />
              <main className="flex-1">
                <MotionWrapper>{children}</MotionWrapper>
              </main>
              <Footer />
              <QuickContact />
              <OfflineIndicator />
            </div>
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
