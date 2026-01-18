import Icon from "../Icon/Icon.jsx";
import SecondaryButton from "../SecondaryButton/SecondaryButton.jsx";
import Typography from "../Typography/Typography.jsx";
import "./AttendingCard.scss";
import { useNavigate } from "react-router-dom";

const AttendingCard = ({
  iconName,
  cardTitle,
  buttonText,
  description,
  
  className = "",
  buttonLink,
  children,
}) => {
        let navigate = useNavigate();
    function handleClickList() {
      navigate('/list');
    }
  return (
    <article className={`attending-card ${className}`.trim()}>
      <Icon className="attending-card__icon" name={iconName} />
      <Typography variant="h3" className="attending-card__title">
        {cardTitle}
      </Typography>
      <p className="attending-card__description">{description}</p>
      <SecondaryButton
        className="attending-card__button"
        type="button"
        variant="secondary"
        isLink={true}
        to={buttonLink}
        onClick={handleClickList}
      >
        {buttonText}
      </SecondaryButton>
      {children}
    </article>
  );
};

export default AttendingCard;
