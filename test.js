'use strict';

var fs = require('fs');
var should = require('should');
var semver = require('semver');
var sys = require('sys')
var exec = require('child_process').exec;
var pkg = require(process.cwd() + '/package.json');

function puts(error, stdout, stderr) {
  sys.puts(stdout);
}

describe('CLI test', function(){

  it('It should work with no options for type', function (cb) {
    exec('node ./cli.js -g=0', puts);
    setTimeout(function(){
      fs.readFile(process.cwd() + '/package.json', function read(err, data) {
        data = JSON.parse(data);
        (Number(pkg.version.split('.')[2]) + 1).should.equal(Number(data.version.split('.')[2]));
        cb();
      });
    }, 400);
  });

  it('It should work with options', function (cb) {
    exec('node ./cli.js -g=0 -t=major', puts);
    setTimeout(function(){
      fs.readFile(process.cwd() + '/package.json', function read(err, data) {
        data = JSON.parse(data);
        (Number(pkg.version.split('.')[0]) + 1).should.equal(Number(data.version.split('.')[0]));
        fs.writeFileSync(process.cwd() + '/package.json', JSON.stringify(pkg, null, 2));
        cb();
      });
    }, 400);
  });

  it('It should work with direct version', function (cb) {
    exec('node ./cli.js -g=0 minor', puts);
    setTimeout(function(){
      fs.readFile(process.cwd() + '/package.json', function read(err, data) {
        data = JSON.parse(data);
        (Number(pkg.version.split('.')[1]) + 1).should.equal(Number(data.version.split('.')[1]));
        fs.writeFileSync(process.cwd() + '/package.json', JSON.stringify(pkg, null, 2));
        cb();
      });
    }, 400);
  });

});
