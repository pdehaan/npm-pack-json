#!/usr/bin/env node

const npmPack = require("./lib");

try {
  const stats = npmPack();
  console.log(JSON.stringify(stats, null, 2));
} catch (err) {
  console.error(err);
  process.exitCode = 1;
}
