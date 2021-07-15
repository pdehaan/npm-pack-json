#!/usr/bin/env node

const npmPack = require("./lib");

const stats = npmPack();
console.log(stats);
