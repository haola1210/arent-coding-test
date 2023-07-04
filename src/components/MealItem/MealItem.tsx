import "./MealItem.scss";

type MealItemProps = {
  time: string;
  imageUrl: string;
};

const MealItem = ({ time, imageUrl }: MealItemProps) => {
  return (
    <div className="meal-item" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="meal-item__time">{time}</div>
    </div>
  );
};

export default MealItem;
