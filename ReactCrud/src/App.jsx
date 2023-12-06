import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  // Use lazy loading for TableComponent
  const TableComponent = lazy(() => import("./components/Table"));
  const CreateComponent = lazy(() => import("./components/Create"));
  const EditComponent = lazy(() => import("./components/Edit"));
  const TaskComponent = lazy(() => import("./components/Task"));

  return (
    <div className="container">
      <ToastContainer />
      <Header />
      <Navbar />
      <Suspense
        fallback={
          <div className="loading">
            <span className="proccessing">
              <i className="fa-solid fa-circle-notch"></i> Loading
            </span>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<TableComponent />} />
          <Route path="/create" element={<CreateComponent />} />
          <Route path="/edit/:id" element={<EditComponent />} />
          <Route path="/task/:id" element={<TaskComponent />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
