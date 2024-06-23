import { Bricolage_Grotesque, Roboto } from "next/font/google";

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
