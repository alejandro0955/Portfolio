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
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2ab77ebf-9250-4817-8d61-d8bd75f233de/d551312-cdbc5768-2705-4286-ab71-7b36b667bf6e.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi8yYWI3N2ViZi05MjUwLTQ4MTctOGQ2MS1kOGJkNzVmMjMzZGUvZDU1MTMxMi1jZGJjNTc2OC0yNzA1LTQyODYtYWI3MS03YjM2YjY2N2JmNmUuZ2lmIn1dXX0.w-X4i8dT2KyEZ8tqWmOQRZf3_AAdwN_FEHGzxu9S5Po"
          id="blackhole"
        ></img>
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
            <Skill url={"src/assets/python.png"} />
            <Skill url={"src/assets/react.png"} />
            <Skill url={"src/assets/javascript.png"} />
            <Skill url={"src/assets/html.png"} />
            <Skill url={"src/assets/css.png"} />
            <Skill url={"src/assets/git.png"} />
            <Skill url={"src/assets/github.png"} />
            <Skill url={"src/assets/vscode.png"} />
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
              "Tested some softwareTested some softwareTested some softwareTested some software"
            }
            tools={["React", "Java", "Python"]}
            last_job={false}
          />
          <Jobs
            name={"Data Science Intern"}
            duration="June 2022 - Aug 20222"
            logo={"src/assets/job.png"}
            company="Jackson Memorial Hospital"
            description={"none"}
            tools={["none"]}
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
