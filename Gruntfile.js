'use strict';

module.exports = function (grunt) {

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    var version = 'patch',
        path = {
            src: {
                styles: 'src/styles/'
            },
            dist: {
                css: 'dist/css/',
                scss: 'dist/scss/'
            },
            demo: {
                styles: 'demo/styles/',
                scripts: 'demo/scripts/'
            }
        };

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        path: path,
        bannerCSS: '/*! <%= pkg.name %> - Flexible Boxes Grid System by <%= pkg.author.name %>, <%= grunt.template.today("dd-mm-yyyy") %> */\n',
        bannerSCSS: '// <%= pkg.name %> - Flexible Boxes Grid System by <%= pkg.author.name %>, <%= grunt.template.today("dd-mm-yyyy") %>\n',

        usebanner: {
            options: {
                position: 'top'
            },
            css: {
                options: {
                    banner: '<%= bannerCSS %>'
                },
                files: {
                    src: [
                        path.dist.css + '**/*.css'
                    ]
                }
            },
            scss: {
                options: {
                    banner: '<%= bannerSCSS %>'
                },
                files: {
                    src: [
                        path.dist.scss + '**/*.scss'
                    ]
                }
            }
        },

        compress: {
            scss: {
                options: {
                    archive: 'dist/<%= pkg.name.toLowerCase() %>.zip'
                },
                files: [
                    {
                        expand: true,
                        cwd: path.dist.scss,
                        src: '**',
                        filter: 'isFile'
                    }
                ]
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
                cwd: path.src.styles,
                src: '**',
                dest: path.dist.scss
            }
        },

        cssmin: {
            options: {
                'report': 'gzip',
                'keepSpecialComments': 0
            },
            flexgrid: {
                files: [{
                    expand: true,
                    cwd: path.dist.css,
                    src: [
                        '*.css',
                        '!*.min.css'
                    ],
                    dest: path.dist.css,
                    ext: '.min.css'
                }]
            }
        },

        sass: {
            flexgrid: {
                files: {
                    '<%= path.dist.css %>flexgrid.css': path.src.styles + 'flexgrid.scss'
                }
            },
            demo: {
                options: {
                    sourceMap: true
                },
                files: {
                    '<%= path.demo.styles %>styles.css': path.demo.styles + 'styles.scss'
                }
            }
        },

        watch: {
            options: {
                livereload: true
            },
            files: ['**/*.scss'],
            tasks: ['sass']
        }

    });

    grunt.registerTask('build', function () {
        grunt.task.run([
            'sass',
            'cssmin',
            'copy',
            'usebanner',
            'compress',
            'version'
        ]);
    });

    grunt.registerTask('tag', function () {
        if (version !== 'patch') {
            grunt.task.run('exec:gitTag');
        }
    });

};
