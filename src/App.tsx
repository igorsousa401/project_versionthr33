import React, { useState } from "react";

import { Home } from "pages";
import { Footer, Header } from "layouts";

import "./App.css";
import Artist from "pages/Home/components/Artist";
import TeamSection from "pages/Home/components/TeamSection";

function App() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  return (
    <>
      <div className="relative bg-gradient-to-t from-[#273d55] to-[#151b3a]">
        {isLoaded && <Header />}
        <div className="bg-home-pattern bg-cover">
          <Home isLoaded={isLoaded} setIsLoaded={setIsLoaded} />
        </div>
      </div>
      {isLoaded && (
        <>
          <Artist />
          <TeamSection />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
