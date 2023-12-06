import Create from "./components/Create";
import Edit from "./components/Edit";
import Header from "./components/header";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import {  Route, Routes } from "react-router-dom";
import Task from "./components/Task";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/task/:id" element={<Task />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
