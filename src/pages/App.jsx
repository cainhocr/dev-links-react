import { useState } from "react";
import Profile from "../components/profile/profile";
import Switch from "../components/switch/switch"
import Links from "../components/links/links";

import "./App.css";

import imgDarkMode from "../img/caiuuuu.jpg"
import imgLightMode from "../img/cr.jpg"

const App = () => {
    const [isLightMode,setIsLightMode] = useState(true)

const imgsrc = isLightMode ? imgLightMode :imgDarkMode;
    const imgalt = isLightMode ? "imagem no Modo Claro" : "imagem no modo escuro"
  return (
    <div id="container">
      <Profile imgsrc={imgDarkMode} imgalt={imgalt}>@cr_cr_zn</Profile>
      <Switch></Switch>
      <div id="links">

      <ul>
        <Links link={"https://github.com"}>Github</Links>
        <Links link={"#"}>instagram</Links>
        <Links link={"#"}>Portifolio</Links>
        <Links link={"#"}>Projetos</Links>
      </ul>
      </div>
    </div>
  );
};

export default App;
