$(document).ready(function() {

	$( '.add' ).click(function() {
	  console.log("Button has been clicked");
	  $('body').append('<p>Hello World</p>');
	});
	$( '.h1' ).click(function() {

	  $('body').append('<h1>Goodbye World</h1>');
	});
	$( '.ol' ).click(function() {

	  $('body').append('<ol><li>Test1</li><li>Test2</li><li>Test3</li></ol>');
	});


	// PART TWO BEGIN
	
	$('p').mouseover(function() {

        $(this).css({
            'color' : 'pink',
            'font-size' : '25px'
        });
    });

    $('p').mouseout(function() {

        $(this).css({
            'color' : 'Black',
            'font-size' : '12px'
        });
    });

    $('h1').mouseover(function() {

        $(this).append('!');
    });

    $('a').click(function() {

          if (confirm("Are you sure you want to go?")) {

          }

          else {
          	$(this).remove();
          	return false;
          }
    });

});