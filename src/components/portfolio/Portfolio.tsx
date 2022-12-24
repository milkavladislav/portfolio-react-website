import React from "react";
import "./Portfolio.css";
import SectionWrapper from "../common/SectionWrapper";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const portfolioImage = [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6];

const Portfolio = () => {
  return (
    <SectionWrapper
      subtitle={"My Recent Work"}
      title={"Portfolio"}
      containerClass={"portfolio__container"}
      id={"portfolio"}
    >
      <>
        {portfolioImage.map((image) => (
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt="portfolio1" />
            </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="http://github.com" className="btn">
                GitHub
              </a>
              <a
                href="http://github.com"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </>
    </SectionWrapper>
  );
};

export default Portfolio;
