import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import PageFooter from "./components/PageFooter/PageFooter.jsx";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import SignupForm from "./pages/SignupForm/SignupForm.jsx";
import EventAttendees from "./pages/EventAttendees/EventAttendees.jsx";
import ManageEvents from "./pages/ManageEvents/ManageEvents.jsx";
import ComponentDocs from "./pages/ComponentDocs/ComponentDocs.jsx"

import "./App.scss";

const App = () => {

  // Notes: 
  //   - adding T12:00:00Z at the end of date prop corrects the date bug 
  //   - time prop not consistent throughout but decided to leave it the way it is to match the MockUps*
  // const eventData = [
  //     {
  //       "id": "001",
  //       "title": "Code Horizon", 
  //       "date": "2025-01-08T12:00:00Z",
  //       "time": "7:00-9:00 PM",
  //       "description": "Join us for a future-forward summit exploring the next frontiers in AI, quantum computing, and decentralized infrastructure over drinks and light bites."
  //     },
  //     {
  //       "id": "002",
  //       "title": "StackFest", 
  //       "date": "2025-01-28T12:00:00Z",
  //       "time": "10:00 AM-9:00 PM",
  //       "description": "Join us for a high-energy gathering for full-stack developers to code, connect, and collaborate on live build challenges. A full lunch and snacks will be served."
  //     },
  //     {
  //       "id": "003",
  //       "title": "GlitchMode Live", 
  //       "date": "2025-02-04T12:00:00Z",
  //       "time": "7:00-9:00 PM",
  //       "description": "Designers and developers alike will join us for a live experimental tech/art hybrid event celebrating creative coding, generative art, and the beauty of bugs."
  //     },
  //     {
  //       "id": "004",
  //       "title": "Sync'd", 
  //       "date": "2025-02-08T12:00:00Z",
  //       "time": "9:00 AM-6:00 PM",
  //       "description": "An all-day retreat for engineering leaders who want to explore alignment techniques, systems thinking, and cross-org velocity."
  //     },
  //     {
  //       "id": "005",
  //       "title": "Node & Beyond", 
  //       "date": "2025-03-16T12:00:00Z",
  //       "time": "9:00 AM-5:00 PM",
  //       "description": "A one-day microconference where speakers will spend the day charting the evolution of JavaScript, serverless, and the edge ecosystem."
  //     }
  //   ]

  //Creating a useState to register an api key
  const [user, setUser] = useState(null);
  //Fetching the event data from the api
  const [eventData, setEventData] = useState([]);
  //Gettign the attendee information from the api
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get("https://unit-3-api-6b6268be0363.herokuapp.com/register");
      setUser(response.data);
      // console.log(response.data);

      const eventsResponse = await axios.get(
        `https://unit-3-api-6b6268be0363.herokuapp.com/events?api_key=${response.data}`
      );
      setEventData(eventsResponse.data);
      // console.log(eventsResponse);

      const attendeesResponse = await axios.get(
        `https://unit-3-api-6b6268be0363.herokuapp.com/attendees?api_key=${response.data}`
      );
      setAttendees(attendeesResponse.data);
      // console.log(attendeesResponse);
    };
    fetchUser();
  }, []);
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage events={eventData}/>} />
          {/* Re: SignupForm, styling doesn't match perfectly. Changed some text to match. When response is submitted, does not say confirmation */}
          <Route path="registration/:id" element={<SignupForm events={eventData} attendees={attendees} setAttendees={setAttendees} user={user}/>} />
          <Route path="RSVP/:id" element={<EventAttendees events={eventData} attendees={attendees}/>} />
          <Route path="list" element={<ManageEvents events={eventData} attendees={attendees} onUpdateAttendees={setAttendees}/>} />
        </Routes>

        <PageFooter />
        {/* <ComponentDocs /> */}
      </BrowserRouter> 
    </>
  );
};

export default App;
