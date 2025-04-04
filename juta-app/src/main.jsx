import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Context from "./components/Context";
import Footer from "./components/Footer";
import Index from "./components/Index"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Header />
    <Context />
    <Main />
    <Footer /> */}
    <Index  />
  </StrictMode>
);