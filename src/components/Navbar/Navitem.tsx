import { type ReactNode } from "react";
import "./Navitem.scss";
import { Link } from "react-router-dom";

type NavitemProps = {
  title: string;
  Component: ReactNode;
  to?: string;
};

const Navitem = ({ title, Component, to }: NavitemProps) => {
  /**
   * The message number will be managed by global state or the Navitem itself (Encapsulation)
   * so we assume that the "お知らせ" has 1 message
   */

  const noMessage = title === "お知らせ" ? 1 : 0;

  return (
    <div className="nav-item">
      <Link to={to ?? "#"} className="nav-item__icon-group">
        <div className="nav-item__icon">{Component}</div>
        {Boolean(noMessage) && (
          <div className="nav-item__badge en">{noMessage}</div>
        )}
      </Link>
      <Link to={to ?? "#"} className="nav-item__title jp">
        {title}
      </Link>
    </div>
  );
};

export default Navitem;
