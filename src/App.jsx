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

  //Creating a useState to register an api key
  const [user, setUser] = useState(null);
  //Fetching the event data from the api
  const [eventData, setEventData] = useState([]);
  //Gettign the attendee information from the api
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      // const response = await axios.get("https://unit-3-api-6b6268be0363.herokuapp.com/register");
      // setUser(response.data);
      // console.log(response.data);

      // const eventsResponse = await axios.get(
      //   `https://unit-3-api-6b6268be0363.herokuapp.com/events?api_key=${response.data}`
      // );
      // setEventData(eventsResponse.data);
      // console.log(eventsResponse);

      // const attendeesResponse = await axios.get(
      //   `https://unit-3-api-6b6268be0363.herokuapp.com/attendees?api_key=${response.data}`
      // );
      // setAttendees(attendeesResponse.data);
      // console.log(attendeesResponse);

        //Adding this for simplicity
      const API_BASE = "http://localhost:5050";

      const response = await axios.get(`${API_BASE}/register`);
      setUser(response.data); // testing because I might not need a user here
      console.log("Register:", response.data);

      const eventsResponse = await axios.get(`${API_BASE}/events`);
      setEventData(eventsResponse.data);
      console.log("Events:", eventsResponse.data);

      const attendeesResponse = await axios.get(`${API_BASE}/attendees`);
      setAttendees(attendeesResponse.data);
      console.log("Attendees:", attendeesResponse.data);

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
