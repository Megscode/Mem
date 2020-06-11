describe("Activity", function() {
  var activity;
  
  beforeEach(function() {
    activity = new Activity();
  });

  it("has activities for mood 1", function() {
    expect(activity.mood1[0]).toEqual("Take a nap");
  });

  it("should display a activity from array 4", function() {
    expect(activity.mood4[1]).toEqual("Walk around the block");
  });
});