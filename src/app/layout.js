import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  keywords: [
    "pitch deck",
    "AI pitch deck",
    "pitch deck analysis",
    "startup pitch deck",
    "business pitch deck",
    "AI analysis",
    "software development",
    "automated analysis",
  ],
  title: "Pitchdeck Evaluator - AI Pitch Deck Analyzer",
  description: "Analyze your pitch deck into software with a click",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
