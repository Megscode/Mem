describe("MoodChecker", function() {
  var mood;
  
  beforeEach(function() {
    mood = new Mood();
  });

  it("should exist", function() {
    expect(mood.moodValue).toEqual(1);
  });

});