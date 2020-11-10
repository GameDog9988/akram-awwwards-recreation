import React, { useEffect } from "react";
import "./styles/App.scss";
import Header from "./components/header";
import Banner from "./components/banner";
import Cases from "./components/cases";

function App() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <div className="App">
      <Header />
      <Banner />
      <Cases />
    </div>
  );
}

export default App;
