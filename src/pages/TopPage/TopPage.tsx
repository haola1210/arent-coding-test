import "./TopPage.scss";
import PlanPercentage from "@components/PlanPercentage";
import BodyRecord from "@components/BodyRecord";
import CommonLayout from "@pages/CommonLayout";
import MealWithFilter from "@components/MealWithFilter";

const TopPage = () => {
  return (
    <CommonLayout>
      <div className="top-page">
        <div className="top-page__first-row">
          <PlanPercentage />
          <div className="top-page__chart">
            <BodyRecord shouldShowActions={false} />
          </div>
        </div>
        <div className="top-page__second-row">
          <MealWithFilter />
        </div>
      </div>
    </CommonLayout>
  );
};

export default TopPage;
