import "./SectionHeader.css";

interface Props {
  header: string;
}

function SectionHeader(props: Props) {
  return (
    <>
      <h2 className="section-header">{props.header}</h2>
    </>
  );
}
export default SectionHeader;
