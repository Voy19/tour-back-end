const fs = require('fs');

const content = fs.readFileSync('assets/index.html');

module.exports = function notFound () {
   return this.res.send(content.toString());
};