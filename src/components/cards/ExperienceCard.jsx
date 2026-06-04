import React from "react";
import styled from "styled-components";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
`;

const Image = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 10px;
  margin-top: 4px;
  object-fit: cover;

  @media only screen and (max-width: 768px) {
    height: 40px;
    width: 40px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Role = styled.div`
  font-size: 17px;
  font-weight: 700;
  color: #111111;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Company = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #FF5722;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #888888;

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  color: #666666;
  line-height: 1.7;
  margin-bottom: 8px;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const SkillsLabel = styled.span`
  font-weight: 600;
  color: #111111;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`;

const Skill = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #FF5722;
  background: rgba(255, 87, 34, 0.08);
  border: 1px solid rgba(255, 87, 34, 0.3);
  border-radius: 50px;
  padding: 4px 12px;

  @media only screen and (max-width: 768px) {
    font-size: 11px;
  }
`;

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={experience.company}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          src={experience.img}
        />
      }
      iconStyle={{
        background: "#FF5722",
        boxShadow: "0 0 0 4px #E8E8E8",
      }}
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: "#FFFFFF",
        border: "1px solid #E8E8E8",
        borderRadius: "12px",
        boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
        padding: "24px",
      }}
      contentArrowStyle={{
        borderRight: "7px solid #E8E8E8",
      }}
      date={experience.date}
      dateClassName="timeline-date"
    >
      <Top>
        <Image src={experience.img} alt={experience.company} />
        <Body>
          <Role>{experience.role}</Role>
          <Company>{experience.company}</Company>
          <Date>{experience.date}</Date>
        </Body>
      </Top>
      <Description>
        {experience?.desc}
        {experience?.skills && (
          <>
            <br />
            <SkillsLabel>Skills:</SkillsLabel>
            <ItemWrapper>
              {experience?.skills?.map((skill, index) => (
                <Skill key={index}>{skill}</Skill>
              ))}
            </ItemWrapper>
          </>
        )}
      </Description>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
