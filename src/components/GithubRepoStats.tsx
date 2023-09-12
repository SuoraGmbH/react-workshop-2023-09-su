import React, { useEffect, useState } from "react";

interface Props {
  repo: string;
}

const GithubRepoStats: React.FunctionComponent<Props> = ({ repo }) => {
  const [stars, setStars] = useState(4711);

  useEffect(() => {
    // fetch(`https://api.github.com/repos/${repo}`)
    //   .then((response) => response.json())
    //   .then((data) => data.stargazers_count)
    //   .then(setStars);
    // .then((stargazers_count) => setStars(stargazers_count));

    fetch(`https://api.github.com/repos/${repo}`).then((response) => {
      response.json().then((data) => {
        setStars(data.stargazers_count);
      });
    });
  }, [repo]);

  console.log("GithubRepoStats rendert grade");

  return (
    <div>
      {repo} hat {stars} Stars.
    </div>
  );
};

export default GithubRepoStats;
