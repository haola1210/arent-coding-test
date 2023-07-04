import { v4 } from "uuid";

// eslint-disable-next-line @typescript-eslint/naming-convention
export const HealthBlogData = new Array(24).fill(null).map((_, index) => ({
  id: v4(),
  time: "2021.05.17   23:25",
  tags: ["#魚料理", "#和食", "#DHA"],
  imageUrl: `/images/column-${(index % 8) + 1}.jpg`,
  description: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
}));
