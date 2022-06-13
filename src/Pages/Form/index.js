// Styled Components
import { Button, Container, ControlTitle, FormControl, StyledForm, Textarea, Title } from "./styledComponents";

// UUID for generating unique Note ID
import { v4 as uuid } from "uuid";

// Hooks
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation, useNavigate } from "react-router-dom";


// Action Creators
import { addNote, editNote } from "../../Redux/Notes/actions/notes";

import draftToHtml from 'draftjs-to-html';
import { convertToRaw, EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { ContentState } from "draft-js";
import htmlToDraft from 'html-to-draftjs';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { pathname } = useLocation();
  const { id } = useParams();

  const notes = useSelector((state) => state.notes);
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
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
      setEditorState(EditorState.createWithContent(ContentState.createFromBlockArray(htmlToDraft(note.text).contentBlocks)))
      setNoteText(note.text);
    } else {
      setNoteText("");
    }
  }, [id, notes, pathname, navigate]);

  const handleTextChange = (e) => {
    setEditorState(e);
    setNoteText(draftToHtml(convertToRaw(e.getCurrentContent())))
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (noteText === "") {
      return;
    }
    const note = { text: noteText, date: new Date() };

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
    <>
      <Container>
        <Title>{noteText === "" ? "Create New Note" : "Update Note"}</Title>

        <StyledForm onSubmit={handleSubmit}>
          <FormControl>
            <ControlTitle>Note</ControlTitle>
            <Editor required
              editorState={editorState}
              wrapperStyle={
                { border: '1px solid dodgerblue' }}
              editorStyle={{
                height: 'auto',
                padding: '1rem',

              }}
              onEditorStateChange={handleTextChange}
            />
          </FormControl>

          <Button type="submit">{id !== undefined && pathname.startsWith("/edit/") ? "Update" : "Add"} Note</Button>
        </StyledForm>
      </Container>
    </>
  );
};

export default Form;
