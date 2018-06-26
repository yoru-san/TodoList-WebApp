'use strict';

module.exports = function (grunt) {

    // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                sourcemap: 'none',
                style: 'expanded'
            },
            sass2css: {
                files: {
                    'src/assets/styles/css/style.css': 'src/assets/styles/scss/style.scss'
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 4000,
                    base: './src/',
                    keepalive: true,
                    open: true,
                    livereload: true,
                    hostname: 'localhost'
                }
            }
        },
        watch: {
            html: {
                files: ['**/*.html']
            },
            js: {
                files: ['src/app/**/*.js'],
            },
            sass: {
                files: ['src/assets/styles/scss/**/*.scss'],
                tasks: ['sass'],
                options: {
                    livereload: false
                }
            },
            css: {
                files: ['src/assets/styles/css/**/*.css'],
            },
            options: {
                livereload: true
            }
        }
    });

    grunt.registerTask('default', ['sass']);
    grunt.registerTask('serve', ['connect']);
    grunt.registerTask('develop', ['default', 'watch']);

};
