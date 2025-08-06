import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import { Toaster } from '@/components/ui/sonner';
import { Analytics } from "@vercel/analytics/next";
import LenisProvider from '@/components/lenisprovider';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import Footer from '@/components/footer';
import DisableRightClick from '@/components/DisableRightClick';

export const metadata = {
  title: 'KyaPadhnaHai?',
  description: 'Curated academic resources, notes, and study tips for freshers. Make your learning journey efficient and stress-free.',
  icons: {
    icon: "/lib.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-poppins antialiased">
        <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <DisableRightClick />
          <LenisProvider>
            <ScrollProgressBar />
            <div className="min-h-screen relative overflow-hidden bg-background text-foreground">
              <div className="absolute inset-0 -z-10 overflow-hidden">
                {/* Pink Glow */}
                <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-pink-400 dark:bg-pink-600 opacity-30 blur-3xl animate-blob"></div>

                {/* Violet Glow */}
                <div className="absolute top-[10%] left-[70%] h-[450px] w-[450px] rounded-full bg-violet-400 dark:bg-violet-600 opacity-30 blur-3xl animate-blob animation-delay-2000"></div>

                {/* Sky Blue Glow */}
                <div className="absolute top-[40%] left-[7%] h-[400px] w-[400px] rounded-full bg-sky-400 dark:bg-sky-600 opacity-30 blur-3xl animate-blob animation-delay-4000"></div>

                {/* Orange Glow */}
                <div className="absolute top-[80%] left-[70%] h-[400px] w-[400px] rounded-full bg-purple-400 dark:bg-purple-400 opacity-25 blur-3xl animate-blob animation-delay-3000"></div>
              </div>
              <Header />
              <main className="container mx-auto px-4 py-8 relative z-10">
                {children}
              </main>
            </div>
            <Footer />
            <Toaster />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
