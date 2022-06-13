// Styled Components
import { Actions, Body, Button, Container, Desc, Head, Info } from "./styledComponents";

// Icons
import { ReactComponent as Edit } from "../../Assets/pencil-circle-outline.svg";
import { ReactComponent as Delete } from "../../Assets/delete-circle-outline.svg";

// Hooks
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// Action Creators
import { removeNote } from "../../Redux/Notes/actions/notes";

import parse from 'html-react-parser';

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
    <Container>
      <Head>
        <Info>{new Date(date).toDateString()}</Info>

        <Actions>
          <Button title="Edit Note" onClick={editNote}>
            <Edit />
          </Button>

          <Button title="Delete Note" onClick={deleteNote}>
            <Delete />
          </Button>
        </Actions>
      </Head>

      <Body>
        <Desc>{parse(text)}</Desc>
      </Body>
    </Container>
  );
};

export default Note;
