import GradientButton from "@components/GradientButton";
import MealItem from "@components/MealItem";
import { useMealContext } from "@components/MealWithFilter";

const MealContainer = () => {
  const ctx = useMealContext();
  const data = ctx?.fetchedData.data ?? [];

  return (
    <div className="layout-list">
      <div className="layout-list__container" style={{ gap: "8px" }}>
        {data.length &&
          data.map(({ type, time, id, imageUrl }) => (
            <MealItem time={`${time}.${type}`} imageUrl={imageUrl} key={id} />
          ))}
      </div>
      <div className="layout-list__action">
        {!ctx?.shouldDisableLoadMore && (
          <GradientButton onClick={() => ctx?.loadMore()} />
        )}
      </div>
    </div>
  );
};

export default MealContainer;
