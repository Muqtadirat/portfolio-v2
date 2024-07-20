import { Bricolage_Grotesque, Roboto, Inconsolata } from "next/font/google";

export const bricolage_grotesque = Bricolage_Grotesque({
  weight: "800",
  subsets: ["latin"],
  variable: "--bricolage",
});

export const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--roboto",
});

export const inconsolata = Inconsolata({
  weight: "400",
  subsets: ["latin"],
  variable: "--inconsolata",
});
