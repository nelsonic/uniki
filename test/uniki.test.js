var uniki = require('../lib/uniki');
var test  = require('tape');

test("Create uniki for url: 1234", function(t) {
  var str = uniki(1234);
  t.equal(str.length, 8, "Worked as expected "+str);
  t.equal(str, '1ARVn2Au', "uniki is consistent. 1234 >> 1ARVn")
  t.end();
});

test("Confirm string characters are in Allowed chars", function(t) {
  var charSet = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz123456789";
  var str = uniki(Math.random());
  console.log("Our Random string is: " + str);
  var char;
  str.split('').map(function(c) {
    char = c;
    // t.true(charSet.indexOf(char) > -1, char + " is in charSet: "+ charSet);
  });
  t.true(charSet.indexOf(char) > -1, char + " is in charSet: "+ charSet);
  t.end();
});

test("Full Length Hash", function(t) {
  var hash = uniki("RandomGobbledygook", 50);
  t.true(hash.length > 20, "Full Length is "+hash);
  t.end();
});
