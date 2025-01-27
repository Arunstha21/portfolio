'use server'
const GITHUB_API_URL = "https://api.github.com"

export interface GitHubRepo {
  id: number
  name: string
  description: string
  html_url: string
  language: string
  stargazers_count: number
  visibility: "public" | "private"
  topics: string[]
}

const token = process.env.GITHUB_TOKEN;

export async function getGitHubRepos(): Promise<GitHubRepo[]> {
    const response = await fetch(`${GITHUB_API_URL}/user/repos?sort=updated&direction=desc`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const res = await response.json();
    
    if (!response.ok) {
      throw new Error(`Failed to fetch GitHub repositories: ${response.statusText}`);
    }
    const repos: GitHubRepo[] = res;
    return repos;
  }

