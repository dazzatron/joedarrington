module.exports = function (grunt) {

    grunt.initConfig({

        // angular unit tests
        karma: {
            unit: {
                configFile: 'tests/karma.conf.js'
            }
        },

        // create a watcher for the above processes
        watch: {
            karma: {
                files: ['tests/controllers/*.js', 'js/*.js'],
                tasks: ['karma']
            }
        }

    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', 'watch');

};