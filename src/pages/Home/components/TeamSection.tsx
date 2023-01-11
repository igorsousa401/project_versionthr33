import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { TwitterIcon } from "utils/svgUtils";
import untypedData from "data/team-data.json";
import $ from "jquery";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const data: any = untypedData;

function TeamSection() {
  const [width, setWidth] = useState<number>();
  const [teamMemberStep, setTeamMemberStep] = useState<number>(0);

  //Function arrows alternate person team
  const handleClick = (num:number) => {

    //Animation IMG
    if(!($('.img-the-team').hasClass('animate__fadeIn'))) {
      $('.img-the-team').addClass('animate__fadeIn');
    } else {
      $('.img-the-team').removeClass('animate__fadeIn');
      setTimeout(function () {
        setTeamMemberStep((prev) => prev - num)
        $('.img-the-team').addClass('animate__fadeIn');
      }, 300);
    }

    //Animation Name and links socials
    if(!($('.name-links-the-team').hasClass('animate__fadeInLeft'))) {
      $('.name-links-the-team').addClass('animate__fadeInLeft');
    } else {
      $('.name-links-the-team').removeClass('animate__fadeInLeft');
      setTimeout(function () {
        setTeamMemberStep((prev) => prev - num)
        $('.name-links-the-team').addClass('animate__fadeInLeft');
      }, 300);
    }

    if(!($('.text-the-team').hasClass('animate__fadeIn'))) {
      $('.text-the-team').addClass('animate__fadeIn');
    } else {
      $('.text-the-team').removeClass('animate__fadeIn');
      setTimeout(function () {
        setTeamMemberStep((prev) => prev - num)
        $('.text-the-team').addClass('animate__fadeIn');
      }, 300);
    }
  }

  const handleClickPerson = (i:number,num:number) => {
    //Animation IMG
    if(!($('.img-the-team').hasClass('animate__fadeIn'))) {
      $('.img-the-team').addClass('animate__fadeIn');
    } else {
      $('.img-the-team').removeClass('animate__fadeIn');
      setTimeout(function () {
        setTeamMemberStep((prev) => prev - num + i)
        $('.img-the-team').addClass('animate__fadeIn');
      }, 300);
    }

    //Animation Name and links socials
    if(!($('.name-links-the-team').hasClass('animate__fadeInLeft'))) {
      $('.name-links-the-team').addClass('animate__fadeInLeft');
    } else {
      $('.name-links-the-team').removeClass('animate__fadeInLeft');
      setTimeout(function () {
        setTeamMemberStep((prev) => prev - num + i)
        $('.name-links-the-team').addClass('animate__fadeInLeft');
      }, 300);
    }

    if(!($('.text-the-team').hasClass('animate__fadeIn'))) {
      $('.text-the-team').addClass('animate__fadeIn');
    } else {
      $('.text-the-team').removeClass('animate__fadeIn');
      setTimeout(function () {
        setTeamMemberStep((prev) => prev - num + i)
        $('.text-the-team').addClass('animate__fadeIn');

      }, 300);
    }
  }


  useEffect(() => {
    const width = document.getElementById("root")?.offsetWidth;
    setWidth(width);

  }, [document]);
  return (
    <div id="team" className="bg-gradient-to-tr section-roll h-fit from-[#9e80e8] via-[#47fda2] to-[#80ffd1] relative pt-0 border-b-2 border-black">
      <p
        className="-skew-y-[15deg] container mx-auto text-teamname uppercase text-center text-white"
        style={{ paddingTop: width && (width / 2) * 0.2665 + "px" }}
      >
        the team
      </p>
      <div className="container  m-auto px-5 md:px-10 lg:px-28">
        <div className="grid grid-cols-3 md:grid-cols-2 mb-20">
          <div className="col-span-1"></div>
          <div className="col-span-2 md:col-span-1 gap-4 ">
            <div className="flex flex-col gap-1">
              <p className="text-artName text-center ">The Crew</p>
              <div className="border-2 border-white h-0 w-[70%] mx-auto"></div>
              <div className="flex h-full relative">
                <div className="border-2 border-black w-0 h-[70%] top-[15%] -left-4 absolute"></div>
                <div className="absolute right-[110%] w-20 h-full flex flex-col justify-around items-center">
                  <div>
                    <ArrowUpIcon
                      width={28}
                      color={"#000"}
                      className="bg-white hover:bg-slate-200 rounded-full hover:cursor-pointer"
                      onClick={() => handleClick(-1)}
                    />
                  </div>
                  {Array(5)
                    .fill(1)
                    .map((e, i) => (
                      <img
                        key={i}
                        src={
                          data[(((i + teamMemberStep + 3) % 5) + 5) % 5].image
                        }
                        width={100 - Math.abs(i - 2) * 15 + "%"}
                        alt="Hero avatar"
                        className="hover:cursor-pointer"
                        onClick={() => handleClickPerson(i, 2)
                        }
                      />
                    ))}
                  <div>
                    <ArrowDownIcon
                      width={28}
                      color={"#000"}
                      className="bg-white hover:bg-slate-200 rounded-full hover:cursor-pointer"
                      onClick={() => handleClick(1)}
                    />
                  </div>
                </div>
                <div className="w-full rounded-[30px] bg-white flex flex-col gap-4 p-6" style={{minHeight: "82vh"}}>
                  <div className="flex  flex-col md:flex-row items-center md:items-stretch gap-6">
                    <img
                      className="animate__animated img-the-team"
                      src={data[((teamMemberStep % 5) + 5) % 5].image}
                      alt="Hero avatar"
                    />
                    <div className="flex animate__animated flex-col justify-around gap-3 name-links-the-team">
                      <div>
                        <p className="text-xmedium  italic">
                          {data[((teamMemberStep % 5) + 5) % 5].name}
                        </p>
                        <ul className="list-disc">
                          {data[((teamMemberStep % 5) + 5) % 5].roles.map(
                            (content: string, i: number) => (
                              <li key={i} className="text-small">
                                {content}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                      <div className="flex gap-1 items-center hover:text-blue-600">
                        <img
                          src={TwitterIcon}
                          alt="Twitter Icon"
                          width={"5%"}
                        />
                        <a
                          href={data[((teamMemberStep % 5) + 5) % 5].twitter}
                          target="_blank"
                          className="text-xsmall italic"
                          rel="noreferrer"
                        >
                          twitter
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="h-70 animate__animated overflow-auto flex flex-col gap-4 py-6 text-the-team animate__slow">
                    {data[((teamMemberStep % 5) + 5) % 5].about.map(
                      (content: string, i: number) => (
                        <p key={i} className="text-small animate__animated ">
                          {content}
                        </p>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamSection;
