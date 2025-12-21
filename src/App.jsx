import "./App.scss";

import PageHeader from "./components/PageHeader/PageHeader.jsx";
import EventList from "./components/EventList/EventList.jsx"
import ComponentDocs from "./pages/ComponentDocs/ComponentDocs.jsx";

const App = () => {
  return (
    <>
      <PageHeader title="Events">
        <EventList />
      </PageHeader>
      <ComponentDocs />
    </>
  );
};

export default App;
