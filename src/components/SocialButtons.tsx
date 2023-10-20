import React from "react";
import Docs from "../assets/images/docs-icon.png";
import Discord from "../assets/images/discord-icon.png";
import Twitter from "../assets/images/twitter-icon.png";
import Github from "../assets/images/github-icon.png";

const SocialButtons: React.FC = () => {
  const socialProfiles = {
    docs: "/",
    discord: "/",
    twitter: "/",
    github: "/",
  };

  return (
    <div className="flex justify-center max-w-md mx-auto mt-44">
      <a href={socialProfiles.docs} target="_blank" rel="noopener noreferrer">
        <div className="w-24 h-24 md:w-16 md:h-16 m-2 rounded-xl bg-purple-darkest bg-opacity-80 flex flex-col items-center justify-center p-2">
          <img src={Docs} alt="Button 1" className="w-12 h-12 md:w-8 md:h-8" />
          <div className="hidden md:block text-center text-white font-bold text-xs md:text-sm">
            Docs
          </div>
        </div>
      </a>
      <a href={socialProfiles.discord} target="_blank" rel="noopener noreferrer">
        <div className="w-24 h-24 md:w-16 md:h-16 m-2 rounded-xl bg-purple-darkest bg-opacity-80 flex flex-col items-center justify-center p-2">
          <img src={Discord} alt="Button 2" className="w-12 h-12 md:w-8 md:h-8" />
          <div className="hidden md:block text-center text-white font-bold text-xs md:text-sm">
            Discord
          </div>
        </div>
      </a>
      <a href={socialProfiles.twitter} target="_blank" rel="noopener noreferrer">
        <div className="w-24 h-24 md:w-16 md:h-16 m-2 rounded-xl bg-purple-darkest bg-opacity-80 flex flex-col items-center justify-center p-2">
          <img src={Twitter} alt="Button 3" className="w-12 h-12 md:w-8 md:h-8" />
          <div className="hidden md:block text-center text-white font-bold text-xs md:text-sm">
            Twitter
          </div>
        </div>
      </a>
      <a href={socialProfiles.github} target="_blank" rel="noopener noreferrer">
        <div className="w-24 h-24 md:w-16 md:h-16 m-2 rounded-xl bg-purple-darkest bg-opacity-80 flex flex-col items-center justify-center p-2">
          <img src={Github} alt="Button 4" className="w-12 h-12 md:w-8 md:h-8" />
          <div className="hidden md:block text-center text-white font-bold text-xs md:text-sm">
            Github
          </div>
        </div>
      </a>
    </div>
  );
};

export default SocialButtons;
