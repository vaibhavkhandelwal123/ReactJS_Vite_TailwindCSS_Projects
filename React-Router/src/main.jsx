import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./Layout.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Contact from "./components/contact/Contact.jsx";
import Param from "./components/paramhandle/Param.jsx";
import Child from "./components/child/Child.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
          <Route path="home" element={<Home />} />
          <Route path="contact" element={<Contact />}>
          <Route path="child" element={<Child/>}/>
          </Route>
          <Route path="Home/name/:id" element={<Param/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
