// Styling
import style from "./styles.module.css";

// Components
import Note from "../Note";

// Hooks
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

// Utility Function
import getWeekNumber from "../../Utilities/getWeekNumber";

const Listing = () => {
  const {
    notes,
    filters: { filter, sort },
  } = useSelector((state) => state);
  const [filteredNotes, setFilteredNotes] = useState([]);

  // Apply Filter Whenever Notes or Filters are changed
  useEffect(() => {
    let filtered = notes;
    if (sort === "new") {
      if (filter === "year") {
        filtered = notes.sort((note1, note2) => note2.date.getFullYear() - note1.date.getFullYear());
      } else if (filter === "month") {
        filtered = notes.sort((note1, note2) => note2.date.getMonth() - note1.date.getMonth());
      } else if (filter === "week") {
        filtered = notes.sort((note1, note2) => getWeekNumber(note2.date) - getWeekNumber(note1.date));
      }
    } else {
      if (filter === "year") {
        filtered = notes.sort((note1, note2) => note1.date.getFullYear() - note2.date.getFullYear());
      } else if (filter === "month") {
        filtered = notes.sort((note1, note2) => note1.date.getMonth() - note2.date.getMonth());
      } else if (filter === "week") {
        filtered = notes.sort((note1, note2) => getWeekNumber(note1.date) - getWeekNumber(note2.date));
      }
    }

    setFilteredNotes(filtered);
  }, [notes, filter, sort]);

  return (
    <div className={style.listing}>
      {filteredNotes.map((item) => (
        <Note key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Listing;
