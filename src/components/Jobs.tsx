import "./Jobs.css";

interface Props {
  name: string;
  duration: string;
  logo: string;
  company: string;
  description: string;
  tools: string[];
  last_job: boolean;
}

function Jobs(props: Props) {
  return (
    <>
      <div className="job-container">
        <div className="job-date">
          <p>{props.duration}</p>
        </div>
        <div className="job-spacer-logo-container">
          <div className="line-spacer">
            {props.last_job === false ? null : (
              <div className="job-spacer"></div>
            )}
          </div>
          <div className="job-logo">
            <img id="job-logo" src={props.logo}></img>
          </div>
          <div className="line-spacer">
            {props.last_job === true ? null : (
              <div className="job-spacer"></div>
            )}
          </div>
        </div>

        <div id="ws">
          <div className="job-information">
            <h3>{props.name}</h3>
            <p>{props.company}</p>
          </div>
          <div className="job-description">
            <p>{props.description}</p>
            {props.tools.map((tool) => (
              <div className="tab">{tool}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="job-spacer-space">
        <div className="job-spacer-left"></div>
        <div className="job-spacer-line">
          {props.last_job === true ? null : <div className="job-spacer"></div>}
        </div>
        <div className="job-spacer-right"></div>
      </div>
    </>
  );
}

export default Jobs;
