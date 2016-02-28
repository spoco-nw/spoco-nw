'use strict';

// http://yellowpencil.com/blog/how-to-build-static-site-with-jekyll-grunt-libsass/

module.exports = function (grunt) {

    // Load all Grunt tasks that are listed in package.json automagically
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // shell commands for use in Grunt tasks
        shell: {
            jekyllBuild: {
                command: 'jekyll build'
            },
            jekyllServe: {
                command: 'jekyll serve'
            }
        }

    });

    // Register the grunt serve task
    grunt.registerTask('serve', [
        'shell:jekyllServe'
    ]);

    // Register the grunt build task
    grunt.registerTask('build', [
        'shell:jekyllBuild'
    ]);

    // Register build as the default task fallback
    grunt.registerTask('default', 'build');

};
