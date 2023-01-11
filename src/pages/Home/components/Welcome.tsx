import React, { useState } from "react";
import untypedData from "data/welcome-contents.json";
import $ from 'jquery';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const data: any = untypedData;
const titleArray = ["about", "leaders", "functions"];


function Welcome({
  isLoaded,
  setIsLoaded,
}: {
  isLoaded: boolean;
  setIsLoaded: (isLoaded: boolean) => void;
}) {
  $(".btn-content").on("click", function() {
    console.log('Deu certo!');
  });
  const [content, setContent] = useState<number>(0);

  const handleContent = (i: number) => {
    setContent(i);
  }

  return (
    <div
      id="home"
      className={`relative section-roll container mx-auto row md:gap-5 px-5 md:px-10 lg:px-28 h
        ${
        isLoaded ? "" : "cursor-pointer h-full"
      } `}
      onClick={() => setIsLoaded(true)}
    >
      <img
        className="absolute left-[27%] top-[17%] w-1/6"
        src="/images/character-chat-bubble2.png"
        alt="Character Chat"
      />
      {!isLoaded && (
        <img
          className="absolute left-[27%] top-[17%] w-1/6 z-10"
          src="/images/character-chat-bubble1.png"
          alt="Character Chat"
        />
      )}
      <div className="col align-items-center">
        <img src="/images/main-character1.png" alt="Character Chat" />
      </div>
      {isLoaded && (
        <div className="col flex align-items-center md:mt-10 animation-rl">
          <div className="flex gap-2 h-75 w-100 bg-white rounded-5 pb-5 pt-5">
            <div className="grid grid-row-3 p-1">
              {titleArray.map((title, i) => (
                <p
                  key={i}
                  className={`text-vertical p-3 text-smedium uppercase text-center rotate-180 border-l-4 border-black hover:cursor-pointer btn-content ${
                    content !== i && "opacity-20 hover:opacity-70"
                  }`}
                  onClick={() => handleContent(i)}
                >
                  {title}
                </p>
              ))}
            </div>
            <div className="flex flex-col gap-4 overflow-auto pl-2 pr-3 transition-opacity">
                {data[titleArray[content]].map((contents: string) => (

                    <div key={contents} dangerouslySetInnerHTML={ { __html: contents } }></div>


                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


export default Welcome;
