#!/usr/bin/env node
const program = require("commander");
const helpOptions = require("./lib/core/help");
const createCommand = require("./lib/core/create");

program.version(require("./package.json").version);

helpOptions();
createCommand();
program.parse(process.argv);

const options = program.opts();
console.log(options);