import React from "react";
import { Button } from "../common/buttons/Button";

export default function Hero() {
  return (
    <div className="max-w-6xl m-auto">
      <div className="flex flex-row justify-between flex-nowrap w-full items-center pt-10">
        <div className="w-1/2 mr-6">
          <div className="text-8xl font-sourceSansPro font-extrabold text-default-800">
            All your contact at one place.
          </div>
          <div className="text-2xl font-sourceSansPro font-extrabold text-default-700 pt-12">
            A simple and single tool, helps you to manage, share, short your
            links and playlists.
            <br />
            <div className="text-default-700">
              Share with your Audience, Teams, Friends and Families.
            </div>
            <Button className="mt-10" varient="primary" onClick={() => {}}>
              Get Started
            </Button>
          </div>
        </div>
        <div className="w-1/2 ml-12">
          <img src="/static/hero.png" />
        </div>
      </div>
    </div>
  );
}
