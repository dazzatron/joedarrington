$(window).load(function () {

	var text = [
		"And did you get what you wanted from this life, even so?",
		"I did.",
		"And what did you want?",
		"To call myself beloved, to feel myself beloved on the earth."
	];

	var c = 0;
	var d = 0;
	var textObject = {};
	
	// create page elements
	var $body = $('body');
	$body.append('<div class="text-wrapper"></div>');
	$body.append('<div class="circle"></div>');

	// loop text array
	for (var a = 0, lengtha = text.length; a < lengtha; a++) {

		$('.text-wrapper').append('<div class="text"></div>');
		var currentText = $('.text').eq(a);
		textObject[a] = [];

		// create object detailing letter positions
		for (var b = 0, lengthb = text[a].length; b < lengthb; b++) {

			var letter = text[a][b];

			// insert text into page
			currentText.append('<span class="letter">' + letter + '</span>');

			if (letter !== ' ') {
				letter = letter.toLowerCase();
				textObject[a][letter] = textObject[a][letter] || [];
				textObject[a][letter].push(b);
			}

		}

	}

	var $text = $('.text');
	var $circle = $('.circle');

	// soundcloud init
	SC.initialize({
		client_id: "YOUR_CLIENT_ID"
	});

	var waveFormData;
	var textCopy;
	var circleFlag = false;

	// show first
	$text.eq(0).addClass('shown');

    // create copy
	textCopy = $.extend(true, {}, textObject[0]);

	var streamOptions = {

		whileplaying: function () {

            // get current volume
			var chunk = this.durationEstimate / waveFormData.length; // each chunk size
			var currentWave = waveFormData[(Math.floor(this.position / (chunk)))];

			document.title = currentWave;

            // circle always animates
			$circle.css({
				transform: 'scale(' + currentWave + ')',
				opacity: currentWave,
				'-webkit-filter': 'blur(' + (2 * currentWave) + 'px)',
			});

			if (currentWave > .95) {
			    if (!circleFlag) {
			        $circle.addClass('peak');
			        circleFlag = true;
			    }
			} else {
			    if (circleFlag) {
			        $circle.removeClass('peak');
			        circleFlag = false;
			    }
			}

			// we get to the end, move on
			if (Object.keys(textCopy).length === 0) {

                // inc
				d++;

				// allow user to read txt
				if (d > $text.eq(c).find('.letter').length) {

                    // reset
				    d = 0;

                    // classes
					$text.eq(c).removeClass('shown');
					$text.eq(c).find('.letter').removeClass('active');

                    // inc
					c++;

                    // start again
					if (c >= text.length) {
						c = 0;
					};

                    // create copy
					textCopy = $.extend(true, {}, textObject[c]);

                    // add class
					$text.eq(c).addClass('shown');

				}

			};

			// at peaks show letter
			if (currentWave > .8) {				
				var textRemove = (Math.floor(Math.random() * Object.keys(textCopy).length)); // get random letter
				var letterRemove = Object.keys(textCopy)[textRemove]; // gives us letter
				var letterRemoveArray = textCopy[letterRemove]; // array of positions
				delete textCopy[letterRemove]; // remove from object
			}

			// show each letter
			for (var i = 0, length = letterRemoveArray.length; i < length; i++) {
				$text.eq(c).find('.letter').eq(letterRemoveArray[i]).addClass('active');
			}

		}

	}

	// start soundcloud
	SC.get("/tracks/18545986", function (track) {

		JSONP.get("http://www.waveformjs.org/w", {
			url: track.waveform_url
		}, function (data) {
		    waveFormData = data;
		    setTimeout(function () {
		        $('.loader').hide();
		    }, 2000);
		});

		SC.stream(track.uri, streamOptions, function (stream) {

		    setTimeout(function () {
		        stream.play();
		    }, 2000);

		});

	});

});