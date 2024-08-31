import "./Project.css";

interface Props {
  // project_img_url: string;
  project_name: string;
  project_stack: string[];
}

function Project(props: Props) {
  return (
    <>
      <div className="project">
        <div className="proj-div-header">
          {/* <button id="seemore-button">See More</button> */}
        </div>
        <div className="proj-spacer"></div>
        {/* <div className="separator"></div> */}
        <div className="proj-description">
          <h3>{props.project_name}</h3>
          <ul>
            {props.project_stack.map((tech) => (
              <li className="tab">{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Project;
