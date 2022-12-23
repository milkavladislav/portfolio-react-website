import React, { ReactElement, useState } from "react";
import "./Nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { HiOutlineBookOpen } from "react-icons/hi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

interface INavButton {
  link: string;
  icon: ReactElement;
}

const nabButtons: INavButton[] = [
  {
    link: "#",
    icon: <AiOutlineHome />,
  },
  {
    link: "#about",
    icon: <AiOutlineUser />,
  },
  {
    link: "#experience",
    icon: <HiOutlineBookOpen />,
  },
  {
    link: "#services",
    icon: <RiServiceLine />,
  },
  {
    link: "#contact",
    icon: <BiMessageSquareDetail />,
  },
];

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      {nabButtons.map(({ link, icon }) => (
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
