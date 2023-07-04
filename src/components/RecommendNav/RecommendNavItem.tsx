import "./RecommendNavItem.scss";

type RecommendNavItemProps = {
  title: string;
  subTitle: string;
};

const RecommendNavItem = ({ title, subTitle }: RecommendNavItemProps) => {
  return (
    <div className="recommend-nav-item">
      <div className="recommend-nav-item__title en">{title}</div>
      <div className="recommend-nav-item__break-line"></div>
      <div className="recommend-nav-item__sub-title jp">{subTitle}</div>
    </div>
  );
};

export default RecommendNavItem;
