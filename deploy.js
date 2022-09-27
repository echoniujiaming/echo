const shell = require("shelljs");

shell.exec("npm run docs:build");

shell.cd("docs/.vitepress/dist");

shell.exec("git init");
shell.exec("git branch -m main");
shell.exec("git add -A");
shell.exec("git commit -m 'deploy'");

shell.exec(
  "git push -f https://github.com/echoniujiaming/echoniujiaming.github.io.git main"
);
