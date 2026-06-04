import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import HeroImg from "../../images/HeroImage_1.png";
import { motion } from "framer-motion";

const HeroSection = styled.div`
  background: #FAF8F4;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 52px 0 0;
  overflow: hidden;
`;

const TextBlock = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 860px;
  width: 100%;
  padding: 0 24px;
  margin-bottom: 28px;
`;

const Headline = styled.h1`
  font-size: 68px;
  font-weight: 800;
  color: #111111;
  line-height: 1.1;
  margin: 0 0 12px;
  letter-spacing: -2px;

  @media (max-width: 768px) {
    font-size: 40px;
    letter-spacing: -1px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

const HeadlineNormal = styled.span`
  font-weight: 800;
  font-style: normal;
`;


const RoleRow = styled.div`
  font-size: 22px;
  font-weight: 500;
  color: #666666;
  display: flex;
  gap: 2px;
  align-items: center;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const RoleAccent = styled.span`
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
`;


const ImageWrapper = styled(motion.div)`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 480px;
  object-fit: cover;
  object-position: center top;
  display: block;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const Hero = () => {
  return (
    <div id="About">
      <HeroSection>
        <TextBlock
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <RoleRow>
            Hi, I'm <RoleAccent>{Bio.name}</RoleAccent>
          </RoleRow>
          <Headline>
            <HeadlineNormal>Software Engineer</HeadlineNormal>
          </Headline>
        </TextBlock>

        <ImageWrapper
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <HeroImage src={HeroImg} alt="Tharoosha Vihidun" />
        </ImageWrapper>
      </HeroSection>
    </div>
  );
};

export default Hero;
