import { Suspense, lazy } from "react";
import Navitem from "./Navitem";
import "./Navbar.scss";
import MenuIcon from "@assets/icon-menu.svg";
import CloseIcon from "@assets/icon-close.svg";
import { type LazyImport } from "@components/types";
import Popup from "reactjs-popup";
import Menu from "@components/Menu";

const NavItemDataList = [
  {
    title: "自分の記録",
    iconName: "icon-memo",
    to: "/record",
  },
  {
    title: "チャレンジ",
    iconName: "icon-challenge",
  },
  {
    title: "お知らせ",
    iconName: "icon-info",
  },
];

const Navbar = () => {
  return (
    <div className="nav-bar">
      <Suspense fallback={<div>loading...</div>}>
        {NavItemDataList.map(({ title, iconName, to }) => {
          /**
           * Refer https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations
           * because of the limitation so I can not use the alias import (@assets/...)
           */
          const Component = lazy(
            async () => import(`../../assets/${iconName}.svg`) as LazyImport
          );
          return (
            <Navitem
              key={title}
              title={title}
              Component={<Component />}
              to={to}
            ></Navitem>
          );
        })}
      </Suspense>
      <MenuController />
    </div>
  );
};

const MenuController = () => {
  return (
    <Popup
      trigger={(isOpen) => <span>{isOpen ? <CloseIcon /> : <MenuIcon />}</span>}
      position="right center"
      arrow={false}
    >
      <Menu />
    </Popup>
  );
};

export default Navbar;
