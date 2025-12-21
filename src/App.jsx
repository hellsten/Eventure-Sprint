import "./App.scss";

import PageHeader from "./components/PageHeader/PageHeader.jsx";
import EventList from "./components/EventList/EventList.jsx"
import ComponentDocs from "./pages/ComponentDocs/ComponentDocs.jsx";
import PageFooter from "./components/PageFooter/PageFooter.jsx";
import AttendingCard from "./components/AttendingCard/AttendingCard.jsx";

const App = () => {
  return (
    <>
      <PageHeader title="Events">
        <EventList />
      </PageHeader>
      
      <div className="attending-banner">
        <AttendingCard 
        iconName="calendar"
        cardTitle="Attending an event?"
        description="Stay organized and in the loop. Check your upcoming event registrations and view schedules, updates, and important info. Everything you need to know is all in one place."
        buttonText="View your events"
        buttonLink="#"
        />
      </div>
      <PageFooter />
      <ComponentDocs />

    </>
  );
};

export default App;
