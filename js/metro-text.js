(function () {

    var maxLength = 11;

    $('input').keyup(function () {
        doText();
    });

    function doText() {

        $('.metro-text').html('');
        var s = $('input').val();
        var arr = s.split(' ');

        var words = [];
        var wi = 0;
        var wlen = 0; //total length of words in each item of words

        arr.forEach(function (w) {

            if (w.length > 10) {
                wi++;
                wlen = 0;
                words[wi] = w;
                wi++;
                return;
            }

            if (w.length + wlen <= 10) {
                if (typeof words[wi] === 'undefined') {
                    words[wi] = '';
                }
                words[wi] += ' ' + w;
                wlen += w.length;
            } else {
                wi++;
                wlen = 0;
                if (typeof words[wi] === 'undefined') {
                    words[wi] = '';
                }
                words[wi] += w;
            }
        });

        words.forEach(function (e) {
            console.log(e);
            $('.metro-text').append('<div><span>' + e + '</span></div>');
        });


    };

    doText();

})();