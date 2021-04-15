import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import LocalTime from "../components/LocalTime";
import TextArea from "../components/TextArea";
import Texts from "../components/Texts";
import Logo from '../util/Logo.js'

export default function Home() {
  const [display, setDisplay] = useState("hidden");
  const handlers = useSwipeable({
    onSwipedLeft: () => setDisplay("active"),
    onSwipedRight: () => setDisplay("hidden"),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  console.log(display);

  return (
    <div {...handlers}>
      <Logo/>

      <TextArea />
      <Texts />
      <LocalTime className={display} />
    </div>
  );
}
