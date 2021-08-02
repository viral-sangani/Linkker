import React from "react";
import { Button } from "../common/buttons/Button";

export default function Hero() {
  return (
    <div className="max-w-6xl mx-10 lg:m-auto ">
      <div className="flex flex-col lg:flex-row justify-between flex-nowrap w-full items-center pt-10">
        <div className="w-full lg:w-1/2 mr-6">
          <div className="text-4xl md:text-6xl lg:text-8xl font-sourceSansPro font-extrabold text-green-800">
            All your contact at one place.
          </div>
          <div className="text-2xl font-sourceSansPro font-extrabold text-green-700 pt-12">
            A simple and single tool, helps you to manage, share, short your
            links and playlists.
            <br />
            <div className="text-green-700">
              Share with your Audience, Teams, Friends and Families.
            </div>
            <Button className="mt-10" varient="primary" onClick={() => {}}>
              Get Started
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/2 ml-12">
          <img src="/static/hero.png" />
        </div>
      </div>
    </div>
  );
}
