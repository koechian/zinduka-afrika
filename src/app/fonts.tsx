import { Inter, Tenor_Sans } from "next/font/google";
import localFont from "next/font/local";

// Importing Local Fonts
export const boska = localFont({
  variable: "--boska-variable",
  src: "./fonts/Boska-Variable.woff2",
  display: "swap",
});

export const sentient = localFont({
  variable: "--sentient-variable",
  src: "./fonts/Sentient-Variable.woff2",
  display: "swap",
});

// Importing Google Fonts
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const tenor_sans = Tenor_Sans({ weight: "400", subsets: ["latin"] });
