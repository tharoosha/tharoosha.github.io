import styled, { ThemeProvider } from "styled-components";
import { theme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/sections/Hero";
import { AnimatePresence } from "framer-motion";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Stories from "./components/sections/Stories";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import StoryPage from "./components/pages/StoryPage";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

const MainLayout = () => (
  <>
    <Navbar />
    <Body>
      <AnimatePresence>
        <div>
          <Hero />
          <Experience />
          <Education />
          <Contact />
          <Footer />
        </div>
      </AnimatePresence>
    </Body>
  </>
);

const StoriesLayout = () => (
  <>
    <Navbar />
    <Body>
      <Stories />
      <Footer />
    </Body>
  </>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/stories" element={<StoriesLayout />} />
          <Route path="/story/:slug" element={<StoryPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
