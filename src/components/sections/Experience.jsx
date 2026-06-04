import React from "react";
import styled from "styled-components";
import { experiences } from "../../data/constants";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ExperienceCard from "../cards/ExperienceCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  align-items: center;
  background: ${({ theme }) => theme.bg};
  padding: 80px 16px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
`;

const SectionLabel = styled.div`
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 8px;
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Desc = styled.div`
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 500px;
  line-height: 1.7;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Experience = () => {
  return (
    <Container id="Experience">
      <Wrapper>
        <SectionLabel>My Journey</SectionLabel>
        <Title>Experience</Title>
        <Desc style={{ marginBottom: "40px" }}>
          My work experience as a software engineer and working on different
          companies and projects.
        </Desc>

        <VerticalTimeline lineColor="#E8E8E8">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </Wrapper>
    </Container>
  );
};

export default Experience;
