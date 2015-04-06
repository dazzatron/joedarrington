/// <reference path="vendor/jquery-1.9.1.min.js" />

+function ($) {

    // prevent random scrolling
    $(window).mousewheel(function (event, delta) {
        $(window).scrollTop($(this).scrollTop() - delta * 50);
        event.preventDefault();
    });

    // global vars
    // =========================

    var windowHeight = $(window).height(),
    month = "",
    monthOld,
    monthOffset,
    scrollTop = scrollBottom = oldscrollTop = 0,
    article,
    sectionHeader,
    sidebar,
    sectionDateWrapper,
    ticking = false;

    // SITE CLASS DEFINITION
    // =========================

    var Site = function (element) {
        this.$element = element;
        this.$elementInfo = this.$element.find(".article-info");
        this.month = this.$element.attr("data-month") || '';
        this.bgcolour = this.$element.attr("data-bgcolour") || '';
        this.parent = this.$element.parent();
        this.onScreen = false;
        this.activated = false;
        this.sectionDateWrapper = $(".section-date-wrapper");
    };

    Site.prototype.setMeasurements = function () {
        this.top = this.$element.offset().top;
        this.bottom = this.top + this.$element.outerHeight(true);
    };

    Site.prototype.checkOnscreen = function () {

        if (this.top < scrollBottom && this.bottom > scrollBottom) {

            if (!this.activated) {
                this.activated = true;
                this.$element.addClass("active");
            };

            if (!this.onScreen) {

                this.onScreen = true;

                var monthActive = $(".section-date[data-month='" + this.month + "']");

                if (monthActive.length > 0) {

                    $(".section-date-active").removeClass("section-date-active").attr("style", "");
                    monthActive.addClass("section-date-active").css({ color: this.bgcolour });
                    monthOffset = monthActive.position().top;
                    this.sectionDateWrapper.css({ transform: "translate3d(0," + -monthOffset + "px, 0)" });
                    this.sectionDateWrapper.addClass('transitioning');

                } else {
                    this.sectionDateWrapper.css({ transform: "translate3d(0,100%,0)" });
                }

            }

        } else {

            if (this.onScreen) {
                this.onScreen = false;
            }

        }

    };

    // SITE PLUGIN DEFINITION
    // ==========================

    function site(element, option) {

        var data = element.data('data');

        if (!data) {
            element.data('data', (data = new Site(element)));
        }

        if (option === 'sm') {
            data.setMeasurements();
        } else {
            data.checkOnscreen();
        }

    };

    // YEAR CLASS DEFINITION
    // =========================

    var Year = function (element) {
        this.$element = element;
        this.parent = this.$element.parent();
        this.topFlag = false;
        this.middleFlag = false;
        this.bottomFlag = false;
    };

    Year.prototype.setMeasurements = function () {
        this.height = this.$element.outerHeight();
        this.parentTop = this.$element.parent().offset().top;
        this.parentBottom = this.parentTop + this.parent.outerHeight(true);
    };

    Year.prototype.checkOnscreen = function () {

        if (scrollTop > (this.parentBottom - this.height)) {
            if (!this.topFlag) {
                this.topFlag = true;
                this.middleFlag = false;
                this.bottomFlag = false;
                this.$element.css({ position: "absolute", bottom: 0, top: "auto" });
            }
        }
        else if (scrollTop > this.parentTop) {
            if (!this.middleFlag) {
                this.topFlag = false;
                this.middleFlag = true;
                this.bottomFlag = false;
                this.$element.css({ position: "fixed", bottom: "auto", top: 0 });
            }
        }
        else {
            if (!this.bottomFlag) {
                this.topFlag = false;
                this.middleFlag = false;
                this.bottomFlag = true;
                this.$element.css({ position: "absolute", bottom: "", top: 0 });
            }
        }

    }

    // YEAR PLUGIN DEFINITION
    // ==========================

    function year(element, option) {

        var data = element.data('data');

        if (!data) {
            element.data('data', (data = new Year(element)));
        }

        if (option === 'co') {
            data.checkOnscreen();
        } else {
            data.setMeasurements();
        }

    };

    // DATA-API
    // =================

    $(window).on("resize", function () {
        setMeasurements();
    });

    function setMeasurements() {

        // set measurements
        for (var i = 0, length = article.length; i < length; i++) {
            site(article.eq(i), 'sm');
        }

        for (var i = 0, length = sectionHeader.length; i < length; i++) {
            year(sectionHeader.eq(i));
        }

    }

    $(window).on("reload", function () {
        
        article = $(".article");
        sectionHeader = $(".section-header");
        sidebar = $(".sidebar");

        // create
        for (var i = 0, length = article.length; i < length;i++){
            site(article.eq(i));
        }

        $(window).on("scroll", function () {
            requestTick();
        });

        setMeasurements();

    });

    function requestTick() {

        if (!ticking) {
            requestAnimationFrame(scrolling);
        }

        ticking = true;

    }

    function scrolling() {

        scrollTop = $(this).scrollTop();
        scrollBottom = scrollTop + windowHeight / 2;

        if ((scrollTop - oldscrollTop) > 0) {
            $(".main-menu").addClass("hidden");
        } else {
            $(".main-menu").removeClass("hidden");
        }

        for (var i = 0, length = sectionHeader.length; i < length; i++) {
            year(sectionHeader.eq(i), 'co');
        }

        for (var i = 0, length = article.length; i < length; i++) {
            site(article.eq(i), 'co');
        }

        oldscrollTop = $(this).scrollTop();
        ticking = false;

    };

}(jQuery);