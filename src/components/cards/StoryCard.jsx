import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 320px;
  background: #ffffff;
  border: 1px solid ${({ theme }) => theme.cardBorder};
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    transform: translateY(-5px);
    box-shadow: 0 8px 32px rgba(255, 87, 34, 0.1);
  }
`;

const Cover = styled.img`
  width: 100%;
  height: 190px;
  object-fit: cover;
  background: #f0ede7;
  display: block;
`;

const Body = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

const CategoryTag = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  background: rgba(255, 87, 34, 0.08);
  border-radius: 50px;
  padding: 3px 10px;
  display: inline-block;
  width: fit-content;
  letter-spacing: 0.3px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #111111;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Subtitle = styled.div`
  font-size: 13px;
  color: #666666;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
`;

const DateText = styled.span`
  font-size: 12px;
  color: #999999;
`;

const SourceBadge = styled.span`
  font-size: 11px;
  font-weight: 600;
  color: #999999;
`;

const StoryCard = ({ story, onClick }) => {
  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  return (
    <Card onClick={onClick}>
      {story.coverImage && (
        <Cover src={story.coverImage} alt={story.title} />
      )}
      <Body>
        <CategoryTag>{story.category}</CategoryTag>
        <Title>{story.title}</Title>
        <Subtitle>{story.subtitle || story.description}</Subtitle>
        <Footer>
          <DateText>{formatDate(story.date || story.pubDate)}</DateText>
          {story.source === "medium" && (
            <SourceBadge>Medium ↗</SourceBadge>
          )}
        </Footer>
      </Body>
    </Card>
  );
};

export default StoryCard;
