var assert = require('assert');

var mailvelope = {};

mailvelope.assertSectionTitle = function(title) {
  // Note that the function below returns an array of titles where all entries are empty except one.
  // Hence we need to do some gymnastic around it.
  console.log('test');
  var titles = browser.getText('.tab-content .active h3');

};

exports.mailvelope = mailvelope;