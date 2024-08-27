import "./Skill.css";

interface Props {
  url: string;
}

function skill(props: Props) {
  return (
    <>
      <div className="circle">
        <img src={props.url}></img>
      </div>
    </>
  );
}

export default skill;
