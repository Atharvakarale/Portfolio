import Navbar from "../../Components/Navbar/Navbar";
import styles from "./ProjectPage.module.css";
import ProjectCard from "../../Components/ProjectCard/projectCard";
import marketingIMG from "../../assets/marketingIMG.png";

import safecamIMG from "../../assets/safecamIMG.png";
import careerCoach from "../../assets/careerCoach.png";
import financly from "../../assets/financly.png";
import travel from "../../assets/travel.png";
import market from "../../assets/market.jpg";
import tour from "../../assets/tour.png";



// import weatherAppImg from '../../assets/weaht.png'
import { motion } from "framer-motion";
import ComponentTitle from "../../Components/ComponentTitle/ComponentTitle";
import Circle from "../../Components/Circle/Circle";
import MainContainer from "../../Components/MainContainer/MainContainer";

function Projects() {
  return (
    <div>
      <Navbar />
      <Circle right={"-6rem"} top={"-8rem"} />
      <MainContainer>
        <div className={styles.project_page_component}>
          <ComponentTitle title={"My projects"} />
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: ".5", duration: ".3", stiffness: "100" }}
            className={styles.projects_component}
          >
            <ProjectCard
              previewLink={"https://sensai-theta.vercel.app/"}
              githubLink={"https://github.com/Atharvakarale/sensai"}
              projectName={"AI_Career_Coach"}
              projectDetails={
                "Full Stack AI Career Coach an AI-driven platform for career guidance, featuring an NLP resume analyzer, AI cover letter builder, and optimized serverless backend for faster performance."
              }
              demoImage={careerCoach}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
                "https://cdn.worldvectorlogo.com/logos/next-js.svg",

              ]}
            />
            
            <ProjectCard
              previewLink={"https://personal-finance-tracker-main-eight.vercel.app/"}
              githubLink={"https://github.com/Atharvakarale/personal-finance-tracker-main"}
              projectName={"Financly"}
              projectDetails={
                "Financly a personal finance tracker for managing expenses and earnings. Features real-time tracking, downloadable reports, and secure data storage. Built with React, Node.js, and Firebase for a seamless and efficient user experience.."
              }
              demoImage={financly}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
                 "https://cdn.worldvectorlogo.com/logos/firebase-1.svg",
              ]}
            />

            <ProjectCard
              previewLink={"https://travellandingpage262004.netlify.app/"}
              githubLink={"https://github.com/Atharvakarale/Travel_landing_Page"}
              projectName={"Travel Website Landing Page"}
              projectDetails={
                "Travel-X a visually engaging travel website landing page built with HTML, CSS, and JavaScript. Features interactive destination highlights, smooth animations, and a responsive design for an immersive user experience"
              }
              demoImage={travel}
              key={"Travel Website Landing Page"}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
              ]}
            />
            
            <ProjectCard
              previewLink={""}
              githubLink={"https://github.com/Atharvakarale/Agri_Community"}
              projectName={"Krishi Mitra"}
              projectDetails={
                "Krishimitra for Farmers a platform for farm equipment rental, AI crop prediction, and worker hiring, with an e-commerce marketplace and chatbot support."
              }
              demoImage={market}
              key={"Krishi Mitra"}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
                "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
                "https://cdn.worldvectorlogo.com/logos/twilio.svg",
              ]}
            />

              <ProjectCard
              previewLink={""}
              githubLink={
                "https://github.com/Atharvakarale/Tour_and_Travel_Management"
              }
              projectName={"Tour and Travel Management"}
              projectDetails={
                "It is a responsive and Mobile friendly static webpage created using pure HTML, CS and jQuery."
              }
              demoImage={tour}
              key={"Marketing Solutions Webpage"}
              skill_img={[
                "https://www.svgrepo.com/show/452088/php.svg",
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
                "https://cdn.worldvectorlogo.com/logos/phpmailer-1.svg",
              ]}
            />
            
          </motion.div>
        </div>
      </MainContainer>
      <motion.div
        initial={{ y: -20, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: ".3", stiffness: "150" }}
        className="component_container"
      ></motion.div>
    </div>
  );
}

export default Projects;
