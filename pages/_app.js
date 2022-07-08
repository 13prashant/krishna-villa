import Navbar from "../components/Commons/Navbar";
import Footer from "../components/Commons/Footer";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
