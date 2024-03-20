import React from "react";
import Section from "../components/Section";

export default function Awards() {
  return (
    <React.Fragment>
      <Section id="awards" title="Awards &amp; Certifications">
        <ul className="fa-ul mb-0">
          <li>
            <span className="fa-li">
              <i className="fas fa-trophy text-warning"></i>
            </span>
            Google Analytics Certified Developer
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-trophy text-warning"></i>
            </span>
            Mobile Web Specialist - Google Certification
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-trophy text-warning"></i>
            </span>
            1<sup>st</sup>
            Place - University of Colorado Boulder - Emerging Tech Competition
            2009
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-trophy text-warning"></i>
            </span>
            1<sup>st</sup>
            Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI
            Design Category)
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-trophy text-warning"></i>
            </span>
            2<sup>nd</sup>
            Place - University of Colorado Boulder - Emerging Tech Competition
            2008
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-trophy text-warning"></i>
            </span>
            1<sup>st</sup>
            Place - James Buchanan High School - Hackathon 2006
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-trophy text-warning"></i>
            </span>
            3<sup>rd</sup>
            Place - James Buchanan High School - Hackathon 2005
          </li>
        </ul>
      </Section>
    </React.Fragment>
  );
}
