"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Define prop types
interface SideMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const mainMenu = [
  { title: "About Us", submenu: "about" },
  { title: "Programs", submenu: "programs" },
  { title: "Membership", submenu: "membership" },
  { title: "Energy Services", submenu: "energy" },
  { title: "Join SOPEC", link: "/join-sopec" },
];

const subMenus: Record<string, string[]> = {
  about: [
    "WHO IS SOPEC?",
    "OUR TEAM",
    "GOVERNANCE",
    "ANNUAL REPORTS",
    "PUBLIC NOTICES",
    "BIDS",
    "EMPLOYMENT",
    "NEWS AND UPDATES",
    "PUBLIC RECORDS REQUEST",
  ],
  programs: [
    "GREEN INITIATIVES",
    "OHIO SOLAR ASSESSMENT PROGRAM",
    "OHIO REAP GRANT ASSISTANCE PROGRAM",
  ],
  membership: ["SOPEC MEMBERS", "ORGANIZATIONAL MEMBERSHIPS", "COMMUNITY GRANTS"],
  energy: [
    "OVERVIEW",
    "ELECTRIC AGGREGATION",
    "PUBLIC PRICING PROGRAM",
    "ENERGY CHOICE",
    "ENERGY EFFICIENCY RESOURCES",
  ],
};

export default function SideMenu({ isOpen, toggleMenu }: SideMenuProps) {
  const [currentMenu, setCurrentMenu] = useState<string>("main");

  return (
    <div
      className={`fixed top-0 left-0 w-80 h-full bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 z-50`}
    >
      {/* Header */}
      <div className="p-4 border-b flex justify-between items-center bg-[#0B3D02] text-white">
        {currentMenu !== "main" ? (
          <button onClick={() => setCurrentMenu("main")} className="flex items-center space-x-2">
            <ArrowLeft size={20} />
            <span className="font-bold">Back</span>
          </button>
        ) : (
          <Image
            src="/image/SOPEC-white.png"
            alt="SOPEC Logo"
            width={100}
            height={30}
            className="h-auto w-28 "
            priority
          />
        )}
        {/* Close button */}
        {currentMenu === "main" && (
          <button onClick={toggleMenu} className="text-white text-lg">
            ✕
          </button>
        )}
      </div>

      {/* Main Menu */}
      {currentMenu === "main" && (
        <ul className="p-4 space-y-4">
          {mainMenu.map((item, index) =>
            item.submenu ? (
              <li
                key={index}
                className="cursor-pointer text-green-700 font-bold"
                onClick={() => setCurrentMenu(item.submenu)}
              >
                {item.title}
              </li>
            ) : (
              <li key={index}>
                <Link href={item.link ?? "#"} className="text-green-700 font-bold">
                  {item.title}
                </Link>
              </li>
            )
          )}
        </ul>
      )}

      {/* Submenus */}
      {currentMenu !== "main" && subMenus[currentMenu] && (
        <ul className="p-4 space-y-4">
          {subMenus[currentMenu].map((item, index) => (
            <li key={index} className="text-green-700 font-bold">{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
