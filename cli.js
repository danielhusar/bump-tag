#!/usr/bin/env node
'use strict';
var fs = require('fs');
var semver = require('semver');
var sys = require('sys');
var exec = require('child_process').exec;

function puts (error, stdout, stderr) {
  sys.puts(stdout);
}

function help() {
  console.log('Usage:');
  console.log('  $ bump');
  console.log('Custom options:');
  console.log('  $ bump -t=major -i=4 -g=0');
  console.log('  $ bump --type=major --indentation=4');
  console.log('  $ bump --type=minor --indentation=tab');
  console.log('  $ bump --type=minor --git=0');
  console.log('  $ bump --type=minor --git=0');
}

function init() {
  try{
    var pkg = require(process.cwd() + '/package.json');
    var indentation = 2;
    var type = 'patch';
    var git = 1;

    process.argv.forEach(function (val) {
      var item = val.split('=');
      if (item[0] === '-t' || item[0] === '--type') {
        type = item[1];
      }
      if (item[0] === '-g' || item[0] === '--git') {
        git = Number(item[1]);
      }
      if (item[0] === '-i' || item[0] === '--indentation') {
        if (!isNaN(Number(item[1]))) {
          item[1] = Number(item[1]);
        }
        indentation = item[1];
        if (indentation === 'tab') {
          indentation = '\t';
        }
      }
    });

    pkg.version = semver.inc(pkg.version, type);
    fs.writeFileSync(process.cwd() + '/package.json', JSON.stringify(pkg, null, indentation));
    if (git) {
      setTimeout(function(){
        exec('git tag ' + pkg.version, puts);
        exec('git add package.json', puts);
        exec('git commit -m "bump to "'+ pkg.version, puts);
        exec('git push origin master --tags', puts);
      }, 100);
    }
  } catch(e) {
    console.warn('Error:', e);
  }
}

if (process.argv.indexOf('-h') !== -1 || process.argv.indexOf('--help') !== -1) {
  help();
  return;
}

if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--version') !== -1) {
  console.log(require('./package.json').version);
  return;
}

init();
