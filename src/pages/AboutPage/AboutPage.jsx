import ActionBox from "../../Components/ActionBox/ActionBox";
import Circle from "../../Components/Circle/Circle";
import MainContainer from "../../Components/MainContainer/MainContainer";
import Navbar from "../../Components/Navbar/Navbar";
import style from "./AboutPage.module.css";
import ContainerTitle from "../../Components/ComponentTitle/ComponentTitle";
import { motion } from "framer-motion";

function AboutPage() {
  return (
    <div>
      <Navbar />
      <Circle bottom={"19rem"} right={"-25rem"} />
      <MainContainer>
        <div className={style.about_component}>
          <ContainerTitle title={"About me"} />
          <div className={style.timeline_container}>
            <h1 className={style.timeline_title}>My Education</h1>
            <div className={style.timeline_box}>
              <div className={`${style.action_container} ${style.left_container}`}>
                <ActionBox
                  isleft={true}
                  timeline={"2019 - 2020"}
                  timeline_title={"High School "}
                  location={"SVPM English Medium School, Malegaon-Baramati"}
                  details={
                    "Completed my High School Degree from State Board with 91.80%."
                  }
                />
              </div>
              <div className={`${style.action_container} ${style.right_container}`}>
                <ActionBox
                  isleft={true}
                  timeline={"2021 - 2022"}
                  timeline_title={"Senior Secondary (10+2)"}
                  location={"SPVN's Junior College, Shardanagar-Baramati"}
                  details={
                    "Completed my Degree from State Board with 90% from SPVN's Junior College, Shardanagar-Baramati"
                  }
                />
              </div>
              <div className= {`${style.action_container} ${style.left_container}`}>
                <ActionBox
                  isleft={true}
                  timeline={"2022 - 2026"}
                  timeline_title={"Bachelors in Computer Science"}
                  location={"Vishwakarma Institute Of Information and Technology, Pune"}
                  details={
                    "Currently Pursuing my Bachelors Degree in Computer Science from Vishwakarma Institute Of Information and Technology"
                  }
                  img={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq25wBcbXkIUAg1yyYvwNMT--QIk76V1QFkI0rIdt5Kw&s"
                  }
                />
              </div>
            </div>
          </div>
          <div className={style.timeline_container}>
            <h1 className={style.timeline_title}>My Experience</h1>
            <div className={style.timeline_box}>
              <div className={`${style.action_container} ${style.left_container}`}>
                <ActionBox
                  isleft={true}
                  timeline={"NOV 2023 - DEC 2023"}
                  timeline_title={"Web Development Intern"}
                  location={"Codesoft ,Pune"}
                  details={
                    " Enhanced web development skills by working with HTML, CSS, JavaScript, and React.js. Developed a portfolio website, a tour website landing page, and a To-Do list project."
 
                  }
                />
              </div>
             
            </div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
}

export default AboutPage;
