import style from "./styles.module.css";

import Edit from "../../Assets/pencil-circle-outline.svg";
import Delete from "../../Assets/delete-circle-outline.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeNote } from "../../Redux/ActionCreators";

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
      <p>{text}</p>

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
