import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { useRepoDetails, useRepoLanguages } from "../hooks/useRepo";
import Chips from "./Chips";

const ProjectCards = ({ username, repoName }) => {
  const { data: repo, isLoading: loadingRepo } = useRepoDetails(
    username,
    repoName
  );
  const { data: languages, isLoading: loadingLangs } = useRepoLanguages(
    username,
    repoName
  );
  if (loadingRepo || loadingLangs) return <p>Loading...</p>;

  return (
    <div className="grid w-full gap-3 border-1 border-neutral-700 hover:border-green-600 hover:bg-linear-0 from-green-950 to-[none] to-20% p-4 rounded-[8px] transition-all">
      <a href={repo.repoUrl} className="text-neutral-400">
        <h1 className="font-bold text-xl">{repo.name}</h1>
      </a>
      <div className="flex flex-wrap gap-2">
        {languages.map((lang) => (
          <Chips key={lang} content={lang} />
        ))}
      </div>
      <p className="text-neutral-500 line-clamp-4">{repo.description}</p>
      {repo.homepage && (
        <a
          href={repo.homepage}
          className="text-[#ffffff90] flex items-center gap-2 w-fit"
        >
          visit the website
          <MdArrowOutward />
        </a>
      )}
    </div>
  );
};

export default ProjectCards;
