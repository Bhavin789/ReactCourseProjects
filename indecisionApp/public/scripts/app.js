'use strict';

console.log('app.js is running');

var template = React.createElement(
  'h1',
  null,
  'Does is change'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
