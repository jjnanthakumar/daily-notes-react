// Styled Components
import { Container } from "./styledComponents";

// Components
import Note from "../Note";

// Hooks
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

// Utility Function
import { getMonthFromNumber, getWeekNumber } from "../../Utilities/date";

// Masonry for Dynamic Grid Based on Viewport Size
import Masonry from "react-masonry-css";

const masonryBreakPoints = {
  default: 3,
  700: 2,
  500: 1,
};

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
    <Container>
      <Masonry breakpointCols={masonryBreakPoints} className="listing" columnClassName="listing-column">
        {filteredNotes.map((item) => (
          <Note key={item.id} {...item} />
        ))}
      </Masonry>
    </Container>
  );
};

export default Listing;
