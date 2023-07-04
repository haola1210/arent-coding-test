import "./ColumnPage.scss";
import CommonLayout from "@pages/CommonLayout";
import RecommendNav from "@components/RecommendNav";
import HealthBlogContainer from "@components/HealthBlogContainer/HealthBlogContainer";

const ColumnPage = () => {
  return (
    <CommonLayout>
      <div className="column-page">
        <RecommendNav />
        <HealthBlogContainer />
      </div>
    </CommonLayout>
  );
};

export default ColumnPage;
