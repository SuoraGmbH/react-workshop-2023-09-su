import React from "react";
import { timeEntryCreateSchema, timeEntrySchema } from "../domain/TimeEntry";

const TimeEntryForm: React.FunctionComponent = () => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    console.log("Hello World!");
    event.preventDefault();

    const foo = timeEntryCreateSchema.parse({
      comment: "🤪",
      start: new Date().toISOString(),
      end: new Date().toISOString(),
    });
    console.log(foo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button>Absändn</button>
    </form>
  );
};

export default TimeEntryForm;
