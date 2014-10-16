module.exports = function (config) {

  config.set({

    basePath : '../',

    files: [
      'js/vendor/jquery-1.9.1.min.js',
      'js/vendor/angular.min.js',
      'js/vendor/angular-mocks.js',
      'js/vendor/*.js',
      'js/*.js',
      'tests/**/*.js'
    ],
      
    singleRun: true,

    frameworks: ['jasmine'],

    browsers: [
        'PhantomJS'
    ],

    plugins: [
            'karma-phantomjs-launcher',
            'karma-jasmine'
    ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });

};