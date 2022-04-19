// Components
import Listing from "../../Components/Listing";
import Search from "../../Components/Search";

// Styling
import style from "./styles.module.css";
import commonStyle from "../../Common.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const notes = useSelector((state) => state.notes);

  return (
    <main className={`${style.main} ${commonStyle.wrapper}`}>
      {notes.length === 0 ? (
        <h3>
          No Notes Yet. Add Some <Link to={"/new"}>Here</Link>
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
