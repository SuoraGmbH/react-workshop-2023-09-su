import React from "react";

const TimeEntryForm: React.FunctionComponent = () => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    console.log("Hello World!");
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <button>Absändn</button>
    </form>
  );
};

export default TimeEntryForm;
