import {AppProps} from "next/app";
import Header from "../components/Header";
import Footer from "../components/footer";
import GlobalStyle from "../styles/GolbalStyle";
import { wrapper } from "../store";

const app = ({Component, pageProps}: AppProps) => {
    // const {store, props} = wrapper.useWrappedStore(pageProps);
    return (
        <>
            <GlobalStyle />
            <Header />
            <Component {...pageProps}/>
            <Footer />
        </>
    );
};

export default wrapper.withRedux(app);