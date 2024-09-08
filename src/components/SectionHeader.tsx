import "./SectionHeader.css";

interface Props {
  header: string;
  id: string;
}

function SectionHeader(props: Props) {
  return (
    <>
      <div className="section-container">
        <h2 className="section-header" id={props.id}>
          {props.header}
        </h2>
      </div>
    </>
  );
}
export default SectionHeader;
