/**
 * Validate git message with angularjs recommended style
 * (https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md)
 * https://github.com/angular/angular.js/blob/master/validate-commit-msg.js
 */

const util = require('util');
const fs = require('fs');

const PATTERN = /^(\w*)\s(\(([\w\s\$\.\,\*/-]*)\))\: (.*)$/gmi;
const TYPES = {
  build: true,
  ci: true,
  docs: true,
  feat: true,
  fix: true,
  perf: true,
  refactor: true,
  revert: true,
  style: true,
  test: true
};

const error = function() {
  console.error('\x1b[31m INVALID COMMIT MSG: ' + util.format.apply(null, arguments) +
    '\x1b[0m \n');
};

const message = fs.readFileSync('./.git/COMMIT_EDITMSG', 'utf8');
let isValid = true;
const match = PATTERN.exec(message);

if (!match) {
  error('does not match "<type> (<scope>): <subject>" ! \nwas: ' + message);
  isValid = false;
} else {
  var type = match[1];
  var scope = match[3];
  var subject = match[4] || '';

  if (!TYPES.hasOwnProperty(type)) {
    error('"%s" is not allowed type !', type);
    isValid = false;
  }

  if (scope === '') {
    error('Scope must be non-empty!');
    isValid = false;
  }

  if (subject === '') {
    error('Subject must be non-empty!');
    isValid = false;
  }
}

if (message.indexOf('Merge branch ') === 0 || message.indexOf('Merge remote-tracking branch') === 0) {
  isValid = true;
}

if (!isValid) {
  process.exit(1);
} else {
  process.exit(0);
}
