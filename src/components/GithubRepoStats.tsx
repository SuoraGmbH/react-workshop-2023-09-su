import React, { useEffect, useState } from "react";
import { githubRepoDataSchema } from "../domain/GithubRepoData";

interface Props {
  repo: string;
}

const GithubRepoStats: React.FunctionComponent<Props> = ({ repo }) => {
  const [stars, setStars] = useState(4711);

  JSON.parse("2");

  useEffect(() => {
    fetch(`https://api.github.com/repos/${repo}`)
      .then((response) => response.json())
      .then((data: unknown) => {
        const repoData = githubRepoDataSchema.parse(data);

        return repoData.stargazers_count;
      })
      .then(setStars);
  }, [repo]);

  console.log("GithubRepoStats rendert grade");

  return (
    <div>
      {repo} hat {stars} Stars.
    </div>
  );
};

export default GithubRepoStats;
