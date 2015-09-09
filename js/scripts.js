var palindrome = function(string) {
  var array = string.split("");
  for(var i = 0; i < array.length; i++) {
    if (array[i] !== array[array.length-1-i]) {
      return false;
    }
  }
  return true;
};

$(document).ready(function() {
  $("form#message").submit(function(event) {
    $('#true-result').hide();
    $('#false-result').hide();
    $('#palindrome').hide();
    var string = $('input#text').val();
    var result = palindrome(string);


    $('#palindrome').text(string);
    $('#palindrome').show();
    
    if (result) {
      $('#true-result').show();
    } else {
      $('#false-result').show();
    }
    event.preventDefault();
  });
});
