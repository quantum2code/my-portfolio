import { useQuery } from "@tanstack/react-query";
import { fetchRepoDetails, fetchRepoLanguages } from "../api/fatchcall";

export const useRepoDetails = (username, repoName) =>
  useQuery({
    queryKey: ["repoDetails", username, repoName],
    queryFn: () => fetchRepoDetails(username, repoName),
    enabled: !!username && !!repoName,
  });

export const useRepoLanguages = (username, repoName) =>
  useQuery({
    queryKey: ["repoLanguages", username, repoName],
    queryFn: () => fetchRepoLanguages(username, repoName),
    enabled: !!username && !!repoName,
  });
