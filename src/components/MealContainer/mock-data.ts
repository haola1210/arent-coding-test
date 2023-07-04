import { MEAL_TYPES } from "@components/types";
import { v4 } from "uuid";

// eslint-disable-next-line @typescript-eslint/naming-convention
export const MealData = [
  {
    id: v4(),
    type: MEAL_TYPES.MORNING,
    time: "05.21",
    imageUrl: "images/m01.jpg",
  },
  {
    id: v4(),
    type: MEAL_TYPES.LUNCH,
    time: "05.21",
    imageUrl: "images/l03.jpg",
  },
  {
    id: v4(),
    type: MEAL_TYPES.DINNER,
    time: "05.21",
    imageUrl: "images/d01.jpg",
  },
  {
    id: v4(),
    type: MEAL_TYPES.SNACK,
    time: "05.21",
    imageUrl: "images/l01.jpg",
  },
  {
    id: v4(),
    type: MEAL_TYPES.MORNING,
    time: "05.20",
    imageUrl: "images/m02.jpg",
  },
  {
    id: v4(),
    type: MEAL_TYPES.LUNCH,
    time: "05.20",
    imageUrl: "images/l02.jpg",
  },
  {
    id: v4(),
    type: MEAL_TYPES.DINNER,
    time: "05.20",
    imageUrl: "images/d02.jpg",
  },
  {
    id: v4(),
    type: MEAL_TYPES.SNACK,
    time: "05.20",
    imageUrl: "images/s01.jpg",
  },
  {
    id: v4(),
    type: MEAL_TYPES.MORNING,
    time: "05.19",
    imageUrl: "images/m03.jpg",
  },
  {
    id: v4(),
    type: MEAL_TYPES.LUNCH,
    time: "05.19",
    imageUrl: "images/l03.jpg",
  },
  {
    id: v4(),
    type: MEAL_TYPES.DINNER,
    time: "05.19",
    imageUrl: "images/l01.jpg",
  },
  {
    id: v4(),
    type: MEAL_TYPES.SNACK,
    time: "05.19",
    imageUrl: "images/s01.jpg",
  },
];
