// Styling
import style from "./styles.module.css";
import commonStyle from "../../Common.module.css";

// Components
import Listing from "../../Components/Listing";
import Search from "../../Components/Search";
import { Link } from "react-router-dom";

// Hooks
import { useSelector } from "react-redux";

const Home = () => {
  const notes = useSelector((state) => state.notes);

  return (
    <main className={`${style.main} ${commonStyle.wrapper}`}>
      {notes.length === 0 ? (
        <h3 className={style.info}>
          No Notes Yet. Add Some{" "}
          <Link to={"/new"} className={style.link}>
            Here
          </Link>
          .
        </h3>
      ) : (
        <>
          <Search />
          <Listing />
        </>
      )}
    </main>
  );
};

export default Home;
