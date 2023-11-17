import { Route, Routes } from "react-router-dom";
import DetailsList from "./components/DetailsList";
import "./sass/main.scss";
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beer/:id" element={<DetailsList />} />
      </Routes>
    </>
  );
}

export default App;
