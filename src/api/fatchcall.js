import axios from "axios";

export const fetchRepoDetails = async (username, repoName) => {
  try {
    const { data } = await axios.get(
      `/api/github?path=repos/${username}/${repoName}`
    );
    return {
      name: data.name,
      description: data.description,
      repoUrl: data.html_url,
      homepage: data.homepage ? data.homepage : null,
    };
  } catch (e) {
    console.log(e.response);
  }
};

export const fetchRepoLanguages = async (username, repoName) => {
  try {
    const { data } = await axios.get(
      `/api/github?path=repos/${username}/${repoName}/languages`
    );
    return Object.keys(data);
  } catch (e) {
    console.log(e.response);
  }
};
