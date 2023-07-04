import "./ExerciseRecord.scss";
import { ExerciseData } from "./mock-data";

const ExerciseRecord = () => {
  return (
    <div className="record-layout">
      <div className="record-layout__header">
        <div className="record-layout__title en">MY EXERCISE</div>
        <div className="record-layout__time en">2021.05.21</div>
      </div>
      <div className="record-layout__body">
        <div className="exercise-container">
          {ExerciseData.map(({ id, calories, description, duration }) => (
            <div key={id} className="exercise-item">
              <div className="exercise-item__header">
                <li className="exercise-item__description jp">{description}</li>
                <div className="exercise-item__duration en">{duration}</div>
              </div>
              <div className="exercise-item__footer en">{calories}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExerciseRecord;
