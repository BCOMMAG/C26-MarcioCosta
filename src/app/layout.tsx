import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { SmoothScroll } from "@/components/SmoothScroll";
import { getLegalServiceSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://marciocosta.pages.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Advocacia Márcio Wagner Costa | Direito Criminal em Curitiba PR",
    template: "%s | Advocacia Márcio Wagner Costa",
  },
  description:
    "Defesa criminal técnica, combativa e estratégica em Curitiba e todo o Paraná. Atuação em Audiência de Custódia, Tribunal do Júri, Execução Penal, Habeas Corpus e Inquéritos Policiais. Sede física no Xaxim e atendimento 24h para flagrantes.",
  keywords: [
    "advogado criminalista curitiba",
    "advocacia marcio wagner costa",
    "marcio costa advogado criminalista",
    "audiencia de custodia curitiba",
    "tribunal do juri curitiba pr",
    "habeas corpus parana",
    "advogado criminal xaxim curitiba",
    "defesa criminal flagrante curitiba",
    "advogado prisao em flagrante 24h",
    "execucao penal progressao de regime",
  ],
  authors: [{ name: "Márcio Wagner Costa" }],
  creator: "Márcio Wagner Costa",
  publisher: "Advocacia Márcio Wagner Costa",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: "Advocacia Márcio Wagner Costa | Direito Criminal em Curitiba PR",
    description:
      "Defesa criminal técnica, combativa e estratégica. Atuação em Flagrantes, Audiências de Custódia, Tribunal do Júri e Habeas Corpus.",
    siteName: "Advocacia Márcio Wagner Costa",
    images: [
      {
        url: "/og-image_optimized_300.jpg",
        width: 1200,
        height: 630,
        alt: "Advocacia Márcio Wagner Costa - Advocacia Criminal em Curitiba PR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advocacia Márcio Wagner Costa | Direito Criminal em Curitiba PR",
    description:
      "Defesa criminal estratégica e combativa em Curitiba e todo o Paraná. Audiências de Custódia, Tribunal do Júri e Habeas Corpus.",
    images: ["/og-image_optimized_300.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/favicon-apple-touch-icon180x180.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = getLegalServiceSchema();

  return (
    <html lang="pt-BR" suppressHydrationWarning className="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem('sa_theme');
                if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {
                document.documentElement.classList.add('dark');
              }
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${cormorantGaramond.variable} font-body antialiased selection:bg-[#C9A24A] selection:text-[#0A0A0A] bg-[var(--bg-primary)] text-[var(--text-main)]`}
      >
        <ThemeProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}