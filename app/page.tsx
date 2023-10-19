// components/Home.tsx

import { FC } from "react";
import { Button } from "@/components/Button";
import SocialButtons from "@/components/home/FooterSocials";
// import SocialFooterButtons from "@/components/home/FooterSocials"
import Link from "next/link";
import Image from "next/image";
import TopGalaxy from "@/public/assets/top-galaxy.png";
import TopLeftPlanet from "@/public/assets/top-left-planet.png"
import "@/app/globals.css";

const Home: FC = () => {
	return (
		<section className="bg-big text-center text-white px-4 md:px-10 lg:px-20 py-10 md:pt-24 pb-0 w-full">
			<div>
        {/* <div className="top-left-planet">
          <image src={TopLeftPlanet} alt="pink planet" />
        </div> */}

        <div className="galaxy">
				<Image src={TopGalaxy} alt="Galaxy" height={100}
          width={100} />
        </div>
				<h1 className="text-3xl lg:text-7xl font-extrabold mb-2">
					First Perpetutal Decentralized <br />
					Exchange on Flare
				</h1>
			</div>

			<div className="mt-8">
				<p className="mb-1 text-md font-bold opacity-80">
					Trade BTC, Eth, FLARE and other top cryptocurrencies with up to 50x
				</p>
				<p className="mb-1 text-md font-bold opacity-80">
					leverage directly from your wallet, prepare yourself for a
					revolutionary
				</p>
				<p className="mb-1 text-md font-bold opacity-80">
					leap in decentralized finance. Splinteris your gateway to unrivialed
				</p>
				<p className="mb-1 text-md font-bold opacity-80">
					trading experiences that combine speed, security, and innovation
				</p>
			</div>

			<div className="flex items-center gap-4 justify-center mt-8">
				<Link href="/swap">
					<Button btnStyles="text-white flex items-center justify-center font-bold px-8 py-3 text-sm rounded-lg button-50">
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
			<div className="footer-socials">
        <SocialButtons />
      </div>
		</section>
	);
};

export default Home;
