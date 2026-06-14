import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { stories } from "../../data/stories";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

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

const StoryFrame = styled.iframe`
  width: 100%;
  border: none;
  display: block;
  min-height: 100vh;
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

const StoryPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const story = stories.find((s) => s.slug === slug);
  const frameRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    const handler = (e) => {
      if (e.data?.iframeHeight && frameRef.current) {
        frameRef.current.style.height = e.data.iframeHeight + "px";
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

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

  const pageUrl = `https://tharoosha.github.io/story/${story.slug}`;

  return (
    <Page>
      <Helmet>
        <title>{story.title} — Tharoosha Vihidun</title>
        <meta name="description" content={story.subtitle} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={story.title} />
        <meta property="og:description" content={story.subtitle} />
        {story.coverImage && <meta property="og:image" content={story.coverImage} />}
        <meta property="og:site_name" content="Tharoosha Vihidun" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={story.title} />
        <meta name="twitter:description" content={story.subtitle} />
        {story.coverImage && <meta name="twitter:image" content={story.coverImage} />}
      </Helmet>
      <TopBar>
        <BackBtn onClick={() => navigate(-1)}>
          <ArrowBackIcon style={{ fontSize: 18 }} /> Back
        </BackBtn>
      </TopBar>
      <StoryFrame
        ref={frameRef}
        src={story.htmlSrc}
        title={story.title}
      />
    </Page>
  );
};

export default StoryPage;
