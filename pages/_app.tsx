import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { Toaster } from "react-hot-toast";
import { GlobalProvider } from "../context/GlobalContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={ChainId.Mumbai}>
      <GlobalProvider>
        <Component {...pageProps} />
        <Toaster />
      </GlobalProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
