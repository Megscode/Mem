
function Mood() {
  this.moodValue = 1;
  this.MAXMOOD = 10;
  this.MINMOOD = 1;
}

Mood.prototype.increaseMood = function() {
  if (this.moodValue == this.MAXMOOD) {
  } else {
    this.moodValue += 1;
  }
};

Mood.prototype.decreaseMood = function() {
  if (this.moodValue == this.MINMOOD) {
  } else {
    this.moodValue -= 1;
  }
};
