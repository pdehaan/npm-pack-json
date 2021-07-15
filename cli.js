#!/usr/bin/env node

const npmPack = require("./lib");

try {
  const stats = npmPack();
  console.log(stats);
} catch (err) {
  console.error(err);
  process.exitCode = 1;
}
