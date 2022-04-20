// Components
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Form from "./Pages/Form";
import NotFound from "./Pages/NotFound";

// Hooks
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

const App = () => {
  const notes = useSelector((state) => state.notes);
  // Store Updated Notes in LocalStorage
  useEffect(() => {
    localStorage.setItem("NOTES", JSON.stringify(notes));
  }, [notes]);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/new" element={<Form />} />

        <Route path="/edit/:id" element={<Form />} />

        <Route path="/not-found" element={<NotFound />} />

        <Route path="/*" element={<Navigate to="/not-found" replace={true} />} />
      </Routes>
    </>
  );
};

export default App;
