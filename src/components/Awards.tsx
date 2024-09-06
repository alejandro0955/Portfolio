import "./Awards.css";

interface Props {
  place: string;
  competition: string;
  year: string;
}

function Award(props: Props) {
  return (
    <>
      <div className="award-container">
        <div id={"x" + props.place} className="place-container">
          {/* <img src={props.place + ".svg"}></img> */}
          <h3>{props.place}</h3>
        </div>
        <div className="award-body">
          <h3>{props.competition}</h3>
        </div>
        <div className="year-container">{props.year}</div>
      </div>
    </>
  );
}

export default Award;
