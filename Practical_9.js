(async () => {
  if (600 % 2 === 0) {
    const { getGitUsers } = await import("./fetchGitUser.js");
    console.log(getGitUsers["GeniusNirmit"]);
  }
})();
