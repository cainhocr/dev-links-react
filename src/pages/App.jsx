import { useState } from "react";
import Profile from "../components/profile/profile";

import "./App.css";

import imgDarkMode from "../img/caiuuuu.jpg"
import imgLightMode from "../img/cr.jpg"


const App = () => {
    const [isLightMode,setIsLightMode] = useState(true)

const imgsrc = isLightMode ? imgLightMode :imgDarkMode;
    const imgalt = isLightMode ? "imagem no Modo Claro" : "imagem no modo escuro"
  return (
    <div>
      <Profile imgsrc={imgDarkMode} imgalt={imgalt}>@cr_cr_zn</Profile>
    </div>
  );
};

export default App;
