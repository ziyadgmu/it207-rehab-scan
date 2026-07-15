const fs = require('fs');

let fileName = process.argv[2];
let searchWord = process.argv[3];

if (!fileName) {
  console.log('Missing file name');
  console.log('Usage: node rehabScan.js <file name> <search word>');
  return;
}

if (!searchWord) {
  console.log('Missing search word');
  console.log('Usage: node rehabScan.js <file name> <search word>');
  return;
}

let content;

try {
  content = fs.readFileSync(fileName, 'utf-8');
} catch (err) {
  console.log('File not found');
  return;
}

let lines = content.split('\n');

let matches = lines.filter((line) => {
  return line.toLowerCase().includes(searchWord.toLowerCase());
});

console.log('Search word: ' + searchWord);
console.log('');
console.log('Matching lines:');

if (matches.length === 0) {
  console.log('No matches found');
} else {
  matches.forEach((line) => {
    console.log(line);
  });
}

console.log('');
console.log('Total matches: ' + matches.length);

console.log('');
console.log('Recent matching entries:');

let recentMatches = matches.slice(-3);

if (recentMatches.length === 0) {
  console.log('No recent matches');
} else {
  recentMatches.forEach((line) => {
    console.log(line);
  });
}