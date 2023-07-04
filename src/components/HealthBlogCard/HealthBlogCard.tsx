import MealItem from "@components/MealItem";
import "./HealthBlogCard.scss";

type HealthBlogCardProps = {
  imageUrl: string;
  time: string;
  description: string;
  tags: string[];
};

const HealthBlogCard = ({
  imageUrl,
  time,
  description,
  tags,
}: HealthBlogCardProps) => {
  return (
    <div className="health-card">
      <div className="health-card__header">
        <MealItem time={time} imageUrl={imageUrl} />
      </div>
      <div className="health-card__body jp">{description}</div>
      <div className="health-card__footer jp">
        {tags.map((tag) => (
          <div key={tag} className="health-card__tag">
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthBlogCard;
