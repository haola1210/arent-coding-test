import { Link } from "react-router-dom";
import "./ScrollUpButton.scss";
import CircleArrowUp from "@assets/circle-arrow-up.svg";

const ScrollUpButton = () => {
  return (
    <a href="#">
      <CircleArrowUp />
    </a>
  );
};

export default ScrollUpButton;
