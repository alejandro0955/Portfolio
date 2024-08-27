import "./App.css";
import Skill from "./components/Skill.tsx";
import Project from "./components/Project.tsx";
import SectionHeader from "./components/SectionHeader.tsx";
import CategorySlider from "./components/CategorySlider.tsx";
import Jobs from "./components/Jobs.tsx";
import ContactForm from "./components/ContactForm.tsx";
import Carousel from "./components/Carousel.tsx";

function App() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li className="menuItem">
            <a>Expertise</a>
          </li>
          <li className="menuItem">
            <a>Projects</a>
          </li>
          <li className="menuItem">
            <a>Experience</a>
          </li>
          <li className="menuItem">
            <a>Contact</a>
          </li>
        </ul>
        <a className="resume"></a>
      </nav>
      <div className="imgOverlay">
        <img src="src/assets/bg.jpg" id="blackhole"></img>
        <div className="name">
          <div className="tt">
            <h1>Alejandro Salza</h1>
            <h3>Aspiring Software Engineer and Frontend Developer</h3>
          </div>
          <a className="downButton">
            <img src="src/assets/Button.png"></img>
          </a>
        </div>
      </div>
      <div className="midContainer">
        <div className="sect">
          <SectionHeader header="Expertise" />
          <CategorySlider options={["Stack", "Certifications"]} />
          <div className="skillContainer">
            <Skill url={"src/assets/python.svg"} />
            <Skill url={"src/assets/react.svg"} />
            <Skill url={"src/assets/javascript.svg"} />
            <Skill url={"src/assets/html5.svg"} />
            <Skill url={"src/assets/css.svg"} />
            <Skill url={"src/assets/git.svg"} />
            <Skill url={"src/assets/github-light.svg"} />
            <Skill url={"src/assets/vscode.svg"} />
          </div>
        </div>
        <div className="sect">
          <SectionHeader header="Projects" />

          <Project
            project_name="Portfolio"
            project_stack={["React", "HTML", "CSS", "TypeScript"]}
          />
          <Carousel projects={[1, 2, 3, 4, 5]} />
        </div>
        <div className="sect">
          <SectionHeader header="Experience" />
          <CategorySlider options={["Jobs", "Awards"]} />
          <Jobs
            name={"Software Testing Intern"}
            duration="June 2022 - Aug 20222"
            logo={"src/assets/job.png"}
            company="Summer Youth Internship Program"
            description={
              "Extensively tested an AI platoform for mental health to find bugs and glitches."
            }
            tools={[]}
            last_job={false}
          />
          <Jobs
            name={"Data Science Intern"}
            duration="June 2022 - Aug 20222"
            logo={"src/assets/job.png"}
            company="Jackson Memorial Hospital"
            description={
              "Worked in a team to develop a ptyhon solution that allowed a hospital to calcuate the cash flow that came into the hospital"
            }
            tools={["Python", "Javascript", "HTML", "CSS", "SQL"]}
            last_job={true}
          />
        </div>
        <div className="sect">
          <SectionHeader header="Contact" />
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default App;
