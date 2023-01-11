import React from "react";

function Info() {
  return (
    <div className="container section-roll m-auto bg-white rounded-5 py-24 grid grid-cols-2 gap-y-20">
      <p className="text-large text-center italic col-span-2">
        5 FACTIONS • 5 NICHES • 5 LEADERS
      </p>
      <div className="col-span-2 md:col-span-1 flex flex-col gap-14 md:border-r-4 md:border-black px-14 lg:px-24">
        <div className="flex flex-col items-center md:items-stretch">
          <span className="text-xlarge uppercase italic border-b-4 md:border-0 border-black">
            alpha
          </span>
          <p className="text-small pt-2 pr-2">
            The center to alpha is quite simple; having an edge. If the
            statement is true that people trade on speculation and sell news. We
            hope to give an environment where users can trade information,
            knowledge and most of all, foster relationships with each other.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-stretch">
          <span className="text-xlarge uppercase italic border-b-4 md:border-0 border-black">
            gaming
          </span>
          <p className="text-small pt-2 pr-2">
            The main theme here is simple, gaming and creating a culture for
            people to stream and play different types of games. Ultimately
            leading to community and gaming centric events.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-stretch">
          <span className="text-xlarge uppercase italic border-b-4 md:border-0 border-black">
            technology
          </span>
          <p className="text-small pt-2 pr-2">
            This space is for people who love the details. Framing, creating and
            understanding upcoming and new technology within Crypto and any
            sphere.
          </p>
        </div>
      </div>
      <div className="col-span-2 md:col-span-1 flex flex-col gap-20 px-14 lg:px-24">
        <div className="flex flex-col items-center md:items-stretch">
          <span className="text-xlarge uppercase italic border-b-4 md:border-0 border-black">
            hangout
          </span>
          <p className="text-small pt-2 pr-2">
            The center to Hangout is that people would be niche-less, having the
            ability to just hangout: watch movies, spend time together, laugh,
            chat. We know that sometimes having an edge in the market or getting
            WL can be nice but sometimes those moments where you laugh and spend
            an evening talking with people can be the best, and this
            sub-community is to foster that.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-stretch">
          <span className="text-xlarge uppercase italic border-b-4 md:border-0 border-black">
            creator
          </span>
          <p className="text-small pt-2 pr-2">
            This is a space for those who want to build and create something
            from scratch. We`ve all been or met those people that love creating
            something and watching it grow into something organic and wonderful.
            This faction is for you whether you are an artist, founder, collab
            manager, etc etc.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Info;
