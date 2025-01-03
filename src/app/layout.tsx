import Providers from "@/components/Providers";
import { getSession } from "@/lib/sessions";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GoogleAnalytics } from '@next/third-parties/google'

type Props = {
  children: React.ReactNode;
};

const description =
  "Gere avatares de IA que capturam perfeitamente o seu estilo único. Escreva um prompt e deixe nossa tecnologia Dreambooth e Stable Diffusion fazer o resto.";
const image = "https://photowiz.app/og-cover.jpg";

export const metadata: Metadata = {
  title: {
    template: "%s | Photowiz",
    default: "Gere avatares customizados com IA",
  },
  description,
  twitter: {
    card: "summary_large_image",
    site: "@shinework",
    creator: "@shinework",
    title: { template: "%s | Photowiz", default: "Gere avatares customizados com IA" },
    description,
    images: [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: "Photowiz",
      },
    ],
  },
  openGraph: {
    title: { template: "%s | Photowiz", default: "Gere avatares customizados com IA" },
    images: [
      description,
      {
        url: image,
        width: 1200,
        height: 630,
        alt: "Photowiz",
      },
    ],
  },
};

export default async function RootLayout({ children }: Props) {
  const session = await getSession();

  return (
    <html lang="en">
      <link rel="shortcut icon" href="/favicon.png" />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body>
        <Providers session={session}>{children}</Providers>
        <Analytics />
        <SpeedInsights />
      </body>
      <GoogleAnalytics gaId="AW-1037086655" />
    </html>
  );
}
