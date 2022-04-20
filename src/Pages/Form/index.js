// Styling
import style from "./styles.module.css";
import commonStyle from "../../Common.module.css";

// UUID for generating unique Note ID
import { v4 as uuid } from "uuid";

// Hooks
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation, useNavigate } from "react-router-dom";

// Action Creators
import { addNote, editNote } from "../../Redux/Notes/ActionCreators";

const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { pathname } = useLocation();
  const { id } = useParams();

  const notes = useSelector((state) => state.notes);

  const [noteText, setNoteText] = useState("");
  const [noteDate, setNoteDate] = useState("");

  // Populate Form Inputs based upon the URL.
  // URL will be "/edit/:id" when editing the Note & Inputs are Populated using existing Notes Data
  useEffect(() => {
    if (id !== undefined && pathname.startsWith("/edit/")) {
      const note = notes.filter((note) => note.id === id)[0];

      // Navigate to New if Note with id doesn't exist
      if (!note) {
        navigate("/new", { replace: true });
        return;
      }

      setNoteText(note.text);
      setNoteDate(note.date.toISOString().split("T")[0]);
    } else {
      setNoteText("");
      setNoteDate("");
    }
  }, [id, notes, pathname, navigate]);

  const handleTextChange = (e) => {
    setNoteText(e.target.value);
  };

  const handleDateChange = (e) => {
    setNoteDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const note = { text: noteText, date: new Date(noteDate) };
    setNoteText("");
    setNoteDate("");

    if (id !== undefined && pathname.startsWith("/edit/")) {
      // Edit Note
      note.id = id;
      dispatch(editNote(note));
    } else {
      // Add New Note
      note.id = uuid();
      dispatch(addNote(note));
    }

    navigate("/");
  };

  return (
    <main className={`${style.main} ${commonStyle.wrapper}`}>
      <form className={style.form} onSubmit={handleSubmit}>
        <label className={style.formControl}>
          <span>Note/Reminder/Tasks</span>
          <textarea required onChange={handleTextChange} value={noteText}></textarea>
        </label>
        <label className={style.formControl}>
          <span>Date</span>
          <input type="date" required value={noteDate} onChange={handleDateChange} />
        </label>
        <button className={style.btn} type="submit">
          {id !== undefined && pathname.startsWith("/edit/") ? "Edit" : "Add"} Note
        </button>
      </form>
    </main>
  );
};

export default Form;
