import Head from "next/head";
import { useRouter } from "next/router";
import { LayoutTypes } from "../types/layout";
import Header from "./Header";
import Footer from "./Footer";
import styles from "@/styles/Layout.module.css";
import Showcase from "./Showcase";

const Layout = ({
  title,
  keywords,
  description,
  children,
} : LayoutTypes) => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Header />
      {router.pathname === "/" && <Showcase />}
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "DJ Events | Find the hottest parties",
  description: "Find the latest DJ and other musical events",
  keywords: "music, dj, edm, events",
};

export default Layout;
