import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Form from "./Pages/Form";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";

const App = () => {
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
