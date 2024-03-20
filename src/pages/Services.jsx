import React from "react";
import Section from "../components/Section";

const Services = () => {
  return (
    <Section id="services" title="Services for you">
      <div className="subheading mb-3">Simple Website</div>
      <p>
        I develop a beautiful website like landing website, personal website,
        showcase website and other stunning websites using HTML, CSS and
        Javascript.
      </p>

      <div className="subheading mb-3">Interactive Website</div>
      <p>
        I design user friendly interactive website like dashboards for mananging
        business, booking websites, and other stunning websites using
        Javascript, React.js and Next.js.
      </p>

      <div className="subheading mb-3">Complete Web Development</div>
      <p>
        I develop and engineer a complete functioning website from design to
        development and hosting live on the internet like Ecommerce websites,
        Hotel management, travelling websites, etc and other cool websites using
        MERN Stack.
      </p>
    </Section>
  );
};

export default Services;
