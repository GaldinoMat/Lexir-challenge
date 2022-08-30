import BrandInfo from "@components/pages/index/BrandInfo";
import ProductListing from "@components/pages/index/ProductListing";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lexir Frontend Assessment!</title>
        <meta name="description" content="Lexir Frontend Assessment!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <BrandInfo />
        <ProductListing />
      </main>
    </div>
  );
}
