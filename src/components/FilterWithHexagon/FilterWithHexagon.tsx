import { Suspense, lazy } from "react";
import "./FilterWithHexagon.scss";
import { MEAL_TYPES, type LazyImport } from "@components/types";
import HexagonButton from "./HexagonButton";

const HexagonItemDataList = [
  {
    title: "Morning",
    iconName: "icon-knife",
    type: MEAL_TYPES.MORNING,
  },
  {
    title: "Lunch",
    iconName: "icon-knife",
    type: MEAL_TYPES.LUNCH,
  },
  {
    title: "Dinner",
    iconName: "icon-knife",
    type: MEAL_TYPES.DINNER,
  },
  {
    title: "Snack",
    iconName: "icon-cup",
    type: MEAL_TYPES.SNACK,
  },
];

const FilterWithHexagon = () => {
  return (
    <div className="filter-with-hexagon">
      <Suspense fallback={<div>Loading...</div>}>
        {HexagonItemDataList.map(({ title, iconName, type }) => {
          const Component = lazy(
            async () => import(`../../assets/${iconName}.svg`) as LazyImport
          );

          return (
            <HexagonButton
              key={title}
              title={title}
              Component={<Component />}
              type={type}
            />
          );
        })}
      </Suspense>
    </div>
  );
};

export default FilterWithHexagon;
