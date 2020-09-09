#!/usr/bin/env node
// eslint-disable-next-line no-global-assign
require = require('esm')(module/* , options */);
require('../src/cli.js').default.cli(...process.argv.slice(2));
