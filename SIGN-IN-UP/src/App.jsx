import React, { useState } from "react";
import Hero from "./components/Hero/Hero";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const [loginPopup, setLoginPopup] = useState(false);
  const handleLoginPopup = () => {
    setLoginPopup(!loginPopup);
  };

  const bgImage = {
    width: "100%",
    height: "100%",
    background : "grey",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <>
      <main style={bgImage}>
        <Navbar handleLoginPopup={handleLoginPopup} />
        <Hero />
      </main>

      {/* Login Popup */}
      <LoginPopup loginPopup={loginPopup} handleLoginPopup={handleLoginPopup} />
    </>
  );
};

export default App;
