import { Disclosure, Transition } from "@headlessui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { ArtStationIcon, FoundationIcon, TwitterIcon } from "utils/svgUtils";
import untypedData from "data/arts-data.json";
import $ from 'jquery';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const data: any = untypedData;

function Artist() {
  const [width, setWidth] = useState<number>();
  const [artNum, setArtNum] = useState<number>(0);

  const socialsHover = (e:EventTarget, active:boolean, index:number) => {
      if(active) {
        $(e).children('.hr-social:eq(0)').css('width', '0%');
        if(index == 1){
          $(e).removeClass('bg-social-1');
          $(e).addClass('bg-social-1-hover');
          $(e).children('img:eq(0)').removeClass('bg-social-1-hover');
          $(e).children('p:eq(0)').removeClass('bg-social-1-hover');
        }
        if(index == 2) {
          $(e).removeClass('bg-social-2');
          $(e).addClass('bg-social-2-hover');
          $(e).children('img:eq(0)').removeClass('bg-social-2-hover');
          $(e).children('p:eq(0)').removeClass('bg-social-2-hover');
        }
        if(index == 3) {
          $(e).removeClass('bg-social-3');
          $(e).addClass('bg-social-3-hover');
          $(e).children('img:eq(0)').removeClass('bg-social-3-hover');
          $(e).children('p:eq(0)').removeClass('bg-social-3-hover');
        }

      } else {
        $(e).children('.hr-social:eq(0)').css('width', '100%');
        if(index == 1){
          $(e).removeClass('bg-social-1-hover');
          $(e).addClass('bg-social-1');
          $(e).children('img:eq(0)').removeClass('bg-social-1');
          $(e).children('p:eq(0)').removeClass('bg-social-1');
        }
        if(index == 2){
          $(e).removeClass('bg-social-2-hover');
          $(e).addClass('bg-social-2');
          $(e).children('img:eq(0)').removeClass('bg-social-2');
          $(e).children('p:eq(0)').removeClass('bg-social-2');
        }
        if(index == 3){
          $(e).removeClass('bg-social-3-hover');
          $(e).addClass('bg-social-3');
          $(e).children('img:eq(0)').removeClass('bg-social-3');
          $(e).children('p:eq(0)').removeClass('bg-social-3');
        }

      }
  }

  const handleArts = (isForward: number) => {
    const length = data.length;

    if(!($('.img-card').hasClass('animate__fadeIn'))) {
      $('.img-card').addClass('animate__fadeIn');
    } else {
      $('.img-card').removeClass('animate__fadeIn');
      setTimeout(function () {
        setArtNum((prev) => (((prev + isForward) % length) + length) % length);
        $('.img-card').addClass('animate__fadeIn');
      }, 300);
    }
  };

  useEffect(() => {
    const width = document.getElementById("root")?.offsetWidth;
    setWidth(width);
  }, [document]);

  return (
    <div
      id="artist"
      className="z-10  relative bg-white bg-artist bg-no-repeat bg-contain bg-right-top -skew-y-[15deg]"
      style={{
        paddingBottom: width && (width / 2) * 0.2665 + "px",
        marginBottom: width && "-" + (width / 2) * 0.2665 + "px",
      }}
    >
      {width && (
        <p
          style={{
            top: "-" + (width / 2) * 0.2665 + "px",
            height: (width / 2) * 0.2665 + 1 + "px",
          }}
          className="absolute bg-white w-full text-xxxlarge uppercase text-center"
        >
          the artist
        </p>
      )}
      {width && (
        <div
          className="skew-y-[15deg]"
          style={{ paddingTop: (width / 2) * 0.2665 + "px" }}
        >
          <div className="container section-roll mx-auto grid grid-cols-1 md:grid-cols-2 pt-36 px-5 md:px-10 lg:px-28">
            <div className="mb-20 pb-3 border-artist w-100">
              <p className="mx-auto text-artName italic uppercase text-black tracking-wide text-end pl-2">
                artist - vexa
              </p>
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-1 ml-auto md:min-h-[400px] w-full md:w-[400px] xl:w-[567px] relative md:pr-12 ">
              <div className="border-2 border-[#E8E8E8] w-0 h-full absolute right-0 top-10 hidden md:block">
                <div className="border-2 border-[#E8E8E8] w-10 h-0 absolute -right-[2px] -top-1"></div>
              </div>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`text-artInfo text-black italic p-6 bg-gradient-to-r from-[#dccffa] to-[#ecc5bf] w-full ${
                        open ? "rounded-t-2xl" : "rounded-2xl"
                      }`}
                    >
                      Who is Vexa?
                    </Disclosure.Button>
                    <Transition
                        enter="transition duration-1000 ease-out"
                        enterFrom="transform  scale-y-0 opacity-0"
                        enterTo="transform origin-top scale-y-100 opacity-100"
                        leave="transition duration-1000 ease-out"
                        leaveFrom="transform scale-y-100 opacity-100"
                        leaveTo="transform scale-y-0 origin-top opacity-0"
                    >
                      <Disclosure.Panel className="p-6 text-black text-small2 bg-gradient-to-r from-[#dccffa] to-[#ecc5bf] rounded-b-2xl border-t-2">
                          <p className={'animate__animated animate__fadeIn animate__delay-1s'}>
                          Hi, nice to meet you all. This is VEXA. I am a Korean
                          Digital artist who likes the watercolor-shading method
                          derived from Anime art. I love mechanical & tactical theme
                          too and this taste has appealed to KRAFTON PUBG.</p>
                      </Disclosure.Panel>
                    </Transition>

                  </>
                )}
              </Disclosure>
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-1 ml-auto md:min-h-[400px] w-full md:w-[400px] xl:w-[567px] relative md:pr-12 md:-translate-y-3">
              <div className="border-2 border-[#E8E8E8] w-0 h-full absolute right-0 top-11 hidden md:block">
                <div className="border-2 border-[#E8E8E8] w-10 h-0 absolute -right-[2px] -top-2"></div>
              </div>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`text-artInfo text-black italic p-6 bg-gradient-to-r from-[#dccffa] to-[#ecc5bf] w-full ${
                        open ? "rounded-t-2xl" : "rounded-2xl"
                      }`}
                    >
                      Inspiration for V3’s art?
                    </Disclosure.Button>
                    <Transition
                        enter="transition duration-1000 ease-out"
                        enterFrom="transform  scale-y-0 opacity-0"
                        enterTo="transform origin-top scale-y-100 opacity-100"
                        leave="transition duration-1000 ease-out"
                        leaveFrom="transform scale-y-100 opacity-100"
                        leaveTo="transform scale-y-0 origin-top opacity-0"
                    >
                      <Disclosure.Panel className="p-6 text-black text-small2 bg-gradient-to-r from-[#dccffa] to-[#ecc5bf] rounded-b-2xl border-t-2">
                        <p className={'animate__animated animate__fadeIn animate__delay-1s'}>
                        My inspiration from Version Thr33 comes from Skrillex &
                        K-pop. Among them, it comes from a mash-up song by an
                        artist named J.E.B, who remix several Pop/K-pop songs. He
                        completes the mesh-up by adding numerous variations and
                        numerous reinterpretation of the existing original song,
                        and the catharsis from this strange harmony inspires my
                        overall artworks, including Version Thr33.</p>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </div>
            <div className="col-span-1 mr-auto md:min-h-[400px] w-full md:w-[400px] xl:w-[567px] relative md:pl-12 md:translate-y-3">
              <div className="border-2 border-[#E8E8E8] w-10 h-0 absolute -left-[2px] top-10 hidden md:block"></div>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`text-artInfo text-black italic p-6 bg-gradient-to-r from-[#dccffa] to-[#ecc5bf] w-full ${
                        open ? "rounded-t-2xl" : "rounded-2xl"
                      }`}
                    >
                      Entrance into art?
                    </Disclosure.Button>
                    <Transition
                        enter="transition duration-1000 ease-out"
                        enterFrom="transform  scale-y-0 opacity-0"
                        enterTo="transform origin-top scale-y-100 opacity-100"
                        leave="transition duration-1000 ease-out"
                        leaveFrom="transform scale-y-100 opacity-100"
                        leaveTo="transform scale-y-0 origin-top opacity-0"
                    >
                      <Disclosure.Panel className="p-6 animate__animated animate__fadeIn text-black text-small2 bg-gradient-to-r from-[#dccffa] to-[#ecc5bf] rounded-b-2xl border-t-2">
                        <p className={'animate__animated animate__fadeIn animate__delay-1s'}>
                        The first time I created art was so simple. Since
                        childhood, I just liked the process of filling empty
                        canvas paper with my drawing & painting, regardless of
                        whether it was a pencil, brush, or chalk. Since I was
                        seven years old, I have probably found the value of my
                        life through expressing something I only think about in my
                        head on a canvas, the real life.</p>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-1 mr-auto md:min-h-[400px] w-full md:w-[400px] xl:w-[567px] relative md:pl-12 md:-translate-y-3 ">
              <div className="border-2 border-[#E8E8E8] w-10 h-0 absolute -left-[2px] top-10 hidden md:block"></div>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`text-artInfo italic p-6 bg-gradient-to-r from-[#dccffa] to-[#ecc5bf] w-full ${
                        open ? "rounded-t-2xl" : "rounded-2xl"
                      }`}
                    >
                      Key Achievements
                    </Disclosure.Button>
                    <Transition
                        enter="transition duration-1000 ease-out"
                        enterFrom="transform  scale-y-0 opacity-0"
                        enterTo="transform origin-top scale-y-100 opacity-100"
                        leave="transition duration-1000 ease-out"
                        leaveFrom="transform scale-y-100 opacity-100"
                        leaveTo="transform scale-y-0 origin-top opacity-0"
                    >
                    <Disclosure.Panel className="p-6 animate__animated animate__fadeIn text-small bg-gradient-to-r from-[#dccffa] to-[#ecc5bf] rounded-b-2xl border-t-2 ">
                      <p className={'animate__animated animate__fadeIn animate__delay-1s'}>PUBG - Character concept artist</p>
                    </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
          <div className="bg-achievement bg-no-repeat bg-contain bg-left flex items-center">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-5 md:px-10 lg:px-28 h-100">
              <div className="col-span-1"></div>
              <div className="col-span-1">
                <div className="mt-4 mb-4 ml-2 mr-2 md:m-0 bg-[#FFF8E4] rounded-xl flex flex-col gap-3 pl-6 pr-6 pt-4 pb-4 min-h-card" >
                  <p className="uppercase text-large italic text-center">art</p>
                  <div className="flex items-center">
                    <ArrowLeftIcon
                      width={40}
                      height={40}
                      color={"#000"}
                      className="bg-white hover:bg-slate-200 rounded-5 p-1 hover:cursor-pointer"
                      onClick={() => handleArts(-1)}
                    />
                    <div className="rounded-xl mx-auto p-3 animate__animated img-card">
                      <img src={data[artNum].image} alt="Art Piece" />
                    </div>
                    <ArrowRightIcon
                      width={40}
                      height={40}
                      color={"#000"}
                      className="bg-white hover:bg-slate-200 rounded-full p-1 hover:cursor-pointer"
                      onClick={() => handleArts(1)}
                    />
                  </div>
                  <p id="link" className="uppercase text-large italic text-center mb-1">
                    links
                  </p>
                  <div className="flex gap-3 items-center p-3 rounded-xl item-social bg-social-1" onMouseEnter={(e) => socialsHover(e.target, true, 1)} onMouseLeave={(e) => socialsHover(e.target, false, 1)}>
                    <img src={FoundationIcon} alt="Foundation Icon" width="10%"/>
                      <hr className="border-2 hr-social text-white " style={{opacity: 1}}/>
                    <p className="uppercase text-black text-medium italic">foundation</p>
                  </div>
                  <div className="flex gap-3 items-center p-3  rounded-xl item-social bg-social-2" onMouseEnter={(e) => socialsHover(e.target, true, 2)} onMouseLeave={(e) => socialsHover(e.target, false, 2)}>
                    <img src={ArtStationIcon} alt="artstation Icon" width="10%" />
                    <hr className="border-2 hr-social text-white" style={{opacity: 1}}/>
                    <p className="uppercase text-black text-medium italic">artstation</p>
                  </div>
                  <div className="flex gap-3 items-center p-3 rounded-xl item-social bg-social-3" onMouseEnter={(e) => socialsHover(e.target, true, 3)} onMouseLeave={(e) => socialsHover(e.target, false, 3)}>
                    <img src={TwitterIcon} alt="Twitter Icon" width="10%" />
                    <hr className="border-2 hr-social text-white" style={{opacity: 1}}/>
                    <p className="uppercase text-black text-medium italic">twitter</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Artist;
