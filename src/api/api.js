import axios from "axios";

export default async function handler(req, res) {
  const token = process.env.GITHUB_TOKEN;

  try {
    const github = axios.create({
      baseURL: "https://api.github.com",
      headers: {
        Accept: "application/vnd.github.v3+json",
        Authorization: `Bearer ${token}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    const response = await github.get("/user"); // or /repos, etc.
    res.status(200).json(response.data);
  } catch (err) {
    console.error("GitHub API error:", err?.response?.data || err.message);
    res.status(500).json({ error: "Failed to fetch from GitHub" });
  }
}
