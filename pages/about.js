import Head from "next/head";
import styles from "../styles/Home.module.css";

const About = () => {
  return (
    <>
      <Head>
        <title>Ninja List | About</title>
      </Head>
      <div>
        <h1 className={styles.title}>About</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          doloribus, nam adipisci quisquam veritatis iste, explicabo perferendis
          dolorum qui, exercitationem soluta distinctio. Itaque magnam explicabo
          labore, enim a minima accusantium!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          doloribus, nam adipisci quisquam veritatis iste, explicabo perferendis
          dolorum qui, exercitationem soluta distinctio. Itaque magnam explicabo
          labore, enim a minima accusantium!
        </p>
      </div>
    </>
  );
};

export default About;
