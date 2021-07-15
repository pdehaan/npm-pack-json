const cp = require("child_process");
const bytes = require("bytes");

module.exports = npmPack;

function npmPack() {
  let json = cp.execSync("npm pack --dry-run --json").toString();

  // Sometimes we get stdout contents before the JSON begins. Weak.
  json = json.trim().slice(json.indexOf("[") - 1);

  json = JSON.parse(json).pop();
  json.files = json.files
    .sort((a, b) => a.path.localeCompare(b.path))
    .map(info => {
      info.bytes = bytes(info.size);
      info.mode = parseInt(info.mode.toString(8), 10);
      return info;
    });
  json.bytes = bytes(json.size);
  json.unpackedBytes = bytes(json.unpackedSize);
  return json;
}
