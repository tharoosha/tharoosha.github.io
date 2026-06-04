import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  align-items: center;
  background: ${({ theme }) => theme.bgLight};
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

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  gap: 24px;
  justify-content: center;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 480px;
  background-color: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 16px;
  padding: 28px 32px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 4px 24px rgba(255, 87, 34, 0.1);
  }

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 20px 24px;
  }

  @media (max-width: 500px) {
    max-width: 330px;
    padding: 16px 20px;
  }
`;

const SkillTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text_primary};
  padding-left: 12px;
  border-left: 3px solid ${({ theme }) => theme.primary};
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 8px;
`;

const SkillItem = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 50px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s ease;
  background: ${({ theme }) => theme.bg};

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
`;

const Skills = () => {
  return (
    <Container id="Skills">
      <Wrapper>
        <SectionLabel>What I Know</SectionLabel>
        <Title>Skills</Title>
        <Desc style={{ marginBottom: "8px" }}>
          Here are some of my skills on which I have been working on for the
          past 3 years.
        </Desc>

        <SkillsContainer>
          {skills.map((skill, index) => (
            <Skill key={`skill-${index}`}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item, index_x) => (
                  <SkillItem key={`skill-x-${index_x}`}>
                    <SkillImage src={item.image} alt={item.name} />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
