import { Link } from "react-router-dom";
import "./Menu.scss";

const MenuData = [
  {
    title: "自分の記録",
    to: "/record",
  },
  {
    title: "体重グラフ",
  },
  {
    title: "目標",
  },
  {
    title: "選択中のコース",
  },
  {
    title: "コラム一覧",
    to: "/column",
  },
  {
    title: "設定",
  },
];

const Menu = () => {
  return (
    <div className="menu-container">
      {MenuData.map(({ title, to }) => (
        <Link to={to ?? "#"} key={title} className="menu-item jp">
          {title}
        </Link>
      ))}
    </div>
  );
};

export default Menu;
