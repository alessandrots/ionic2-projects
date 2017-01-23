#!/usr/bin/env node

var fs = require('fs');
var path = require('path');

var rootdir = process.cwd();

fs.createReadStream(path.join(rootdir, 'android/build.gradle')).pipe(fs.createWriteStream(path.join(rootdir, 'platforms/android/build.gradle')));
fs.createReadStream(path.join(rootdir, 'android/project.properties')).pipe(fs.createWriteStream(path.join(rootdir, 'platforms/android/project.properties')));