import { AppProps } from "next/app";
import { GlobalStyleComponent } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";

const app = ({Component, pageProps}: AppProps) => {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>

    );
};

export default app;