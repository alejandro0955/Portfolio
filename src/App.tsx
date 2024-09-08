import "./App.css";
import { useState } from "react";
import Skill from "./components/Skill.tsx";
import Project from "./components/Project.tsx";
import SectionHeader from "./components/SectionHeader.tsx";
import CategorySlider from "./components/CategorySlider.tsx";
import Jobs from "./components/Jobs.tsx";
import Award from "./components/Awards.tsx";
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

  const [isExperienceToggle, setExperienceToggle] = useState("Jobs");
  let Job = ["Software Testing Intern", "Data Science Intern"];
  let Duration = ["2022 - 2023", "2021 - 2022"];
  let Logo = ["job.png", "JHS.svg"];
  let Company = ["Overtown Youth Center", "Jackson Memorial Hospital"];
  let Description = [
    "Tested an Artificial Intelligence Chat Bot that helps people with their mental health and recognized issues and errors within the program to later provide useful and concise feedback",
    "Developed a python model able to predict the future cashflow of the hospital and used HTML & CSS to display the information produced by the Python Model.",
  ];
  let Tools = [[], ["Python", "SQL", "HTML", "CSS", "JavaScript"]];
  let Awards = [
    "FBLA Tech & Computer Science Case Competition",
    "NASA Space Apps Hackathon Competition",
    "ICPC Programming competition",
    "FBLA Spreadsheets Applications District Competition",
    "FBLA Spreadsheets Applications State Competition",
    "FBLA Spreadsheets Applications District Competition",
  ];
  let Years = ["2024", "2024", "2023", "2023", "2023", "2022", "2022"];
  let Places = ["1st", "3rd", "2nd", "1st", "1st", "1st"];
  let lastJob = [false, true];
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
            onSelect={setExperienceToggle}
          />

          {isExperienceToggle === "Jobs"
            ? Job.map((Job, i) => (
                <Jobs
                  name={Job}
                  duration={Duration[i]}
                  logo={Logo[i]}
                  company={Company[i]}
                  description={Description[i]}
                  tools={Tools[i]}
                  last_job={lastJob[i]}
                />
              ))
            : null}

          {isExperienceToggle === "Awards"
            ? Awards.map((award, i) => (
                <Award place={Places[i]} competition={award} year={Years[i]} />
              ))
            : null}
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
