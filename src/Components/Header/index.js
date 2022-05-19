// Styled Components
import { Brand, Container, Link, Logo, Nav, Toggle } from "./styledComponents";

// Icons
import { ReactComponent as NotesIcon } from "../../Assets/format-list-text.svg";
import { ReactComponent as CreateIcon } from "../../Assets/playlist-plus.svg";

// Hooks
import { useEffect, useState } from "react";

// Media Query Hook
import useMediaQuery from "../../Utilities/useMediaQuery";

const Header = () => {
  const mediaMatches = useMediaQuery("(max-width: 500px)");
  const [isOpen, setOpen] = useState(true);

  useEffect(() => {
    // Close Menu for Smaller Viewport
    if (mediaMatches) {
      setOpen(false);
    }
  }, [mediaMatches]);

  const toggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Container isOpen={isOpen}>
      <Logo>
        <Toggle onClick={toggle} isOpen={isOpen} title={`${isOpen ? "Close" : "Open"} Menu`}>
          <span></span>
          <span></span>
          <span></span>
        </Toggle>

        {isOpen && <Brand>Daily Notes</Brand>}
      </Logo>

      <Nav>
        <Link to={"/"} title="Notes">
          <NotesIcon fill="currentColor" /> {isOpen && <span>Notes</span>}
        </Link>

        <Link to={"/new"} title="Create Note">
          <CreateIcon fill="currentColor" /> {isOpen && <span>Create Note</span>}
        </Link>
      </Nav>
    </Container>
  );
};

export default Header;
