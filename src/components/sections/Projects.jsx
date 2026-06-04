// import React, { useState } from "react";
// import styled from "styled-components";
// import { projects } from "../../data/constants";
// import ProjectCard from "../cards/ProjectCard";

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   position: relative;
//   z-index: 1;
//   padding: 80px 16px;
//   align-items: center;
//   background: ${({ theme }) => theme.bg};
// `;

// const Wrapper = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-direction: column;
//   width: 100%;
//   max-width: 1100px;
//   gap: 12px;
// `;

// const SectionLabel = styled.div`
//   font-size: 13px;
//   font-weight: 600;
//   letter-spacing: 2px;
//   text-transform: uppercase;
//   color: ${({ theme }) => theme.primary};
//   margin-bottom: 8px;
// `;

// const Title = styled.div`
//   font-size: 42px;
//   text-align: center;
//   font-weight: 700;
//   color: ${({ theme }) => theme.text_primary};
//   @media (max-width: 768px) {
//     font-size: 28px;
//   }
// `;

// const Desc = styled.div`
//   font-size: 16px;
//   text-align: center;
//   color: ${({ theme }) => theme.text_secondary};
//   max-width: 500px;
//   line-height: 1.7;
//   @media (max-width: 768px) {
//     font-size: 14px;
//   }
// `;

// const ToggleButtonGroup = styled.div`
//   display: flex;
//   gap: 10px;
//   flex-wrap: wrap;
//   justify-content: center;
//   margin: 28px 0;
// `;

// const ToggleButton = styled.div`
//   padding: 8px 22px;
//   border-radius: 50px;
//   cursor: pointer;
//   font-size: 14px;
//   font-weight: 600;
//   border: 1.5px solid ${({ active, theme }) => active ? theme.primary : theme.cardBorder};
//   background: ${({ active, theme }) => active ? theme.primary : theme.bg};
//   color: ${({ active }) => active ? "#ffffff" : "#666666"};
//   transition: all 0.2s ease;

//   &:hover {
//     border-color: ${({ theme }) => theme.primary};
//     color: ${({ active }) => active ? "#ffffff" : "#FF5722"};
//   }

//   @media (max-width: 768px) {
//     padding: 6px 16px;
//     font-size: 12px;
//   }
// `;

// const CardContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: stretch;
//   gap: 24px;
//   flex-wrap: wrap;
// `;

// const Projects = ({ openModal, setOpenModal }) => {
//   const [toggle, setToggle] = useState("all");
//   return (
//     <Container id="Projects">
//       <Wrapper>
//         <SectionLabel>What I've Built</SectionLabel>
//         <Title>Projects</Title>
//         <Desc style={{ marginBottom: "8px" }}>
//           I have worked on a wide range of projects. From web apps to android
//           apps. Here are some of my projects.
//         </Desc>

//         <ToggleButtonGroup>
//           <ToggleButton active={toggle === "all"} onClick={() => setToggle("all")}>
//             ALL
//           </ToggleButton>
//           <ToggleButton active={toggle === "web app"} onClick={() => setToggle("web app")}>
//             WEB APPS
//           </ToggleButton>
//           <ToggleButton active={toggle === "android app"} onClick={() => setToggle("android app")}>
//             ANDROID APPS
//           </ToggleButton>
//           <ToggleButton active={toggle === "machine learning"} onClick={() => setToggle("machine learning")}>
//             MACHINE LEARNING
//           </ToggleButton>
//         </ToggleButtonGroup>

//         <CardContainer>
//           {toggle === "all"
//             ? projects.map((project) => (
//                 <ProjectCard
//                   key={project.id}
//                   project={project}
//                   openModal={openModal}
//                   setOpenModal={setOpenModal}
//                 />
//               ))
//             : projects
//                 .filter((item) => item.category === toggle)
//                 .map((project) => (
//                   <ProjectCard
//                     key={project.id}
//                     project={project}
//                     openModal={openModal}
//                     setOpenModal={setOpenModal}
//                   />
//                 ))}
//         </CardContainer>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Projects;
