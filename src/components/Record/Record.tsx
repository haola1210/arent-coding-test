import "./Record.scss";

type RecordProps = {
  title: string;
  subTitle: string;
  backgroundUrl: string;
};

const Record = ({ title, subTitle, backgroundUrl }: RecordProps) => {
  return (
    <div className="record">
      <div
        className="record__bg"
        style={{ backgroundImage: `url(${backgroundUrl})` }}
      ></div>
      <div className="record__float">
        <div className="record__title en">{title}</div>
        <div className="record__sub-title jp">{subTitle}</div>
      </div>
    </div>
  );
};

export default Record;
