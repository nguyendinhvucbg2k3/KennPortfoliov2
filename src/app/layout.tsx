import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { LanguageProvider } from '@/context/language-context';
import { QuickContact } from '@/components/layout/QuickContact';
import { MotionWrapper } from '@/components/layout/MotionWrapper';

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
    <html lang="en" className="dark">
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased',
          fontInter.variable,
          fontSpaceGrotesk.variable
        )}
      >
        <LanguageProvider>
          <div className="relative flex min-h-dvh flex-col bg-background">
             <div className="absolute top-0 left-0 -z-10 h-full w-full overflow-hidden">
                <div className="absolute inset-0 bg-background">
                  <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(230,57,70,0.1),rgba(255,255,255,0))] aurora-animate"></div>
                  <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(244,162,97,0.1),rgba(255,255,255,0))] aurora-animate [animation-delay:-6s]"></div>
                </div>
            </div>
            <Header />
            <main className="flex-1">
              <MotionWrapper>{children}</MotionWrapper>
            </main>
            <Footer />
            <QuickContact />
          </div>
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
