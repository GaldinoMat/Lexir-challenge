import BrandInfo from "@components/pages/index/BrandInfo";
import ProductListing from "@components/pages/index/ProductListing";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { gql } from '@apollo/client';
import client from "apolloClient";
import IQueryProps from "../types/interfaces";

export default function Home({ brandName, brandText, imageURL, location }: IQueryProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lexir Frontend Assessment!</title>
        <meta name="description" content="Lexir Frontend Assessment!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <BrandInfo brandName={brandName} brandText={brandText} imageURL={imageURL} location={location} />
        <ProductListing />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await client.query(
    {
      query: gql`
        query {
          indexPageInfo(where: { id: "cl7gsw80o87bz0cj17nsfkboh" }) {
            indexPageImage {
              url
            }
            indexPageBrandInfo {
              text
            }
            indexPageLocationInfo
            indexPageBrandName
          }
        }
      `
    }
  )

  return {
    props: {
      imageURL: data.indexPageInfo.indexPageImage.url,
      brandName: data.indexPageInfo.indexPageBrandName,
      brandText: data.indexPageInfo.indexPageBrandInfo.text,
      location: data.indexPageInfo.indexPageLocationInfo
    }
  }
}