import "./SectionHeader.css";

interface Props {
  header: string;
  id: string;
}

function SectionHeader(props: Props) {
  return (
    <>
      <h2 className="section-header" id={props.id}>
        {props.header}
      </h2>
    </>
  );
}
export default SectionHeader;
