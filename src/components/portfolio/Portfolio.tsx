import React from "react";
import "./Portfolio.css";
import SectionWrapper from "../common/SectionWrapper";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";

interface IPortfolioProject {
  img: string;
  title: string;
  links: {
    github: string;
    live: string;
    figma?: string;
  };
}

const portfolioProjects: IPortfolioProject[] = [
  {
    img: IMG1,
    title: "Midas Token Landing Site",
    links: {
      github: "https://github.com/milkavladislav/midas-token",
      live: "https://midas-token.netlify.app/",
      figma: "https://www.figma.com/file/HyY4p5kzWbUVgdvQVc3K70/",
    },
  },
  {
    img: IMG2,
    title: "Web Site For Digital Agency",
    links: {
      github: "https://github.com/milkavladislav/digital-agency",
      live: "https://digital-agency-react.netlify.app/",
      figma: "https://www.figma.com/file/Lc5T1lQgVPXsyywQkoj6sj",
    },
  },
  {
    img: IMG3,
    title: "Travel landing Web Site",
    links: {
      github: "https://github.com/milkavladislav/travel-landing",
      live: "https://travel-landing-react.netlify.app/",
      figma: "https://www.figma.com/file/aCs4SIsCbuRIMmdx7oWyAg",
    },
  },
];

const Portfolio = () => {
  return (
    <SectionWrapper
      subtitle={"My Recent Work"}
      title={"Portfolio"}
      containerClass={"portfolio__container"}
      id={"portfolio"}
    >
      <>
        {portfolioProjects.map(
          ({ img, title, links: { github, live, figma } }) => (
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={img} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  GitHub
                </a>
                <a href={figma} className="btn">
                  Figma
                </a>
                <a
                  href={live}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          )
        )}
      </>
    </SectionWrapper>
  );
};

export default Portfolio;
