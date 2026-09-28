require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

const myData = {
  login: "shansaybhatia",
  id: 157494561,
  node_id: "U_kgDOCWMtIQ",
  avatar_url: "https://avatars.githubusercontent.com/u/157494561?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/shansaybhatia",
  html_url: "https://github.com/shansaybhatia",
  followers_url: "https://api.github.com/users/shansaybhatia/followers",
  following_url:
    "https://api.github.com/users/shansaybhatia/following{/other_user}",
  gists_url: "https://api.github.com/users/shansaybhatia/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/shansaybhatia/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/shansaybhatia/subscriptions",
  organizations_url: "https://api.github.com/users/shansaybhatia/orgs",
  repos_url: "https://api.github.com/users/shansaybhatia/repos",
  events_url: "https://api.github.com/users/shansaybhatia/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/shansaybhatia/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Shansay Bhatia",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: "Exploring software development from frontend to backend, with a focus on fundamentals and continuous learning.",
  twitter_username: null,
  public_repos: 5,
  public_gists: 0,
  followers: 4,
  following: 7,
  created_at: "2024-01-23T13:09:37Z",
  updated_at: "2026-09-28T07:56:21Z",
};

app.get("/github", (req, res) => {
  res.json(myData);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login Successfully</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
