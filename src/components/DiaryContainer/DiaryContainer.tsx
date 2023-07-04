import GradientButton from "@components/GradientButton";
import DiaryItem from "./DiaryItem";
import { v4 } from "uuid";
import useFetchData from "@hooks/useFetchData";

const DiaryData = new Array(32).fill(null).map(() => ({
  id: v4(),
  time: "2021.05.21   23:25",
  content:
    "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
}));

const size = 8;

const DiaryContainer = () => {
  const { fetchedData, shouldDisableLoadMore, fetchMore } = useFetchData<
    typeof DiaryData
  >(DiaryData, size);

  return (
    <div className="layout-list">
      <div className="layout-list__container ">
        {fetchedData.data.map(({ content, time, id }) => (
          <DiaryItem key={id} time={time} content={content} />
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

export default DiaryContainer;
