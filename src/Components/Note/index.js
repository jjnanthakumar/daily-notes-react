// Styling
import style from "./styles.module.css";

// Icons
import Edit from "../../Assets/pencil-circle-outline.svg";
import Delete from "../../Assets/delete-circle-outline.svg";

// Hooks
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// Action Creators
import { removeNote } from "../../Redux/Notes/ActionCreators";

const Note = ({ id, text, date }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const editNote = () => {
    navigate(`/edit/${id}`);
  };

  const deleteNote = () => {
    dispatch(removeNote(id));
  };

  return (
    <div className={style.container}>
      <p className={style.text}>{text}</p>

      <div className={style.bottom}>
        <span className={style.date}>{date.toDateString()}</span>
        <div className={style.actions}>
          <button className={style.btn} onClick={editNote}>
            <img src={Edit} alt="Edit Note" title="Edit Note" />
          </button>

          <button className={style.btn} onClick={deleteNote}>
            <img src={Delete} alt="Delete Note" title="Delete Note" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Note;
