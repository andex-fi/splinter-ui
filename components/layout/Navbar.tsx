'use client'
import { FC, useState } from "react";
import Link from 'next/link';
import Image from "next/image";
import { Button } from "@/components/Button";
import { Bars3CenterLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "@/public/assets/splinter-logo.png";
import Logo2 from "@/public/assets/splinter-logo.png";
import { navLinks } from "@/utils/NavUtils";

const Navbar: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpenMenu = (): void => {
    setOpen(!open);
  };

  const activeLink = "text-[#fff]  font-bold hover:text-[#fff]";
  const normalLink = "text-[#A086C0] font-bold hover:text-[#fff]";

  return (
    <div className="bg-[#240939] text-white flex flex-col gap-8 lg:gap-0 lg:flex-row lg:items-center lg:justify-between px-4 md:px-10 lg:px-20 py-6">
     <Image
        src={Logo2}
        alt="splinter logo"
        className="hidden md:block md:w-[20%] lg:w-[8%]"
      /> 
      <Image
        src={Logo}
        alt="splinter logo"
        className="block md:hidden w-[10%]"
        width={300} 
        height={100}
      />

      {open ? (
        <div className="block lg:hidden absolute top-20 left-0 w-full bg-[#240939] py-10 z-10">
          <ul className="flex flex-col items-center gap-10 lg:gap-8">
            {navLinks.map((navlink, index) => (
              <Link key={index} href={navlink.link} className={activeLink}>
                  <li>{navlink.name}</li>
              </Link>
            ))}
          </ul>

          <div className="flex flex-col mt-4 items-center gap-10">
            <Link href="/">
            <Button btnStyles="text-white flex items-center justify-center font-bold px-8 py-3 text-sm rounded-lg button-50">
						Launch Dapp
					</Button>
            </Link>
          </div>
        </div>
      ) : null}

      <ul className="hidden lg:flex items-center gap-4 lg:gap-8">
        {navLinks.map((navlink, index) => (
          <Link key={index} href={navlink.link} className={normalLink}>
              <li>{navlink.name}</li>
          </Link>
        ))}
      </ul>

      <div className="hidden lg:flex items-center gap-4">
        <Link href="/">
        <Button btnStyles="text-white flex items-center justify-center font-bold px-8 py-3 text-sm rounded-lg button-50">
						Launch Dapp
					</Button>
        </Link>
      </div>

      {open ? (
        <XMarkIcon
          className="w-8 h-8 block lg:hidden absolute top-6 right-4"
          onClick={handleOpenMenu}
        />
      ) : (
        <Bars3CenterLeftIcon
          className="w-8 h-8 block lg:hidden absolute top-6 right-4"
          onClick={handleOpenMenu}
        />
      )}
    </div>
  );
};

export default Navbar
