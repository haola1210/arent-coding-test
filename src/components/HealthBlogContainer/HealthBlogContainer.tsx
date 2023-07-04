import { HealthBlogData } from "./mock-data";
import HealthBlogCard from "@components/HealthBlogCard";
import GradientButton from "@components/GradientButton";
import useFetchData from "@hooks/useFetchData";

const size = 8;

const HealthBlogContainer = () => {
  const { fetchedData, shouldDisableLoadMore, fetchMore } = useFetchData<
    typeof HealthBlogData
  >(HealthBlogData, size);

  return (
    <div className="layout-list">
      <div className="layout-list__container" style={{ gap: "8px" }}>
        {fetchedData.data.map(({ tags, description, time, id, imageUrl }) => (
          <HealthBlogCard
            key={id}
            time={time}
            tags={tags}
            imageUrl={imageUrl}
            description={description}
          />
        ))}
      </div>
      <div className="layout-list__action">
        {!shouldDisableLoadMore && (
          <GradientButton
            onClick={() => {
              fetchMore(fetchedData.data.length + size);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default HealthBlogContainer;
