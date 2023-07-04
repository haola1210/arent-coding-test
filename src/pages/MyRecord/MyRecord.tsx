import "./MyRecord.scss";
import CommonLayout from "@pages/CommonLayout";
import RecordNav from "@components/RecordNav";
import { BodeRecordContainer } from "@components/BodyRecord";
import ExerciseRecord from "@components/ExerciseRecord/ExerciseRecord";
import DiaryContainer from "@components/DiaryContainer/DiaryContainer";

const MyRecord = () => {
  return (
    <CommonLayout>
      <div className="my-record-page">
        <RecordNav />
        <BodeRecordContainer />
        <ExerciseRecord />
        <DiaryContainer />
      </div>
    </CommonLayout>
  );
};

export default MyRecord;
