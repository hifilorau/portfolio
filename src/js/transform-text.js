app.transformText = function () {
var list = [ 'I can make it better', 'Front-End Development', 'User Research', 'Usability Testing', 'UI/UX Design', 'Creativity', 'And Just Overall Ass-kicking.'];  // list of blurbs
var txt = $("#rau-holder");
	

var options = {
  duration: 900,          // Time (ms) each blurb will remain on screen
  rearrangeDuration: 250, // Time (ms) a character takes to reach its position
  effect: 'random',        // Animation effect the characters use to appear
  centered: true           // Centers the text relative to its container
};



txt.textualizer(list, options); // textualize it!
txt.textualizer('start');


//txt.textualizer('pause');	// start
	
};