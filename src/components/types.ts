/* eslint-disable @typescript-eslint/naming-convention */
export type LazyImport = Promise<{
  default: () => JSX.Element;
}>;

export enum MEAL_TYPES {
  MORNING = "Morning",
  LUNCH = "Lunch",
  DINNER = "Dinner",
  SNACK = "Snack",
  All = "All",
}
