import React, { ReactElement, useState } from "react";
import "./Nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { HiOutlineBookOpen } from "react-icons/hi";
import { RiFolderUserLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

export interface ISectionHeader {
  link: string;
  title: string;
  icon: ReactElement;
}

export const sections: ISectionHeader[] = [
  {
    link: "#",
    title: "Home",
    icon: <AiOutlineHome />,
  },
  {
    link: "#about",
    title: "About",
    icon: <AiOutlineUser />,
  },
  {
    link: "#experience",
    title: "Experience",
    icon: <HiOutlineBookOpen />,
  },
  {
    link: "#portfolio",
    title: "Portfolio",
    icon: <RiFolderUserLine />,
  },
  {
    link: "#contact",
    title: "Contact",
    icon: <BiMessageSquareDetail />,
  },
];

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      {sections.map(({ link, icon }) => (
        <a
          href={link}
          className={activeNav === link ? "active" : ""}
          onClick={() => {
            setActiveNav(link);
          }}
        >
          {icon}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
