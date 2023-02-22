import { AppProps } from "next/app";
import { GlobalStyleComponent } from "styled-components";
import Header from "../components/Header";
import GlobalStyle from "../styles/GlobalStyle";

const app = ({Component, pageProps}: AppProps) => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Component {...pageProps} />
        </>

    );
};

export default app;