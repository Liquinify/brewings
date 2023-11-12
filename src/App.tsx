import React from "react";
import "./sass/main.scss";
import { Route, Routes } from "react-router-dom";
import DetailsList from "./components/DetailsList";
import Main from "./pages/Main";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/beer/:id" element={<DetailsList />} />
      </Routes>
    </>
  );
}

export default App;
