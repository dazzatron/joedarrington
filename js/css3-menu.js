(function () {

    $('.burger').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
    });

})();