// **********************************************************************
// swapCipher
//
// You are given an array.
// The first half of the array's elements are integers and the second half are characters.
// Characters are matched to the index of their order in the alphabet.

// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25
// a b c d e f g h i j k  l  m  n  o  p  q  r  s  t  u  v  w  x  y  z

// swap all integers from the first half with the corispoinding character in the second half.

// [7, 4, 11, 11, 14, 'e', 'o', 'l', 'h', 'l'] => [ 'h', 'e', 'l', 'l', 'o', 4, 14, 11, 7, 11 ]

// Return the decoded word in string format

// var arr = [7, 4, 11, 11, 14, 'e', 'o', 'l', 'h', 'l']
// swapCipher(arr); // => 'hello';

// **********************************************************************


function swapCipher(arr) {
  var alpha = 'abcdefghijklmnopqrstuvwxyz';

  var i = 0;

  for (var i = 0; i < arr.length / 2; i += 1) {
    var num = arr[i];

    for (var j = arr.length / 2; j < arr.length; j += 1) {
      var char = arr[j];

      if (alpha[num] === char) {
        arr[j] = num;
        arr[i] = char;

        break;
      }
    }
  }

  var str = arr.join('');
  return str.slice(0, arr.length / 2);
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = swapCipher;
