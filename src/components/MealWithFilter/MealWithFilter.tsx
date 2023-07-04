import "./MealWithFilter.scss";
import FilterWithHexagon from "@components/FilterWithHexagon";
import MealContainer from "@components/MealContainer";
import { MEAL_TYPES } from "@components/types";
import { createContext, useContext, useEffect, useState } from "react";
import { MealData } from "@components/MealContainer";

type DataResponse = {
  data: Array<{
    id: string;
    type: MEAL_TYPES;
    time: string;
    imageUrl: string;
  }>;
  total: number;
};

const size = 8;

const MealContext = createContext<
  | {
      filteredType: MEAL_TYPES;
      setFilteredType: React.Dispatch<React.SetStateAction<MEAL_TYPES>>;
      fetchedData: DataResponse;
      loadMore: () => void;
      shouldDisableLoadMore: boolean;
    }
  | undefined
>(undefined);
export const useMealContext = () => useContext(MealContext);
const MealWithFilter = () => {
  const [filteredType, setFilteredType] = useState(MEAL_TYPES.All);
  const [fetchedData, setFetchedData] = useState<DataResponse>({
    data: [],
    total: 0,
  });

  const fetch = (type: MEAL_TYPES, toIndex: number) => {
    const filteredData =
      type === MEAL_TYPES.All
        ? MealData
        : MealData.filter((i) => i.type === type);

    const next = filteredData.slice(0, toIndex);

    setFetchedData({
      data: next,
      total: filteredData.length,
    });
  };

  useEffect(() => {
    fetch(MEAL_TYPES.All, size);
  }, []);

  useEffect(() => {
    fetch(filteredType, size);
  }, [filteredType]);

  const loadMore = () => {
    fetch(filteredType, fetchedData.data.length + size);
  };

  return (
    <div className="meal-with-filter">
      <MealContext.Provider
        value={{
          filteredType,
          setFilteredType,
          fetchedData,
          loadMore,
          shouldDisableLoadMore: fetchedData.data.length === fetchedData.total,
        }}
      >
        <div className="meal-with-filter__filter">
          <FilterWithHexagon />
        </div>
        <div className="meal-with-filter__list">
          <MealContainer />
        </div>
      </MealContext.Provider>
    </div>
  );
};

export default MealWithFilter;
