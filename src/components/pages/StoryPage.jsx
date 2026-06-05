import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { stories } from "../../data/stories";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const YOUTUBE_REGEX =
  /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

const Page = styled.div`
  min-height: 100vh;
  background: #faf8f4;
`;

const TopBar = styled.div`
  position: sticky;
  top: 0;
  background: rgba(250, 248, 244, 0.92);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid #e4e0d8;
  padding: 14px 24px;
  display: flex;
  align-items: center;
  z-index: 10;
`;

const BackBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  color: #111111;
  font-family: "Poppins", sans-serif;
  padding: 6px 0;
  transition: color 0.2s ease;

  &:hover {
    color: #ff5722;
  }
`;

const CoverImage = styled.img`
  width: 100%;
  height: 420px;
  object-fit: cover;
  display: block;

  @media (max-width: 768px) {
    height: 240px;
  }
`;

const ContentArea = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 48px 24px 80px;
`;

const CategoryTag = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: #ff5722;
  background: rgba(255, 87, 34, 0.08);
  border-radius: 50px;
  padding: 4px 14px;
  letter-spacing: 0.5px;
`;

const ArticleTitle = styled.h1`
  font-size: 48px;
  font-weight: 800;
  color: #111111;
  line-height: 1.15;
  letter-spacing: -1.5px;
  margin: 16px 0 12px;

  @media (max-width: 768px) {
    font-size: 30px;
    letter-spacing: -0.5px;
  }
`;

const ArticleSubtitle = styled.p`
  font-size: 20px;
  color: #666666;
  line-height: 1.6;
  margin: 0 0 24px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 13px;
  color: #999999;
  padding-bottom: 32px;
  border-bottom: 1px solid #e4e0d8;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 11px;
    gap: 6px;
  }
`;

const Divider = styled.span`
  width: 4px;
  height: 4px;
  background: #cccccc;
  border-radius: 50%;
  display: inline-block;
`;

const MarkdownWrapper = styled.div`
  h1, h2, h3, h4 {
    font-weight: 700;
    color: #111111;
    margin: 40px 0 16px;
    line-height: 1.3;
  }
  h1 { font-size: 36px; }
  h2 { font-size: 28px; }
  h3 { font-size: 22px; }

  p {
    font-size: 17px;
    color: #333333;
    line-height: 1.85;
    margin: 0 0 24px;
  }

  strong { font-weight: 700; color: #111111; }
  em { font-style: italic; }

  ul, ol {
    padding-left: 24px;
    margin: 0 0 24px;
  }
  li {
    font-size: 17px;
    color: #333333;
    line-height: 1.85;
    margin-bottom: 8px;
  }

  blockquote {
    border-left: 3px solid #FF5722;
    padding: 8px 0 8px 20px;
    margin: 32px 0;
    p {
      font-size: 20px;
      font-style: italic;
      color: #555555;
      margin: 0;
    }
  }

  img {
    width: 100%;
    border-radius: 12px;
    margin: 24px 0 8px;
    display: block;
    object-fit: cover;
  }

  a {
    color: #FF5722;
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  code {
    background: #f0ede7;
    border-radius: 4px;
    padding: 2px 6px;
    font-size: 14px;
    font-family: monospace;
  }

  pre {
    background: #1a1a1a;
    border-radius: 12px;
    padding: 20px;
    overflow-x: auto;
    margin: 24px 0;
    code {
      background: none;
      color: #e0e0e0;
      font-size: 14px;
      padding: 0;
    }
  }

  hr {
    border: none;
    border-top: 1px solid #e4e0d8;
    margin: 40px 0;
  }
`;

const VideoEmbed = styled.div`
  width: 100%;
  margin: 24px 0;
  border-radius: 12px;
  overflow: hidden;

  iframe {
    width: 100%;
    aspect-ratio: 16 / 9;
    border: none;
    display: block;
  }
`;

const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  gap: 12px;
  font-size: 20px;
  color: #666666;
`;

const customComponents = {
  a({ href, children }) {
    const ytMatch = href?.match(YOUTUBE_REGEX);
    if (ytMatch) {
      const videoId = ytMatch[1];
      return (
        <VideoEmbed>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoEmbed>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  },
};

const StoryPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const story = stories.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!story) {
    return (
      <Page>
        <TopBar>
          <BackBtn onClick={() => navigate(-1)}>
            <ArrowBackIcon style={{ fontSize: 18 }} /> Back
          </BackBtn>
        </TopBar>
        <NotFound>Story not found.</NotFound>
      </Page>
    );
  }

  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <Page>
      <TopBar>
        <BackBtn onClick={() => navigate(-1)}>
          <ArrowBackIcon style={{ fontSize: 18 }} /> Back
        </BackBtn>
      </TopBar>

      {story.coverImage && (
        <CoverImage src={story.coverImage} alt={story.title} />
      )}

      <ContentArea>
        <CategoryTag>{story.category}</CategoryTag>
        <ArticleTitle>{story.title}</ArticleTitle>
        {story.subtitle && (
          <ArticleSubtitle>{story.subtitle}</ArticleSubtitle>
        )}
        <Meta>
          <span>Vihidun</span>
          <Divider />
          <span>{formatDate(story.date)}</span>
          {story.tags?.length > 0 && (
            <>
              <Divider />
              <span>{story.tags.join(" · ")}</span>
            </>
          )}
        </Meta>

        <MarkdownWrapper>
          <ReactMarkdown components={customComponents}>
            {story.content}
          </ReactMarkdown>
        </MarkdownWrapper>
      </ContentArea>
    </Page>
  );
};

export default StoryPage;
