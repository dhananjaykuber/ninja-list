import style from "../../styles/Ninjas.module.css";
import Link from "next/link";

// fetch data from json
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  // return fetched data
  return {
    props: { ninjas: data },
  };
};

// take it as props (ninjas)
const Main = ({ ninjas }) => {
  return (
    <div>
      <h1 className={style.title}>All Ninjas</h1>
      {ninjas.map((ninja) => (
        <Link href={"ninjas/" + ninja.id} key={ninja.id}>
          <a className={style.single}>
            <h3>{ninja.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Main;
