


import { useSpring, animated } from "react-spring";
import styles from "./switch.module.css";

const Switch = ({mode, infobutton}) => {
  const animation = useSpring({
    left: infobutton ? "0%" : "50%"
  })
  return (
    <div id={styles.switch} onClick={mode}>
      <animated.button style={animation}></animated.button>
      <span></span>
    </div>
  );
};

export default Switch;
