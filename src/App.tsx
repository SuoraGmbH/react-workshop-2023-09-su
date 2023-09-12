import TimeEntryView from "./components/TimeEntryView";
import TimeEntryForm from "./components/TimeEntryForm";
import Counter from "./components/Counter";
import DateCounta from "./components/DateCounta";

function App() {
  return (
    <div>
      <Counter />
      <TimeEntryView
        timeEntry={{
          id: "dsadas",
          comment: "Die geschwoften Klammern sind überflüssig",
          start: new Date(),
          end: new Date(),
        }}
      />
      <TimeEntryForm />
      <Counter />
    </div>
  );
}

export default App;
