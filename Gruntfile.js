module.exports = function (grunt) {

    grunt.initConfig({
        jshint: {
            options: {
                node: true
            },
            all: ['*.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('default', ['jshint']);
};