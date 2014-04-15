$( function() {

var thisExercise = $('.ch4ex2');
    
var robotID = GetRobotId();
if(robotID == undefined) {
  robotID = 'ABCD';
}
else {
  $('.unknown-robot-id-comment', thisExercise).text('');
  AddRobotToGetParams(robotID);
}

$('.robotID', thisExercise).text(robotID);

$('.tryNow', thisExercise).click( function(obj) {
    var bot = Linkbots.connect(robotID);
    bot.move(0, 0, -360);
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
