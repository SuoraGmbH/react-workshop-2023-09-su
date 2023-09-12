import React, { useState } from "react";
const getWeekDay = (date: Date) => {
  const days = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Sonnabend",
  ];
  return days[date.getDay()];
};

const DateCounta: React.FunctionComponent = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      {getWeekDay(date)}, {date.toLocaleDateString()}
      <button
        onClick={() => {
          setDate((prevDate) => {
            const newDate = new Date(prevDate);

            newDate.setFullYear(newDate.getFullYear() + 1);

            return newDate;
          });
        }}
      >
        Nächstes Jahr
      </button>
    </div>
  );
};

export default DateCounta;
