import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noreferrer">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocial;
