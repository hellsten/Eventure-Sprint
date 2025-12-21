import "./EventCard.scss";

import EventGraphic from "../EventGraphic/EventGraphic";

const EventCard = (props) => {

//console.log(props.date);

/* DATE CONVERSIONING FROM PROP - JH */

const d = new Date(props.date);

//converting date to name of weekday
const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
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


  return (
    <section>
        <div>
            <EventGraphic date={props.date} />
        </div>
        <div>
            <h1>{props.title}</h1>
            <h2>{dayOfWeekName}, {monthName} {dayOfMonth}, {year} | {props.time}</h2>
            <p>{props.paragraph}</p>
        </div> 
    </section>
  );
};

export default EventCard;
