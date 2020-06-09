describe("MoodChecker", function() {
  var mood;
  
  beforeEach(function() {
    mood = new Mood();
  });

  it("should exist", function() {
    expect(mood.moodValue).toEqual(1);
  });

  it("can increase mood", function() {
    expect(mood.moodValue).toEqual(1)
    mood.increaseMood()
    expect(mood.moodValue).toEqual(2);
  });

  it("maximum mood value is 10", function() {
    expect(mood.moodValue).toEqual(1)
    mood.increaseMood()
    mood.increaseMood()
    mood.increaseMood()
    mood.increaseMood()
    mood.increaseMood()
    mood.increaseMood()
    mood.increaseMood()
    mood.increaseMood()
    mood.increaseMood()
    mood.increaseMood()
    mood.increaseMood()
    expect(mood.moodValue).toEqual(10);
  });

});