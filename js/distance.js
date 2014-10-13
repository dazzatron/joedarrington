/// <reference path="vendor/jquery-1.9.1.min.js" />

var img = $('.image-wrapper');
var hoz = 3;
var ver = 3;
var total = hoz * ver;
var width = 280;
var height = 350;

// setup
for (var a = 0; a < hoz; a++) {

    for (var b = 0; b < ver; b++) {

        // use css3?

        var clone = img.clone();
        var imageWidth = width / hoz;
        var imageHeight = height / ver;
        clone.css({ width: imageWidth, height: imageHeight, left: b * imageWidth, top: a * imageHeight });
        clone.find('img').css({ transform: 'translate(' + (-b * imageWidth) + 'px,' + (-a * imageHeight) + 'px)' });
        $('.page-wrapper').append(clone);

    }

}

// remove original 
img.detach();

$('.image-wrapper').mouseover(function () {

    var me = $(this);
    var x = me.offset().left;
    var y = me.offset().top;

    for (var c = 0; c < total; c++) {

        var _me = $('.image-wrapper').eq(c);
        var _x = _me.offset().left;
        var _y = _me.offset().top;
        var diffX = _x - x;
        var diffY = _y - y;
        var diff = Math.sqrt((diffX * diffX) + (diffY * diffY));
        //_me.find('img').css({ transform: 'scale(' + diff/200 + ')' });

    }

});

$('.page-wrapper').mouseleave(function () {
    //$('img').css({ transform: '' });
});