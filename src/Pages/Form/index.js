// Styled Components
import { Button, Container, ControlTitle, FormControl, StyledForm, Textarea, Title } from "./styledComponents";

// UUID for generating unique Note ID
import { v4 as uuid } from "uuid";

// Hooks
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation, useNavigate } from "react-router-dom";

// Action Creators
// import { addNote, editNote } from "../../Redux/Notes/actions/notes";

const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { pathname } = useLocation();
  const { id } = useParams();

  const notes = useSelector((state) => state.notes);

  const [noteText, setNoteText] = useState("");
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
    } else {
      setNoteText("");
    }
  }, [id, notes, pathname, navigate]);

  const handleTextChange = (e) => {
    setNoteText(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (noteText === "") {
      return;
    }

    const note = { text: noteText, date: new Date() };
    setNoteText("");

    if (id !== undefined && pathname.startsWith("/edit/")) {
      // Edit Note
      note.id = id;
      // dispatch(editNote(note));
    } else {
      // Add New Note
      note.id = uuid();
      // dispatch(addNote(note));
    }

    navigate("/");
  };

  return (
    <>
      <Container>
        <Title>{noteText === "" ? "Create New Note" : "Update Note"}</Title>

        <StyledForm onSubmit={handleSubmit}>
          <FormControl>
            <ControlTitle>Note</ControlTitle>
            <Textarea required onChange={handleTextChange} value={noteText}></Textarea>
          </FormControl>

          <Button type="submit">{id !== undefined && pathname.startsWith("/edit/") ? "Edit" : "Add"} Note</Button>
        </StyledForm>
      </Container>
    </>
  );
};

export default Form;
