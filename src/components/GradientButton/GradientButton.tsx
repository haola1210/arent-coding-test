import "./GradientButton.scss";
const GradientButton = (props: { onClick?: any }) => {
  return (
    <div className="gradient-button bg-primary-300-400 jp" {...props}>
      記録をもっと見る
    </div>
  );
};

export default GradientButton;
