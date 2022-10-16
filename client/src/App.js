
import { Routes, Route } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home";
import CreateUpdate from "./pages/CreateUpdate";
import View from "./pages/View";


function App() {
  return (
    <div>
    <ToastContainer position="top-center"/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/create" element={<CreateUpdate />} />
        <Route exact path="/update/:id" element={<CreateUpdate />} />
        <Route exact path="/view/:id" element={<View/>} />
      </Routes>
    </div>
  );
}

export default App;
