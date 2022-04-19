// Styling
import style from "./styles.module.css";

import Note from "../Note";

import { useSelector } from "react-redux";

const Listing = () => {
  const notes = useSelector((state) => state.notes);

  return (
    <div className={style.listing}>
      {notes.map((item) => (
        <Note key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Listing;
