$( function() {

var thisExercise = $('#beeps-1');

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
	var freq = parseFloat($('#frequency', thisExercise).val());
	bot.buzzerFrequency(freq);

  setTimeout(function () {
    bot.buzzerFrequency(0);
  }, 500);
});

$('.expand-program', thisExercise).click(function (event) {
    // Suppress addition of this navigation event to the browser's history, so
    // the Back button isn't screwed up.
    event.preventDefault();

    $('pre.hidden', thisExercise).slideToggle();

    // Flip the hider tab image
    $('img', this).replaceWith(imageToggle());
});

function getFrequencyFromPianoKeyId (keyId) {
    var idToFreqMap = {
        "piano-key-c" : 261.6,
        "piano-key-cs": 277.2,                    
        "piano-key-d" : 293.7,
        "piano-key-ds": 311.1,
        "piano-key-e" : 329.6,
        "piano-key-f" : 349.2,
        "piano-key-fs": 370.0,
        "piano-key-g" : 392.0,
        "piano-key-gs": 415.3,
        "piano-key-a" : 440.0,
        "piano-key-as": 466.1,
        "piano-key-b" : 493.9
    };
    return idToFreqMap[keyId];
}

$("#piano-keys", thisExercise).load("images/beeps/PianoKeyboard.svg", function () {
    /* The piano keys are all rect elements. */
    $('rect', this).click(function (event) {
        freq = getFrequencyFromPianoKeyId($(this).attr('id'));
        $('#frequency', thisExercise).val(freq);
        $('.tryNow', thisExercise).click();
    });
});

});
