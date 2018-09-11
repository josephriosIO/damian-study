// **********************************************************************
// numFormat
//
// Create a function that accepts a number.
// The function should return the number formated with commas.
//
// Examples :
//
// numFormat(100000); // => 100,000
// numFormat(234239334); // => 234,239,334
// numFormat(1); // => 1
// numFormat(129); // => 129
// numFormat(12348382938493837487); // => 12,348,382,938,493,837,000
// **********************************************************************

function numFormat(value) {
  value = String(value);
  var res = [];
  var count = 0;

  for (var i = value.length - 1; i >= 0; i -= 1) {
    var cur = value[i];
    count += 1;

    res.unshift(cur);

    if (count % 3 === 0 && i !== 0) {
      res.unshift(',');
    }
  }

  return res.join('');
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = numFormat;
