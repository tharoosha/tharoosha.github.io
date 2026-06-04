import React from "react";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const Card = styled.div`
  width: 320px;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    transform: translateY(-6px);
    box-shadow: 0 8px 32px rgba(255, 87, 34, 0.12);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  background: #f5f5f5;
`;

const CardContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const Tag = styled.span`
  font-size: 11px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  background: rgba(255, 87, 34, 0.08);
  border-radius: 50px;
  padding: 3px 10px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Date = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Description = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  border-top: 1px solid ${({ theme }) => theme.cardBorder};
`;

const MemberRow = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${({ theme }) => theme.bg};
  margin-left: -8px;
  &:first-child {
    margin-left: 0;
  }
`;

const IconLinks = styled.div`
  display: flex;
  gap: 8px;
`;

const IconButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.cardBorder};
  color: ${({ theme }) => theme.text_secondary};
  transition: all 0.2s ease;
  &:hover {
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
  }
`;

const ProjectCard = ({ project, openModal, setOpenModal }) => {
  return (
    <Card onClick={() => setOpenModal({ state: true, project })}>
      <Image src={project.image} alt={project.title} />
      <CardContent>
        <TagRow>
          {project.tags?.slice(0, 3).map((tag, i) => (
            <Tag key={i}>{tag}</Tag>
          ))}
        </TagRow>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
      </CardContent>
      <CardFooter>
        <MemberRow>
          {project.member?.map((m, i) => (
            <Avatar key={i} src={m.img} alt={m.name} title={m.name} />
          ))}
        </MemberRow>
        <IconLinks>
          {project.github && (
            <IconButton
              href={project.github}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
            >
              <GitHubIcon style={{ fontSize: 15 }} />
            </IconButton>
          )}
          {project.webapp && (
            <IconButton
              href={project.webapp}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
            >
              <OpenInNewIcon style={{ fontSize: 15 }} />
            </IconButton>
          )}
        </IconLinks>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
