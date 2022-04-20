// Styling
import style from "./styles.module.css";

// Components
import Note from "../Note";

// Hooks
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

// Utility Function
import { getMonthFromNumber, getWeekNumber } from "../../Utilities/date";

const Listing = () => {
  const {
    notes,
    filters: { filter, sort, subFilter },
  } = useSelector((state) => state);
  const [filteredNotes, setFilteredNotes] = useState([]);

  // Apply Filter Whenever Notes or Filters are changed
  useEffect(() => {
    let filtered = notes;

    // Filtering
    if (filter === "year") {
      filtered = notes.filter((note) => note.date.getFullYear().toString() === subFilter);
    } else if (filter === "month") {
      filtered = notes.filter((note) => getMonthFromNumber(note.date.getMonth()) === subFilter);
    } else if (filter === "week") {
      filtered = notes.filter((note) => getWeekNumber(note.date).toString() === subFilter);
    }

    // Sorting
    filtered = filtered.sort((note1, note2) => note1.date - note2.date);
    if (sort === "new") {
      filtered = filtered.reverse();
    }

    setFilteredNotes(filtered);
  }, [notes, filter, sort, subFilter]);

  return (
    <div className={style.listing}>
      {filteredNotes.map((item) => (
        <Note key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Listing;
