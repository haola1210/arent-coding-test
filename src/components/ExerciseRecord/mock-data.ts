import { v4 } from "uuid";

// eslint-disable-next-line @typescript-eslint/naming-convention
export const ExerciseData = new Array(32).fill(null).map(() => ({
  id: v4(),
  calories: "26kcal",
  description: "家事全般（立位・軽い）",
  duration: "10 min",
}));
