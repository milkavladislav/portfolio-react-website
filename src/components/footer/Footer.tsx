import React, { ReactElement } from "react";
import {
  AiFillTwitterCircle,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
import { sections } from "../nav/Nav";
import "./Footer.css";

interface ISocialMedia {
  link: string;
  icon: ReactElement;
}

const socialMedia: ISocialMedia[] = [
  {
    link: "https://www.instagram.com/milka_vlad/",
    icon: <AiOutlineInstagram />,
  },
  {
    link: "https://www.facebook.com/profile.php?id=100043076597814",
    icon: <AiOutlineFacebook />,
  },
  {
    link: "https://twitter.com/milka_vladislav",
    icon: <AiFillTwitterCircle />,
  },
];

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Milka Vladislav Portfolio
      </a>

      <ul className="permalinks">
        {sections.map(({ title, link }) => (
          <li>
            <a href={link}>{title}</a>
          </li>
        ))}
      </ul>

      <div className="footer__socials">
        {socialMedia.map(({ link, icon }) => (
          <a href={link}>{icon}</a>
        ))}
      </div>

      <div className="footer__copyright">
        <small>&copy; MilkaVladislav. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
