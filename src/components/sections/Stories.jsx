import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { stories as localStories } from "../../data/stories";
import StoryCard from "../cards/StoryCard";

const MEDIUM_USER = "tharooshavihidun";
const RSS_API = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USER}`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.bg};
  padding: 35px 16px 100px;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Desc = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  max-width: 500px;
  line-height: 1.7;
  margin-bottom: 16px;
`;

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  width: 100%;
  margin-top: 24px;
`;

const LoadingText = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  padding: 24px;
`;

const Stories = () => {
  const navigate = useNavigate();
  const [mediumStories, setMediumStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const extractImage = (html) => {
      const match = html?.match(/<img[^>]+src="([^"]+)"/);
      return match ? match[1] : null;
    };

    fetch(RSS_API)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok") {
          const items = (data.items || []).slice(0, 4).map((item) => ({
            id: item.guid,
            title: item.title,
            subtitle: item.description?.replace(/<[^>]+>/g, "").slice(0, 160),
            date: item.pubDate,
            category: item.categories?.[0] || "Article",
            coverImage: item.thumbnail || extractImage(item.content) || extractImage(item.description),
            source: "medium",
            link: item.link,
          }));
          setMediumStories(items);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const handleCardClick = (story) => {
    if (story.source === "medium") {
      window.open(story.link, "_blank");
    } else {
      navigate(`/story/${story.slug}`);
    }
  };

  const allStories = [...localStories, ...mediumStories];

  return (
    <Container id="Stories">
      <Wrapper>
        <SectionLabel>My Stories</SectionLabel>
        <Title>Stories</Title>
        <Desc>
          Articles, research, and journalism on technology, AI, and the world
          around us.
        </Desc>

        {loading ? (
          <LoadingText>Loading stories…</LoadingText>
        ) : (
          <CardGrid>
            {allStories.map((story) => (
              <StoryCard
                key={story.id}
                story={story}
                onClick={() => handleCardClick(story)}
              />
            ))}
          </CardGrid>
        )}
      </Wrapper>
    </Container>
  );
};

export default Stories;
