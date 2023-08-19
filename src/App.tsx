import React from "react";
import "./../stylesheets/styles.scss";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import ContactControls from "./pages/ContactControls";

class App extends React.Component {
  componentDidMount() {
    [...document.querySelectorAll(".control")].forEach((button: any) => {
      button.addEventListener("click", function () {
        document.querySelector(".active-btn")?.classList.remove("active-btn");
        button.classList.add("active-btn");
        document.querySelector(".active")?.classList.remove("active");
        document.getElementById(button.dataset.id)?.classList.add("active");
      });
    });

    document.querySelector(".theme-btn")?.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
    });

    document.querySelector(".submit-btn")?.addEventListener("click", () => {
      document.querySelector("form")?.submit();
    });
  }
  render() {
    return (
      <>
        <Home />
        <main>
          <AboutMe />
          <Contact />
        </main>
        <ContactControls />
      </>
    );
  }
}

export default App;
