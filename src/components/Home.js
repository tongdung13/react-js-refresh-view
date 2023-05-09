import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
function Home() {
  const [isVisible, setIsVisible] = useState();
  function onEnterViewport() {
    setIsVisible(true);
  }
  function onExitViewport() {
    setIsVisible(false);
  }
  return (
    <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
      <div className={`${isVisible ? "container-animate" : ""}`} />
    </ScrollTrigger>
  );
}
export default Home;
