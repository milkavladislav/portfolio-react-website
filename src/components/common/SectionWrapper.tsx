import React from "react";

interface ISectionWrapper {
  subtitle: string;
  title: string;
  containerClass: string;
  id: string;
  children: JSX.Element;
}

const SectionWrapper = ({
  subtitle,
  title,
  id,
  containerClass,
  children,
}: ISectionWrapper) => {
  return (
    <section id={id}>
      <h5>{subtitle}</h5>
      <h2>{title}</h2>
      <div className={`container ${containerClass}`}>{children}</div>
    </section>
  );
};

export default SectionWrapper;
