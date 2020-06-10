describe("Activity", function() {
  var activity;
  
  beforeEach(function() {
    activity = new Activity();
  });

  it("has activities for mood 1", function() {
    expect(activity.mood1[0]).toEqual("Take a nap");
  });
});