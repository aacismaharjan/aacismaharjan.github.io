import React, { useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { motion } from "framer-motion";
import Avatar from "../assets/avatar.jpg";
import ScrollspyNav from "react-scrollspy-nav";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

const ButtonLight = styled(({ alt, ...props }) => (
  <img id="theme-img" alt={alt} {...props} />
))`
  width: 15px;
  margin: 0 auto;
  padding-top: 1rem;
  cursor: pointer;

  @media (max-width: 1024px) {
    margin: 0;
  }
`;

export default function Navigation() {
  useEffect(() => {
    function closeNav(event) {
      const parentNode = document.getElementById("responsive-navbar-nav");
      if (
        event.target !== parentNode &&
        !parentNode.contains(event.target) &&
        parentNode.classList.contains("show")
      ) {
        document.getElementById("toggleCloseBtn").click();
      }
    }

    window.addEventListener("click", closeNav);

    return () => {
      window.removeEventListener("click", closeNav);
    };
  }, []);
  const navItems = [
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "Portfolio",
      href: "#portfolio",
    },
    {
      name: "Codepen",
      href: "#codepen",
    },
    {
      name: "Blogs",
      href: "#blogs",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  const sectionIds = navItems.map((item) => item.href.replace("#", ""));

  const handleThemeToggle = (event) => {
    if (event.target.src.includes("/pic_bulboff.gif")) {
      window.computeDarkTheme(false);
    } else {
      window.computeDarkTheme(true);
    }
  };
  return (
    <Navbar
      collapseOnSelect
      variant="dark"
      expand="lg"
      className="fixed-top"
      id="sideNav"
    >
      <Navbar.Brand>
        <span className="d-none d-lg-none">Aashish Mahajran</span>
        <span className="d-block d-lg-block nav-img">
          <motion.img
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src={Avatar}
            alt="Aashish Maharjan"
            drag
            dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
            dragElastic={0.1}
            onClick={() => {
              document.body.scrollTop = 0;
              document.documentElement.scrollTop = 0;
            }}
          />
        </span>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        style={{ border: "none" }}
      />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          id="toggleCloseBtn"
        >
          <AiOutlineClose />
        </Navbar.Toggle>
        <Nav className="mr-auto">
          <ScrollspyNav
            scrollTargetIds={sectionIds}
            offset={200}
            activeNavClass="active"
            scrollDuration="100"
            headerBackground="true"
          >
            {navItems.map((navItem, index) => (
              <Nav.Link
                href={navItem.href}
                key={index}
                onClick={(event) => {
                  window.location = `/${navItem.href}`;
                }}
              >
                {navItem.name}
              </Nav.Link>
            ))}
          </ScrollspyNav>
          <ButtonLight src="./pic_bulbon.gif" onClick={handleThemeToggle} />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
