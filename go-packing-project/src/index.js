import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import Home from "./pages/Home";
import About from "./pages/About";
import Email from "./pages/Email";
import Fashion from "./pages/Fashion";
import Packing from "./pages/Packing";
import EmailSent from "./pages/EmailSent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/email" element={<Email />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/packing" element={<Packing />} />
        <Route path="/emailsent" element={<EmailSent />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
