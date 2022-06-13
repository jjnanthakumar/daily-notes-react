// Styled Components
import { Container, Info, StyledLink } from "./styledComponents";

// Components
import Listing from "../../Components/Listing";
import Search from "../../Components/Search";
import { useDispatch } from 'react-redux';
// Hooks
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { getNotes } from "../../Redux/Notes/actions/notes";


const Home = () => {
  
  const notes = useSelector((state) => state.notes);

  return (
    <Container>
      {notes.length === 0 ? (
        <Info>
          No Notes Yet. Add Some <StyledLink to={"/new"}>Here</StyledLink>.
        </Info>
      ) : (
        <>
          <Search />
          <Listing />
        </>
      )}
    </Container>
  );
};

export default Home;
