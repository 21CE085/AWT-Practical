const { getGitUsers } = require("./fetchGitUser.js");

const githubUsernames = ["ocmodi21", "GeniusNirmit", "Ja3mamtora"];

async function main() {
  const githubUsers = await getGitUsers(githubUsernames);
  console.table(githubUsers);
}

main();
