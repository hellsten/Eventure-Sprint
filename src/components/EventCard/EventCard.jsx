import "./EventCard.scss";

import EventGraphic from "../EventGraphic/EventGraphic.jsx";
import Button from "../Button/Button.jsx";
import SecondaryButton from "../SecondaryButton/SecondaryButton.jsx"

import { useNavigate } from 'react-router-dom';

const EventCard = (props) => {

//console.log(props.date);

/* DATE CONVERSIONING FROM PROP - JH */

const d = new Date(props.date);

//converting date to name of weekday
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let dayOfWeekName = weekdays[d.getDay()];
//console.log(dayOfWeekName); // ex "Friday"

//converting date to name of month
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let monthName = months[d.getMonth()];
//console.log(monthName); // ex "January"

//getting day of month
const dayOfMonth = d.getDate();
//console.log(dayOfMonth); // ex "08"

//getting year
const year = d.getFullYear();
//console.log(year); // ex "2025"

let navigate = useNavigate();
function handleClickRegistration() {
    navigate('/registration');
}

function handleClickRSVP(){
    navigate('/RSVP');
}


  return (
    <section className="event-card">
        <div className="event-card__graphic">
            <EventGraphic date={props.date} />
        </div>
        <div className="event-card__info">
            <div className="event-card__data">
                <h1 className="event-card__data-title">{props.title}</h1>
                <h2 className="event-card__data-time">{dayOfWeekName}, {monthName} {dayOfMonth}, {year} | {props.time}</h2>
                <p className="event-card__data-paragraph">{props.description}</p>
            </div> 
            <div className="event-card__buttons">
                <SecondaryButton className="event-card__button" onClick={handleClickRSVP}>Learn more</SecondaryButton>
                <Button className="event-card__button" onClick={handleClickRegistration}>Register now</Button>
            </div>
        </div>
    </section>
  );
};

export default EventCard;
