import Footer from "@components/global/Footer";
import Header from "@components/global/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
