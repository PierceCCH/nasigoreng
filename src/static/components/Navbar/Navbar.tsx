import React from "react";
import ssaLogo from "../../assets/ssaLogo.png";
import f_logo from "../../assets/f_logo.png";
import "./Navbar.css";
import { NavItem, Nav } from "reactstrap";
import { Link } from "react-router-dom";
import SotongGuideDropdown from "../SotongGuideDropdown/SotongGuideDropdown";
import LinkToAbout from "../About/LinkToAbout";
import LinkToJoin from "../JoinUs/LinkToJoin";
import LinkToNewsletters from "../Newsletters/LinkToNewsletters";
import LinkToEvents from "../Events/LinkToEvents";
import LinkToSponsorships from "../Sponsorships/LinkToSponsorships";
import Socials from "../Socials/Socials";

export const Navbar = ({
  appState: { userData }
}) => {
  const userIconOrSignIn = userData ? (
    <img className="img-fluid rounded profile-img" src={userData.image} />
  ) : (
    <a className="nav-link fb-link" href="/auth/facebook">
      <img src={f_logo} className="f-logo" />
      Sign In
    </a>
  );

  return (
    <Nav className="navbar fixed-top flex-md-nowrap p-0">
      <div className="objs">
        <Link to="/">
          <div className="ssaLogo">
            <img src={ssaLogo} className="ssaLogo"/>
          </div>
        </Link>
        <Nav className="ml-auto pr-1 pr-md-0 tabs">
          {/* <LinkToAbout />
          <LinkToEvents />
          <LinkToSponsorships />
          <LinkToNewsletters />
          <LinkToJoin /> */}
          <SotongGuideDropdown userData = {userData} />
          <Socials />
          <NavItem>{userIconOrSignIn}</NavItem>
        </Nav>
      </div>
    </Nav>
  );
};
