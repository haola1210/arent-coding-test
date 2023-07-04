import { Suspense, lazy } from "react";
import Navitem from "./Navitem";
import "./Navbar.scss";
import MenuIcon from "@assets/icon-menu.svg";
import { type LazyImport } from "@components/types";

const NavItemDataList = [
  {
    title: "自分の記録",
    iconName: "icon-memo",
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
        {NavItemDataList.map(({ title, iconName }) => {
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
            ></Navitem>
          );
        })}
      </Suspense>
      <MenuIcon />
    </div>
  );
};

export default Navbar;
