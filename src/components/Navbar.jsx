import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuRounded, CloseRounded } from "@mui/icons-material";

const NavOuter = styled.div`
  background: #FAF8F4;
  display: flex;
  justify-content: center;
  padding: 16px 24px;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Pill = styled.nav`
  background: #ffffff;
  border: 1px solid #e8e4dc;
  border-radius: 100px;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  gap: 8px;
  max-width: 680px;
  width: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const navLinkStyles = `
  color: #222222;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  text-decoration: none;
  padding: 6px 14px;
  border-radius: 50px;
  transition: background 0.15s ease, color 0.15s ease;
  white-space: nowrap;
  &:hover {
    background: rgba(255, 87, 34, 0.08);
    color: #FF5722;
  }
`;

const NavLink = styled.a`${navLinkStyles}`;
const RouterNavLink = styled(Link)`${navLinkStyles}`;

const MobileRow = styled.div`
  display: none;
  width: 100%;
  max-width: 680px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileLogo = styled.span`
  font-weight: 700;
  font-size: 18px;
  color: #111111;
`;

const MobileLogoAccent = styled.span`
  color: #FF5722;
`;

const MobileIcon = styled.button`
  background: none;
  border: 1px solid #e8e4dc;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #111111;
`;

const MobileMenu = styled.div`
  position: absolute;
  top: 84px;
  left: 16px;
  right: 16px;
  background: #ffffff;
  border: 1px solid #e8e4dc;
  border-radius: 20px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  z-index: 100;
`;

const mobileNavLinkStyles = `
  color: #222222;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  padding: 10px 16px;
  border-radius: 12px;
  transition: background 0.15s ease, color 0.15s ease;
  &:hover {
    background: rgba(255, 87, 34, 0.08);
    color: #FF5722;
  }
`;

const MobileNavLink = styled.a`${mobileNavLinkStyles}`;
const RouterMobileNavLink = styled(Link)`${mobileNavLinkStyles}`;


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavOuter>
      <Pill>
        <NavLink href="/#About">Home</NavLink>
        <NavLink href="/#Experience">Experience</NavLink>
        <NavLink href="/#Education">Education</NavLink>
        <RouterNavLink to="/stories">Stories</RouterNavLink>
      </Pill>

      <MobileRow>
        <MobileLogo>
          Vihidun<MobileLogoAccent>.</MobileLogoAccent>
        </MobileLogo>
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          {isOpen
            ? <CloseRounded style={{ fontSize: 20 }} />
            : <MenuRounded style={{ fontSize: 20 }} />
          }
        </MobileIcon>
      </MobileRow>

      {isOpen && (
        <MobileMenu>
          <MobileNavLink href="/#About" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
          <MobileNavLink href="/#Experience" onClick={() => setIsOpen(false)}>Experience</MobileNavLink>
          <MobileNavLink href="/#Education" onClick={() => setIsOpen(false)}>Education</MobileNavLink>
          <RouterMobileNavLink to="/stories" onClick={() => setIsOpen(false)}>Stories</RouterMobileNavLink>
        </MobileMenu>
      )}
    </NavOuter>
  );
};

export default Navbar;
