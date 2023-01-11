import React from "react";

const headerContents = ["home", "artist", "team"];

function Header() {
  window.addEventListener("scroll", function () {
    const scrollHeight = this.window.scrollY;
    const headerElement = document.getElementById("header");
    const headerTexts = document.getElementsByClassName("nav-title");
    if (scrollHeight > 100) {
      headerElement?.classList.add("backdrop-blur-lg");
      for (let i = 0; i < headerTexts.length; i++) {
        headerTexts[i].classList.add("text-shadow");
      }
      return;
    } else {
      headerElement?.classList.remove("backdrop-blur-lg");
      for (let i = 0; i < headerTexts.length; i++) {
        headerTexts[i].classList.remove("text-shadow");
      }
    }
  });
  return (
    <header
      id="header"
      className="fixed -top-1 pt-3 pb-2 z-30 flex justify-center mx-auto w-full animation-tb"
    >
      <div className="container flex justify-between text-header items-center px-5 md:px-10 lg:px-28">
        <a href="#home" className="uppercase hover:cursor-pointer nav-title">
          version thr33
        </a>
        <div className="flex gap-[18px] items-center">
          {headerContents.map((content) => (
            <a
              key={content}
              href={"#" + content}
              className="uppercase hover:cursor-pointer hover:text-gray-400 nav-title"
            >
              {content}
            </a>
          ))}
          <button className="uppercase italic text-black py-1 xl:py-2 px-3 font-semibold bg-white hover:bg-slate-200 rounded-3 border border-1 border-dark shadow-xl">
            connect
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
