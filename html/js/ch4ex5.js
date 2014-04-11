$( function() {

var thisExercise = $('.ch4ex5');

var robotID = GetRobotId();
if(robotID == undefined) {
  robotID = 'ABCD';
}
else {
  $('.unknown-robot-id-comment', thisExercise).text('');
}

AddRobotToGetParams(robotID);
$('.robotID', thisExercise).text(robotID);

var j1text = '0';
var j3text = '0';

$('.tryNow', thisExercise).click( function(obj) {
	var j1 = parseFloat(j1text);
	var j2 = 0;
	var j3 = parseFloat(j3text);
	if ( (j1 < 0) && (j3 < 0) && (j1 == j3) ) {
		$('.checkBox', thisExercise).attr("src", "images/check.svg");
	} else {
		$('.checkBox', thisExercise).attr("src", "images/cross.svg");
	}
	var bot = Linkbots.connect(robotID);
	bot.move(j1, j2, j3);
});

$('.stop', thisExercise).click( function(obj) {
	var bot = Linkbots.connect(robotID);
	bot.stop();
});

$('input.j1text', thisExercise).keyup( function() {
  j1text = $(this).val();
});

$('input.j3text', thisExercise).keyup( function() {
  j3text = $(this).val();
});

$('.expand-program', thisExercise).click(function (event) {
    // Suppress addition of this navigation event to the browser's history, so
    // the Back button isn't screwed up.
    event.preventDefault();

    $('pre.hidden', thisExercise).slideToggle();

    // Flip the hider tab image
    $('img', this).replaceWith(imageToggle());
});

});
