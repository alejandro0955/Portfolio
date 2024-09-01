import "./App.css";
import { useState } from "react";
import Skill from "./components/Skill.tsx";
import Project from "./components/Project.tsx";
import SectionHeader from "./components/SectionHeader.tsx";
import CategorySlider from "./components/CategorySlider.tsx";
import Jobs from "./components/Jobs.tsx";
import ContactForm from "./components/ContactForm.tsx";
import Carousel from "./components/Carousel.tsx";

function App() {
  const [isExpertiseToggle, setExpertiseToggle] = useState("Stack");
  let stackLinks = [
    "python.svg",
    "react.svg",
    "javascript.svg",
    "typescript.svg",
    "html5.svg",
    "css.svg",
    "git.svg",
    "vscode.svg",
    "github-dark.svg",
  ];
  let certLinks = ["powerpoint.svg", "excel.svg", "javascript.svg"];
  return (
    <>
      <nav className="navbar">
        <ul>
          <li className="menuItem">
            <a href="#expertise">Expertise</a>
          </li>
          <li className="menuItem">
            <a href="#projects">Projects</a>
          </li>
          <li className="menuItem">
            <a href="#experience">Experience</a>
          </li>
          <li className="menuItem">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <a className="resume"></a>
      </nav>
      <div className="imgOverlay">
        <img src="/bg.jpg" id="blackhole"></img>
        <div className="name">
          <div className="tt">
            <h1>Alejandro Salza</h1>
            <h3>Aspiring Software Engineer and Frontend Developer</h3>
          </div>
          <a href="#expertise" className="downButton">
            <img src="/Button.png"></img>
          </a>
        </div>
      </div>
      <div className="midContainer">
        <div className="sect">
          <SectionHeader header="Expertise" id="expertise" />
          <CategorySlider
            options={["Stack", "Certifications"]}
            onSelect={setExpertiseToggle}
          />
          <div className="skillContainer">
            {isExpertiseToggle === "Stack"
              ? stackLinks.map((stack) => <Skill url={stack} />)
              : null}
            {isExpertiseToggle === "Certifications"
              ? certLinks.map((stack) => <Skill url={stack} />)
              : null}
          </div>
        </div>
        <div className="sect">
          <SectionHeader header="Projects" id="projects" />

          <Project
            project_name="Portfolio"
            project_stack={["React", "HTML", "CSS", "TypeScript"]}
          />
          <Carousel projects={[1, 2, 3, 4, 5]} />
        </div>
        <div className="sect">
          <SectionHeader header="Experience" id="experience" />
          <CategorySlider
            options={["Jobs", "Awards"]}
            onSelect={setExpertiseToggle}
          />
          <Jobs
            name={"Software Testing Intern"}
            duration="June 2022 - Aug 2022"
            logo={"/job.png"}
            company="Summer Youth Internship Program"
            description={
              "Extensively tested an AI platoform for mental health to find bugs and glitches."
            }
            tools={[]}
            last_job={false}
          />
          <Jobs
            name={"Data Science Intern"}
            duration="June 2022 - Aug 2022"
            logo={"/JHS.svg"}
            company="Jackson Memorial Hospital"
            description={
              "Worked in a team to develop a ptyhon solution that allowed a hospital to calcuate the cash flow that came into the hospital"
            }
            tools={["Python", "Javascript", "HTML", "CSS", "SQL"]}
            last_job={true}
          />
        </div>
        <div className="sect">
          <SectionHeader header="Want to get in touch?" id="contact" />
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default App;
