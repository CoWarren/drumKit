const soundLocations = {
  "ride": "assets/ride.wav",
  "crash": "assets/crash.wav",
  "medium-tom": "assets/medium-tom.wav",
  "high-tom": "assets/high-tom.wav",
  "hi-hat" : "assets/hi-hat.wav",
  "snare": "assets/snare.wav",
  "floor-tom": "assets/floor-tom.wav",
  "bass-drum": "assets/bass-drum.wav",
};

function makesound(sound) {
  new Audio(soundLocations[sound]).play();
}
