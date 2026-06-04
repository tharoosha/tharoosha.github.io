import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import ArticleIcon from "@mui/icons-material/Article";

const Section = styled.div`
  background: #FAF8F4;
  padding: 48px 24px 80px;
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  width: 100%;
  max-width: 1000px;
  background: #111111;
  border-radius: 28px;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 28px;

  @media (max-width: 768px) {
    padding: 56px 24px;
    border-radius: 20px;
  }
`;

const Heading = styled.h2`
  font-size: 58px;
  font-weight: 800;
  color: #ffffff;
  line-height: 1.1;
  margin: 0;
  letter-spacing: -2px;

  @media (max-width: 768px) {
    font-size: 36px;
    letter-spacing: -1px;
  }
`;

const HeadingItalic = styled.em`
  font-style: italic;
  font-weight: 700;
  color: #FF5722;
`;

const Subtitle = styled.p`
  font-size: 17px;
  color: #888888;
  line-height: 1.7;
  max-width: 420px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const GetInTouchBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #ffffff;
  color: #111111;
  border-radius: 50px;
  padding: 16px 40px;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.2s ease, color 0.2s ease;
  letter-spacing: -0.3px;

  &:hover {
    background: #FF5722;
    color: #ffffff;
  }
`;

const Arrow = styled.span`
  font-size: 18px;
  transition: transform 0.2s ease;
  ${GetInTouchBtn}:hover & {
    transform: translateX(3px);
  }
`;

const SocialRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 8px;
`;

const SocialChip = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #aaaaaa;
  border: 1px solid #2a2a2a;
  border-radius: 50px;
  padding: 9px 20px;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease;

  &:hover {
    border-color: #FF5722;
    color: #FF5722;
    background: rgba(255, 87, 34, 0.06);
  }
`;

const Contact = () => {
  return (
    <Section id="Contact">
      <Card>
        <Heading>
          Let's build <HeadingItalic>together</HeadingItalic>
        </Heading>
        <Subtitle>
          Open to collaboration, consulting, and ambitious projects. Feel free to reach out.
        </Subtitle>
        <GetInTouchBtn href={`mailto:tharooshavihidun@gmail.com`}>
          Get in touch <Arrow>→</Arrow>
        </GetInTouchBtn>
        <SocialRow>
          <SocialChip href={Bio.github} target="_blank">
            <GitHubIcon style={{ fontSize: 16 }} /> GitHub
          </SocialChip>
          <SocialChip href={Bio.linkedin} target="_blank">
            <LinkedInIcon style={{ fontSize: 16 }} /> LinkedIn
          </SocialChip>
          <SocialChip href={Bio.twitter} target="_blank">
            <TwitterIcon style={{ fontSize: 16 }} /> X / Twitter
          </SocialChip>
          <SocialChip href={Bio.medium} target="_blank">
            <ArticleIcon style={{ fontSize: 16 }} /> Medium
          </SocialChip>
        </SocialRow>
      </Card>
    </Section>
  );
};

export default Contact;
