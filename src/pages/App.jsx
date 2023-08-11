import { useState } from "react";
import Profile from "../components/profile/profile";
import Switch from "../components/switch/switch";
import Links from "../components/links/links";
import SocialLinks from "../components/socialLinks/socialLinks";
import Footer from "../components/footer/footer";

import "./App.css";

import imgDarkMode from "../img/caiuuuu.jpg";
import imgLightMode from "../img/cr.jpg";

const App = () => {
  const [isLightMode, setIsLightMode] = useState(true);
const toggleMode = () =>{
  setIsLightMode((prevMode) => !prevMode);
}

  const imgsrc = isLightMode ? imgLightMode : imgDarkMode;
  const imgalt = isLightMode ? "imagem no Modo Claro" : "imagem no modo escuro";

  return (
    <div id="App" className= {isLightMode ? "light" : ""}>
    <div id="container">
      <Profile imgsrc={imgsrc} imgalt={imgalt}>
        @cr_cr_zn
      </Profile>
      <Switch mode={toggleMode} infobutton={isLightMode} />
      <div id="links">
        <ul>
          <Links link={"https://github.com"}>Github</Links>
          <Links link={"#"}>instagram</Links>
          <Links link={"#"}>Portifolio</Links>
          <Links link={"#"}>Projetos</Links>
        </ul>
        </div> 
      </div>
      <div id="socialLinks">
        <SocialLinks href={"#"} icon={"logo-github"} />
        <SocialLinks href={"#"} icon={"logo-Instagram"} />
        <SocialLinks href={"#"} icon={"logo-Youtube"} />
        <SocialLinks href={"#"} icon={"logo-Twitter"} />
        <SocialLinks href={"#"} icon={"logo-Facebook"} />
      </div>
      <Footer link={"#"}>@cr_cr_zn</Footer>
    </div>
  );
};

export default App;
