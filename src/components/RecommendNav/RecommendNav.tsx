import "./RecommendNav.scss";
import RecommendNavItem from "./RecommendNavItem";

const RecommendNavItemDataList = [
  {
    title: "RECOMMENDED COLUMN",
    subTitle: "オススメ",
  },
  {
    title: "RECOMMENDED DIET",
    subTitle: "ダイエット",
  },
  {
    title: "RECOMMENDED BEAUTY",
    subTitle: "美容",
  },
  {
    title: "RECOMMENDED HEALTH",
    subTitle: "健康",
  },
];

const RecommendNav = () => {
  return (
    <div className="recommend-nav">
      {RecommendNavItemDataList.map(({ title, subTitle }) => (
        <RecommendNavItem key={title} title={title} subTitle={subTitle} />
      ))}
    </div>
  );
};

export default RecommendNav;
