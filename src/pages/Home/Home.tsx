import React from "react";
import Application from "./components/Application";
import Info from "./components/Info";
import Welcome from "./components/Welcome";

function Home({
  isLoaded,
  setIsLoaded,
}: {
  isLoaded: boolean;
  setIsLoaded: (isLoaded: boolean) => void;
}) {
  return (
    <>
      <div className="">
        <Welcome isLoaded={isLoaded} setIsLoaded={setIsLoaded} />
      </div>
      {isLoaded && (
        <div className="bg-contain container bg-clouds-pattern mx-auto bg-no-repeat relative -translate-y-24 pt-20 px-5 md:px-10 lg:px-28">
          <Info />
          <Application />
        </div>
      )}
    </>
  );
}

export default Home;
