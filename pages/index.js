import Head from "next/head";
import Part1 from "./components/Part1";
import styles from "../styles/Home.module.css";
import Part4  from "./components/Part4 ";
import Part2 from "./components/Part2";
import Footer from "./components/Footer";

import Part3  from "./components/Part3 ";
import Part5 from "./components/Part5";
import Part6 from "./components/Part6";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Holal</title>
        <meta
          name="description"
          content="Holal "
        />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main>
        <Part1 />
        <Part2 />
        <Part3 />
        <Part4 />
        <Part5/>
        <Part6/>
        <Footer />
      </main>
    </div>
  );
}
