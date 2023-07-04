import { useEffect, useState } from "react";

export default function useFetchData<T extends any[]>(
  dataset: T,
  size: number
) {
  const [fetchedData, setFetchedData] = useState<{
    data: T;
    total: number;
  }>({
    data: [] as unknown as T,
    total: 0,
  });

  const fetchMore = (toIndex: number) => {
    const next = dataset.slice(0, toIndex) as T;

    setFetchedData({
      data: next,
      total: dataset.length,
    });
  };

  useEffect(() => {
    fetchMore(size);
  }, []);

  const shouldDisableLoadMore = fetchedData.total === fetchedData.data.length;

  return {
    shouldDisableLoadMore,
    fetchedData,
    fetchMore,
  };
}
