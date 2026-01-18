// Self Notes: Add dynamic URL for event attendee List

import "./EventList.scss";

import EventCard from "../EventCard/EventCard.jsx"
import List from "../List/List.jsx";
import ListItem from "../List/ListItem.jsx";

import PageHeader from "../PageHeader/PageHeader.jsx";
import AttendingCard from "../AttendingCard/AttendingCard.jsx";
import { useNavigate } from "react-router-dom";

const EventList = ({events}) => {


  return (
    // <div className="event-list">

    <>
    
      <PageHeader className="page-header-title" title="Events"/>
      <div className="event-list">

          
          {/* Notes: 
              - adding T12:00:00Z at the end of date prop corrects the date bug 
              - time prop not consistent throughout but decided to leave it the way it is to match the MockUps*/}
          <List className="event-list__containers">
            {events.map((event) => (
              <ListItem key={event.id} className="event-list__item">
                <EventCard
                  id={event.id}
                  title={event.title}
                  date={`${event.date}T12:00:00Z`}
                  time={event.time}
                  description={event.description}
                />
              </ListItem>
            ))}
          </List>

          
          
          {/* <EventCard className="event-list__card"
              title="Code Horizon" 
              date="2025-01-08T12:00:00Z" 
              time="7:00-9:00 PM" 
              paragraph="Join us for a future-forward summit exploring the next frontiers in AI, quantum computing, and decentralized infrastructure over drinks and light bites."
              />
          <EventCard className="event-list__card"
              title="StackFest" 
              date="2025-01-28T12:00:00Z" 
              time="10:00 AM-9:00 PM"
              paragraph="Join us for a high-energy gathering for full-stack developers to code, connect, and collaborate on live build challenges. A full lunch and snacks will be served."
              />
          <EventCard className="event-list__card"
              title="GlitchMode Live" 
              date="2025-02-04T12:00:00Z" 
              time="7:00-9:00 PM"
              paragraph="Designers and developers alike will join us for a live experimental tech/art hybrid event celebrating creative coding, generative art, and the beauty of bugs."
              />
          <EventCard className="event-list__card"
              title="Sync'd" 
              date="2025-02-08T12:00:00Z" 
              time="9:00 AM-6:00 PM"
              paragraph="An all-day retreat for engineering leaders who want to explore alignment techniques, systems thinking, and cross-org velocity."
              />
          <EventCard className="event-list__card"
              title="Node & Beyond" 
              date="2025-03-16T12:00:00Z" 
              time="9:00 AM-5:00 PM"
              paragraph="A one-day microconference where speakers will spend the day charting the evolution of JavaScript, serverless, and the edge ecosystem."
              />  */}
      </div>
                <div className="attending-banner">
            <AttendingCard 
              iconName="calendar"
              cardTitle="Attending an event?"
              description="Stay organized and in the loop. Check your upcoming event registrations and view schedules, updates, and important info. Everything you need to know is all in one place."
              buttonText="View your events"

            />
          </div>
    </>
  );
};

export default EventList;
