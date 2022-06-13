// Styled Components
import { Root } from "./styledComponents";

// Components
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Form from "./Pages/Form";
import NotFound from "./Pages/NotFound";

// Hooks
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { getNotes } from "./Redux/Notes/actions/notes";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch])

  return (
    <Root>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/new" element={<Form />} />

        <Route path="/edit/:id" element={<Form />} />

        <Route path="/not-found" element={<NotFound />} />

        <Route path="/*" element={<Navigate to="/not-found" replace={true} />} />
      </Routes>
    </Root>
  );
};

export default App;
