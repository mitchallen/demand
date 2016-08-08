module.exports = function (grunt) {

    grunt.initConfig({
        jshint: {
            options: {
                node: true
            },
            all: ['*.js']
        },
        bump: {
            options: {
                commit: true,
                createTag: true,
                push: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('default', ['jshint']);
};