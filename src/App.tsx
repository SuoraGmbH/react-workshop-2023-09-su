import TimeEntryView from "./components/TimeEntryView";
import TimeEntryForm from "./components/TimeEntryForm";
import Counter from "./components/Counter";
import DateCounta from "./components/DateCounta";
import GithubRepoStats from "./components/GithubRepoStats";
import KikiIstDumm from "./components/KikiIstDumm";

function App2() {
  return (
    <div>
      <KikiIstDumm />
    </div>
  );
}

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
      <GithubRepoStats repo="facebook/react" />
      <GithubRepoStats repo="angular/angular" />
    </div>
  );
}

export default App;
