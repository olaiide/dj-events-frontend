import { FC, ReactNode } from "react";
import Head from "next/head";
import styles from "../styles/Layout.module.css"
interface LayoutTypes {
  title?: string;
  keywords?: string;
  description?: string;
  children: ReactNode;
}
const Layout: FC<LayoutTypes> = ({
  title,
  keywords,
  description,
  children,
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <div className={styles.container}>
        {children}
        </div>
      </Head>
    </div>
  );
};

Layout.defaultProps = {
  title: "DJ Events | Find the hottest parties",
  description: "Find the latest DJ and other musical events",
  keywords: "music, dj, edm, events",
};

export default Layout;
