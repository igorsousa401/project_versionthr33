import React from "react";
import { DiscordIcon, LinkedinIcon, TwitterIcon } from "utils/svgUtils";

function Footer() {
  return (
    <div className="container bg-white grid grid-cols-2 items-center mx-auto gap-10 sm:gap-0 relative p-5 md:p-10">
      <img
        className="absolute hidden md:block md:z-20 bottom-[100%] left-[5%]"
        src="/images/team-character.png"
        alt="Team Character"
        width="37%"
      />
      <div className="col-span-2 sm:col-span-1 mx-auto flex flex-col gap-6">
        <p className="uppercase text-footer italic text-black">version thr33</p>
        <p className="text-footer2 italic text-black">Designed by Continuity Studios</p>
        <div className="flex gap-4">
          <a
            href="http://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={TwitterIcon} alt="Twitter Icon" width={'75%'}/>
          </a>
          <a
            href="https://discord.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={DiscordIcon} alt="Discord Icon" width={'75%'}/>
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedinIcon} alt="Linkedin Icon" width={'75%'}/>
          </a>
        </div>
      </div>
      <div className="col-span-2 sm:col-span-1 mx-auto hidden sm:grid grid-cols-2 gap-9">
        <div className="col-span-1 flex flex-col gap-7">
          <a href="#home" className="text-links-footer text-black hover:text-blue-600">
            Home
          </a>
          <a href="#artist" className="text-links-footer text-black hover:text-blue-600">
            Artist
          </a>
          <a href="#link" className="text-links-footer text-black hover:text-blue-600">
            Links
          </a>
        </div>
        <div className="col-span-1 flex flex-col gap-7">
          <a href="#team" className="text-links-footer text-black hover:text-blue-600">
            Team
          </a>
          <a href="#" className="text-links-footer text-black hover:text-blue-600">
            Contact
          </a>
          <a href="#" className="text-links-footer text-black hover:text-blue-600">
            Portal
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
