import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";

const font = Roboto({ 
  subsets: ["latin"],
  weight: ["100", "400", "700"]
});
export default function App({ Component, pageProps }: AppProps) {
  return(
    <div className={`w-screen h-screen overflow-y-hidden ${font.className}`}>
      <Component {...pageProps} />
    </div>
  ) 
}
