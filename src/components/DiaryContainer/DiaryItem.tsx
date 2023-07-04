import "./DiaryItem.scss";

type DiaryItemProps = {
  time: string;
  content: string;
};

const DiaryItem = ({ time, content }: DiaryItemProps) => {
  return (
    <div className="diary-item">
      <div className="diary-item__time en">{time}</div>
      <div className="diary-item__content jp">{content}</div>
    </div>
  );
};

export default DiaryItem;
