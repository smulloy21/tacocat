describe('palindrome', function (){
  it("should return true if word is a palindrome", function (){
    expect(palindrome('racecar')).to.equal(true);
  });

  it("should return false if word is a not palindrome", function (){
    expect(palindrome('pig')).to.equal(false);
  });

  it("should return true if a phrase is a palindrome", function (){
    expect(palindrome('Hello olleH')).to.equal(true);
  });

  it("should return true if a number series is a palindrome", function (){
    expect(palindrome('1002001')).to.equal(true);
  });
});
