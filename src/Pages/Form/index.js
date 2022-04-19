import style from "./styles.module.css";
import commonStyle from "../../Common.module.css";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { addNote, editNote } from "../../Redux/ActionCreators";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const Form = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const notes = useSelector((state) => state.notes);

  const dispatch = useDispatch();
  const [noteText, setNoteText] = useState("");
  const [noteDate, setNoteDate] = useState("");

  useEffect(() => {
    if (id !== undefined && pathname.startsWith("/edit/")) {
      const note = notes.filter((note) => note.id === id)[0];
      setNoteText(note.text);
      setNoteDate(note.date.toISOString().split("T")[0]);
    } else {
      setNoteText("");
      setNoteDate("");
    }
  }, [id, notes, pathname]);

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
      note.id = id;
      dispatch(editNote(note));
    } else {
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
