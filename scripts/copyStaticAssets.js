/* eslint-disable */
const shell = require('shelljs')

// Copy static assets such as fonts, images, etc to the `dist` directory
shell.cp('-R', 'static/', 'dist/static/')
