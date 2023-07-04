import { type ReactNode } from "react";
import "./Navitem.scss";

type NavitemProps = {
  title: string;
  Component: ReactNode;
};

const Navitem = ({ title, Component }: NavitemProps) => {
  /**
   * The message number will be managed by global state or the Navitem itself (Encapsulation)
   * so we assume that the "お知らせ" has 1 message
   */

  const noMessage = title === "お知らせ" ? 1 : 0;

  return (
    <div className="nav-item">
      <div className="nav-item__icon-group">
        <div className="nav-item__icon">{Component}</div>
        {Boolean(noMessage) && (
          <div className="nav-item__badge en">{noMessage}</div>
        )}
      </div>
      <div className="nav-item__title jp">{title}</div>
    </div>
  );
};

export default Navitem;
