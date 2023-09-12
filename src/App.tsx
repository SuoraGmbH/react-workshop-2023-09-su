import TimeEntryView from "./components/TimeEntryView";
import TimeEntryForm from "./components/TimeEntryForm";

function App() {
  return (
    <div>
      <TimeEntryView
        timeEntry={{
          id: "dsadas",
          comment: "Die geschwoften Klammern sind überflüssig",
          start: new Date(),
          end: new Date(),
          key: "",
        }}
      />
      <TimeEntryForm />
    </div>
  );
}

export default App;
