/**
 * Created by Adam on 3/2/2015.
 */
module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            html: {
                src: ['src/js/app.js', 'src/js/controllers.js', 'src/js/directives.js', 'src/js/services.js'],
                dest: 'html/js/main.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
                sourceMap: true
            },
            html: {
                files: {
                    'html/js/main.min.js': ['<%= concat.html.dest %>']
                }
            }
        },
        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'src/', src: ['css/**', 'fonts/**', 'js/bootstrap*', 'img/**'], dest: 'html/'},
                    {expand: true, cwd: 'src/html', src: ['**'], dest: 'html/'}
                ]
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'src/js/app.js', 'src/js/controllers.js', 'src/js/directives.js', 'src/js/services.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: 'html',
                    keepalive: true,
                    livereload: true
                }
            }

        },
        watch: {
            files: ['<%= jshint.files %>', '<%= copy.main.files %>'],
            tasks: ['jshint', 'concat', 'uglify', 'copy'],
            options: {
                livereload: true
            }
        },
        clean: ['html']
    });



    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'copy']);
    grunt.registerTask('testapp', ['connect', 'watch']);

};
