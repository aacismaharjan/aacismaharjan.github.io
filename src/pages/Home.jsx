import React, { useEffect, useState } from "react"
import Section from "../components/Section"
import ResumePDF from "../assets/resume.pdf"
import { FaGithub, FaLinkedinIn, FaTwitter , FaBlogger} from "react-icons/fa"
import {SiFiverr} from "react-icons/si";
import SocialLink from "../utils/SocialLink"
import social from "./../constant/social.json"

const SocialIcon = ({ href, icon }) => {
  return (
    <a
      className="social-icon"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  )
}


/* Gets object of SocialLink */
const getSocialLinks = () => {
  const icons = [];
  icons.push(new SocialLink(<FaLinkedinIn/>, social.linkedin));
  icons.push(new SocialLink(<FaGithub/>, social.github));
  icons.push(new SocialLink(<FaBlogger/>, social.blogger));
  icons.push(new SocialLink(<FaTwitter/>, social.twitter));
  // icons.push(new SocialLink(<FaYoutube/>, social.youtube));
  // icons.push(new SocialLink(<FaInstagram/>, social.instagram));
  // icons.push(new SocialLink(<FaYoutube/>, social.youtubeDev));
  icons.push(new SocialLink(<SiFiverr/>, social.fiverr));

  return icons;
}

export default function Home() {
  const [socialLinks, setSocialLinks] = useState([]);  

  useEffect(()=> {
    setSocialLinks(getSocialLinks());
  }, [])

  return (
    <Section id="about">
      <h1 className="mb-0">
        Aashish
        <span className="text-primary">Maharjan</span>
      </h1>
      <div className="subheading mb-3">
        Purano Kalimati, Kathmandu, Nepal ·
        <a href="mailto:aashishmaharjan2001@gmail.com">
          aashishmaharjan2001@gmail.com
        </a>
      </div>
      <p className="lead mb-4">
        {/* Aashish Maharjan connects online brands to their target audiences for
        the perfect communicating experience. At the Gyanodaya School, Aashish
        learned the importance of applying classic web designing ideas to modern
        brands strategies from experts in the field, including his Computer
        Teacher, Mr. Mannor Shakya. */}
        Innovative, passionate and hard working certified Web Developer started <strong>Web Design and Web Development from 2018 AD</strong>.
        Gained a lot experience in web development, specialized in frontend
        technologies. I have involved in creating various SAAS projects. Currently, I'm pursuing my BCIS (<strong>Bachelor of Computer Information System</strong>) degree, as well as part-time freelancing.
      </p>

      <div className="btn-group mb-5">
        <button
          className="btn btn-primary btn-custom py-2 px-5"
          type="submit"
          onClick={() => window.open(ResumePDF)}
        >
          Download CV
        </button>
      </div>

      <div className="social-icons">
        {socialLinks.map(({ link, icon }, index) => (
          <SocialIcon href={link} icon={icon} key={index} />
        ))}
      </div>
    </Section>
  )
}
