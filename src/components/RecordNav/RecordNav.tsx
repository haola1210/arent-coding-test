import Record from "@components/Record";
import "./RecordNav.scss";

const RecordItemDataList = [
  {
    title: "Body Record",
    subTitle: "自分のカラダの記録",
    imageUrl: "/images/MyRecommend-1.jpg",
  },
  {
    title: "MY EXERCISE",
    subTitle: "自分の運動の記録",
    imageUrl: "/images/MyRecommend-2.jpg",
  },
  {
    title: "MY DIARY",
    subTitle: "自分の日記",
    imageUrl: "/images/MyRecommend-3.jpg",
  },
];

const RecordNav = () => {
  return (
    <div className="record-nav">
      {RecordItemDataList.map(({ title, subTitle, imageUrl }) => (
        <Record
          key={title}
          title={title}
          subTitle={subTitle}
          backgroundUrl={imageUrl}
        />
      ))}
    </div>
  );
};

export default RecordNav;
