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

const Name = styled.div`
  font-size: 17px;
  font-weight: 700;
  color: #111111;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Degree = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: #FF5722;
  margin-top: 2px;

  @media only screen and (max-width: 768px) {
    font-size: 11px;
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

const Grade = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #111111;
  background: rgba(255, 87, 34, 0.08);
  border: 1px solid rgba(255, 87, 34, 0.25);
  border-radius: 50px;
  padding: 4px 14px;
  display: inline-block;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
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

const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={education.school}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          src={education.img}
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
      date={education.date}
    >
      <Top>
        <Image src={education.img} alt={education.school} />
        <Body>
          <Name>{education.school}</Name>
          <Degree>{education.degree}</Degree>
          <Date>{education.date}</Date>
        </Body>
      </Top>
      <Grade>
        <b>Grade:</b> {education.grade}
      </Grade>
      <Description>{education.desc}</Description>
    </VerticalTimelineElement>
  );
};

export default EducationCard;
