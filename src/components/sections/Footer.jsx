import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MediumIcon from "../../images/Medium Icon.svg";

const FooterContainer = styled.div`
  width: 100%;
  background: #111111;
  padding: 48px 0 28px;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 0 24px;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 22px;
  color: #ffffff;
  letter-spacing: -0.5px;
`;

const LogoAccent = styled.span`
  color: #FF5722;
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    text-align: center;
  }
`;

const NavLink = styled.a`
  color: #9e9e9e;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: #FF5722;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 4px;
`;

const SocialMediaIcon = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid #2a2a2a;
  color: #9e9e9e;
  transition: all 0.2s ease-in-out;
  &:hover {
    border-color: #FF5722;
    color: #FF5722;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #2a2a2a;
  margin: 8px 0;
`;

const Copyright = styled.p`
  font-size: 13px;
  color: #555555;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>
          Vihidun<LogoAccent>.</LogoAccent>
        </Logo>
        <Nav>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Education">Education</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.github} target="_blank">
            <GitHubIcon style={{ fontSize: 18 }} />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.twitter} target="_blank">
            <TwitterIcon style={{ fontSize: 18 }} />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.linkedin} target="_blank">
            <LinkedInIcon style={{ fontSize: 18 }} />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.medium} target="_blank">
            <img src={MediumIcon} alt="Medium" style={{ width: "18px", height: "auto", filter: "brightness(0) saturate(100%) invert(63%) sepia(0%) hue-rotate(0deg)" }} />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <Divider />
        <Copyright>&copy; 2024 Vihidun Pathiranage. All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
