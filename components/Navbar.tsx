"use client";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
import Image from "next/image";

import ecellLogoWhite from "../app/assets/ecell-white-img.png";
import ecellLogoBlack from "../app/assets/ecell-black-img.png";

// import {Events} from './Evnets/page'

const navigation = [
  { name: "Home", href: "/#" },
  { name: "Event", href: "/#event" },
  { name: "Speakers", href: "/#speakers" },
  { name: "Sponsors", href: "/#sponsors" },
  { name: "Team", href: "/team" },
  { name: "Contact Us", href: "/contact" }
];

const Navbar = () => {
  return (
    <Popover className="relative w-full bg-black">
      <div className="px-6">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex gap-4 justify-start">
            <a href="https://www.ecellvnit.org/">
              <span className="sr-only">E-Cell VNIT</span>
              <Image
                height={50}
                width={125}
                priority
                src={ecellLogoWhite}
                alt="E-Cell VNIT"
              />
            </a>
          </div>
          <div className="-my-2 mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group
            as="nav"
            className="w-full hidden space-x-10 md:flex md:justify-end pr-10"
          >
            {navigation.map((item, idx) => (
              <a
                key={idx}
                className="text-xs lg:text-lg xl:text-xl uppercase font-semibold text-white hover:text-gray-300"
                href={item.href}
              >
                {item.name}
              </a>
            ))}
            <div className="px-4 py-2 bg-gradient-to-b from-[#D5242A] to-[#FF2D34]">
              <a href="" className="text-xs lg:text-lg xl:text-xl uppercase font-semibold text-white hover:text-gray-300">Register</a>    
            </div>
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    height={50}
                    width={125}
                    priority
                    src={ecellLogoBlack}
                    alt="E-Cell VNIT"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">
                      Close menu
                    </span>
                    <XMarkIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {navigation.map((item, idx) => (
                    <a
                      key={idx}
                      className="text-lg uppercase font-semibold text-gray-900 hover:text-gray-700"
                      href={item.href}
                    >
                      {item.name}
                    </a>
                    // <link rel="stylesheet" to='/events' onClick={}/>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Navbar;