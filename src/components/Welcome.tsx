import React from "react";

interface Props {
  city?: string;
}

function Welcome({ city }: Props): JSX.Element {
  if (!city) {
    return <h1>Hello Bielefeld!</h1>;
  }

  return <h1>Hello {city.toUpperCase()}</h1>;
}

function Welcome2({ city }: Props): JSX.Element {
  return <h1>Hello {city!.toUpperCase()}</h1>;
}

const element = <Welcome />;
const element2 = <Welcome city="Witten" />;
