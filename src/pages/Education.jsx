import React from "react";
import Section from "../components/Section";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">Gyanodaya College</h3>
          <div className="subheading mb-3">Management</div>
          <div>Computer Science - Web Development Track</div>
          <p>GPA: 3.23</p>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">August 2006 - May 2010</span>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-between">
        <div className="flex-grow-1">
          <h3 className="mb-0">Gyanodaya Secondary School</h3>
          <div className="subheading mb-3">Primary Education</div>
          <p>GPA: 3.65</p>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">2007 -  2018</span>
        </div>
      </div>
    </Section>
  );
}
