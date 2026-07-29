import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar, Footer, CustomCursor, BackgroundGlow } from "@/components";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "Sewmini Wijesiri",
  description: "A showcase of my work and skills",
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function clean() {
                  document.querySelectorAll('[bis_skin_checked]').forEach(el => el.removeAttribute('bis_skin_checked'));
                  if (document.body) {
                    document.body.removeAttribute('bis_register');
                    for (let i = document.body.attributes.length - 1; i >= 0; i--) {
                      const attr = document.body.attributes[i];
                      if (attr && attr.name && attr.name.startsWith('__processed_')) {
                        document.body.removeAttribute(attr.name);
                      }
                    }
                  }
                }
                clean();
                document.addEventListener('DOMContentLoaded', clean);
                if (typeof MutationObserver !== 'undefined') {
                  const observer = new MutationObserver((mutations) => {
                    mutations.forEach((mutation) => {
                      if (mutation.type === 'childList') {
                        mutation.addedNodes.forEach((node) => {
                           if (node.nodeType === 1) {
                            if (node.hasAttribute('bis_skin_checked')) {
                              node.removeAttribute('bis_skin_checked');
                            }
                            node.querySelectorAll('[bis_skin_checked]').forEach(el => el.removeAttribute('bis_skin_checked'));
                          }
                        });
                      } else if (mutation.type === 'attributes' && mutation.attributeName === 'bis_skin_checked') {
                        if (mutation.target.nodeType === 1 && mutation.target.hasAttribute('bis_skin_checked')) {
                          mutation.target.removeAttribute('bis_skin_checked');
                        }
                      }
                    });
                  });
                  observer.observe(document.documentElement, {
                    childList: true,
                    subtree: true,
                    attributes: true,
                    attributeFilter: ['bis_skin_checked']
                  });
                }
              })();
            `
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-[#020617] text-slate-100 min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <CustomCursor />
        <BackgroundGlow />
        <Navbar />
        <main className="flex-grow relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}


