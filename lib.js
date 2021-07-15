const cp = require("child_process");

module.exports = npmPack;

function npmPack() {
  let json = cp.execSync("npm pack --dry-run --json").toString();

  json = json.trim().slice(json.indexOf("[") - 1);

  json = JSON.parse(json).pop();
  json.files = json.files.sort((a, b) => a.path.localeCompare(b.path));
  return json;
}
