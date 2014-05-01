$( function() {

var thisExercise = $('.ch5challenge1');

var inputtext = '0';

var numTries = 0;

$('.tryNow', thisExercise).click( function(obj) {
  var pattern = new RegExp("print[ ]*\\([ ]*['\"]The quick brown fox jumped over the lazy dog.['\"][ ]*\\)")
  var success = pattern.test(inputtext)
	if (success) {
		$('.checkBox', thisExercise).attr("src", "images/check.svg");
    numTries = 0;
	} else {
		$('.checkBox', thisExercise).attr("src", "images/cross.svg");
    numTries++;
    if(numTries > 3) {
      $('div.hidden', 'div.hint').css("display", "block");
    }
	}
});

$('input.ch5challenge_text', thisExercise).keyup( function() {
  inputtext = $(this).val();
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
