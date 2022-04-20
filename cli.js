#!/usr/bin/env node
const { main } = require('./index');
main(process.argv).then(console.info).catch(console.error);
