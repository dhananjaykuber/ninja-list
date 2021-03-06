import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          doloribus, nam adipisci quisquam veritatis iste.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          doloribus, nam adipisci quisquam veritatis iste, explicabo perferendis
          dolorum qui, exercitationem soluta distinctio.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninjas Listing</a>
        </Link>
      </div>
    </>
  );
}
