import "./EventList.scss";

import EventCard from "../EventCard/EventCard.jsx"

const EventList = () => {

  return (
    <div>
        {/* Notes: 
            - adding T12:00:00Z at the end of date prop corrects the date bug 
            - time prop not consistent throughout but decided to leave it the way it is to match the MockUps*/}
        <EventCard 
            title="Code Horizon" 
            date="2025-01-08T12:00:00Z" 
            time="7:00-9:00 PM" 
            paragraph="Join us for a future-forward summit exploring the next frontiers in AI, quantum computing, and decentralized infrastructure over drinks and light bites."
            />
        <EventCard 
            title="StackFest" 
            date="2025-01-28T12:00:00Z" 
            time="10:00 AM-9:00 PM"
            paragraph="Join us for a high-energy gathering for full-stack developers to code, connect, and collaborate on live build challenges. A full lunch and snacks will be served."
            />
        <EventCard 
            title="GlitchMode Live" 
            date="2025-02-04T12:00:00Z" 
            time="7:00-9:00 PM"
            paragraph="Designers and developers alike will join us for a live experimental tech/art hybrid event celebrating creative coding, generative art, and the beauty of bugs."
            />
        <EventCard 
            title="Sync'd" 
            date="2025-02-08T12:00:00Z" 
            time="9:00 AM-6:00 PM"
            paragraph="An all-day retreat for engineering leaders who want to explore alignment techniques, systems thinking, and cross-org velocity."
            />
        <EventCard 
            title="Node & Beyond" 
            date="2025-03-16T12:00:00Z" 
            time="9:00 AM-5:00 PM"
            paragraph="A one-day microconference where speakers will spend the day charting the evolution of JavaScript, serverless, and the edge ecosystem."
            /> 
    </div>
  );
};

export default EventList;
