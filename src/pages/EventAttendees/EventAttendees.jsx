import { useParams, useNavigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader/PageHeader.jsx";
import Typography from "../../components/Typography/Typography.jsx";
import Button from "../../components/Button/Button.jsx";
import List from "../../components/List/List.jsx";
import ListItem from "../../components/List/ListItem.jsx";
import Attendee from "../../components/Attendee/Attendee.jsx";
import { formatDate } from "../../utils/date.js";
import "./EventAttendees.scss";

const EventAttendees = ({ attendees, events }) => {
  const { id } = useParams();
  const event = events.find((event) => event.id === id);

  
  // Recall: 
  //     '/' goes to home/LandingPage 
  //     'registration/:id' goes to SignupForm
  //     'RSVP/:id' goes to EventAttendees
  //     'list' goes to ManageEvents
  let navigate = useNavigate();
  function handleClickHome() {
      navigate(`/`);
  }

  return (
    <div>
      <PageHeader
        title="Event Attendees"
        subtitle={
          <>
            <div>{event?.title}</div> <div>{formatDate(event?.date)}</div>
          </>
        }
      />

      <div className="attendees-wrapper">
        <Button variant="secondary" isLink={true} onClick={handleClickHome}>
          Back
        </Button>
        <List className="attendees-list">
          {attendees
            .filter((attendee) => attendee.attendingEvents.includes(id))
            .map((attendee) => (
              <ListItem key={attendee.id} className="attendees-list__item">
                <Attendee attendee={attendee} />
              </ListItem>
            ))}
        </List>
      </div>
    </div>
  );
};

export default EventAttendees;
