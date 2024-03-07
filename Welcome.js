const fs = require('node:fs');
const content = 'Hello Node';
fs.writeFile('welcome.txt', content, err => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
  }
});