import { FC } from "react";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import TopLeftPlanet from '../../assets/images/top-left-planet.png'
import TopGalaxy from "../../assets/images/top-galaxy.png";
import rightBluePlanet from "../../assets/images/right-blue-planet.png";
import LeftPlanet from "../../assets/images/left-pink-planet.png";
import BottomPlanet from "../../assets/images/bottom-planet.png";

import SocialButtons from "../../components/SocialButtons";

const Home: FC = () => {
  return (
    <>
      <section className="bg-big text-center text-white px-4 md:px-10 lg:px-20 py-10 md:pt-24 pb-0 w-full">
        <div className="sm:mt-7 md:mt-7">
          <div className="top-planet">
            <img src={TopLeftPlanet} alt="pink planet" height={50} width={50} />
          </div>

          <div className="galaxy">
            <img src={TopGalaxy} alt="Galaxy" height={100} width={100} />
          </div>
          <h1 className="text-3xl lg:text-7xl font-extrabold mb-2 hero-spacing">
            First Perpetual Decentralized <br />
            Exchange on Flare
          </h1>
          <div className="absolute w-24 h-24 blue-planet">
            <img src={rightBluePlanet} alt="blue planet" />
          </div>
        </div>

        <div className="mt-8">
          <p className="mb-1 text-spacing opacity-80">
            Trade BTC, Eth, FLARE, and other top cryptocurrencies with up to 50x
          </p>
          <p className="mb-1 text-spacing opacity-80">
            leverage directly from your wallet, prepare yourself for a
            revolutionary
          </p>
          <p className="mb-1 text-spacing opacity-80">
            leap in decentralized finance. Splinter is your gateway to unrivaled
          </p>
          <p className="mb-1 text-spacing opacity-80">
            trading experiences that combine speed, security, and innovation
          </p>
        </div>

        <div className="flex items-center gap-4 justify-center mt-8">
          <Link to="/">
            <Button btnStyles="text-white flex items-center justify-center font-bold px-8 py-3 text-sm rounded-lg launch-Dapp-button">
              Launch Dapp
            </Button>
          </Link>
          <Button
            href="/"
            btnStyles="learn-more-btn text-white flex items-center justify-center font-bold px-8 py-3 text-sm rounded-lg"
          >
            Learn more
          </Button>
        </div>
        <div className="absolute left-planet ">
          <img src={LeftPlanet} alt="LeftPlanet" />
        </div>

        <div className="mt-14 absolute lg:hidden md:w-15 md:h-7 sm:w-15 sm:h-7 w-24 h-24 top-25 right-40 ">
            <img src={BottomPlanet} alt="BottomPlanet" />
        </div>

        <div className="sm:mt-16">
          <SocialButtons />
        </div>
      </section>
    </>
  );
};

export default Home;
