import React, { FunctionComponent } from "react";

interface Props {
  comment: string;
}

const TimeEntryView: React.FunctionComponent<Props> = ({ comment }) => {
  return <div>{comment}</div>;
};
export default TimeEntryView;
