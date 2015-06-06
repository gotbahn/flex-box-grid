'use strict';

module.exports = function (grunt) {

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    var version = 'patch';

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> by <%= pkg.author %>, <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.css': ['dist/<%= pkg.name %>.css']
                }
            }
        },

        version: {
            options: {
                release: version
            },
            src: [
                'package.json',
                'bower.json'
            ]
        },

        exec: {
            gitTag: {
                cmd: 'git tag -a v<%= pkg.version %> -m "Package update"'
            }
        },

        copy: {
            scss: {
                expand: true,
                cwd: 'src/styles/',
                src: '**',
                dest: 'dist/scss/'
            }
        },

        sass: {
            flexgrid: {
                files: {
                    'dist/css/flexgrid.css': 'src/styles/flexgrid.scss'
                }
            },
            demo: {
                options: {
                    sourceMap: true
                },
                files: {
                    'demo/styles/styles.css': 'demo/styles/styles.scss'
                }
            }
        },

        watch: {
            files: ['**/*.scss'],
            tasks: ['sass']
        }

    });

    grunt.registerTask('build', function () {
        grunt.task.run([
            'sass',
            'uglify',
            'copy',
            'version'
        ]);
        if (version !== 'patch') {
            grunt.task.run('exec:gitTag');
        }
    });

};
