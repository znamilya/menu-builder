import type { AppProps /*, AppContext */ } from "next/app";
import { ReactQueryDevtools } from "react-query-devtools";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
};

export default MyApp;
