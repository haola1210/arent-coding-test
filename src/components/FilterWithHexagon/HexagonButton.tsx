import { type ReactNode } from "react";
import "./HexagonButton.scss";
import HexagonImage from "@assets/hexagon.svg";
import { MEAL_TYPES } from "@components/types";
import { useMealContext } from "@components/MealWithFilter";

type HexagonButtonProps = {
  title: string;
  Component: ReactNode;
  type: MEAL_TYPES;
};

const HexagonButton = ({ title, Component, type }: HexagonButtonProps) => {
  const ctx = useMealContext();

  const onClick = () => {
    if (ctx) {
      if (ctx.filteredType !== type) {
        ctx.setFilteredType(type);
        return;
      }

      ctx.setFilteredType(MEAL_TYPES.All);
    }
  };

  return (
    <div className="hexagon-button" onClick={onClick}>
      <div className="hexagon-button__bg">
        <HexagonImage />
      </div>
      <div className="hexagon-button__content">
        <div className="hexagon-button__icon">{Component}</div>
        <div className="hexagon-button__title en">{title}</div>
      </div>
    </div>
  );
};

export default HexagonButton;
