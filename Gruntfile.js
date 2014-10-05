// Generated on 2014-10-04 using generator-website 0.2.0
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  grunt.initConfig({

    // Project settings
    yeoman: {
      // configurable paths
      app: require('./bower.json').appPath || '.',
      src: '<%= yeoman.app %>/src',
      dist: 'dist'
    },

    watch: {
      compass: {
        files: ['<%= yeoman.src %>/css/{,*/}*.{scss,sass}'],
        tasks: ['compass:server', 'autoprefixer']
      },
      js: {
        files: ['<%= yeoman.src %>/js/{,*/}*.js'],
        tasks: ['newer:jshint:all'],
        options: {
          livereload: true
        }
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.src %>/*.html',
          '.tmp/css/{,*/}*.css',
          '.tmp/js/{,*/}*.js',
          '<%= yeoman.src %>/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },
    connect: {
      options: {
        port: 9000,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          base: ['.tmp', '<%= yeoman.src %>']
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%= yeoman.dist %>'
        }
      }
    },
    clean: {
      dist: {
        files: [
          {
            dot: true,
            src: [
              '.tmp',
              '<%= yeoman.dist %>/*',
              '!<%= yeoman.dist %>/.git*'
            ]
          }
        ]
      },
      server: '.tmp'
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.src %>/js/{,*/}*.js'
      ]
    },
    compass: {
      options: {
        sassDir: '<%= yeoman.src %>/css',
        cssDir: '.tmp/css',
        generatedImagesDir: '.tmp/img/generated',
        imagesDir: '<%= yeoman.src %>/img',
        javascriptsDir: '<%= yeoman.src %>/js',
        fontsDir: '<%= yeoman.src %>/css/fonts',
        importPath: [
          '<%= yeoman.src %>/bower_components',
          '<%= yeoman.src %>/bower_components/foundation/scss'
        ],
        httpImagesPath: '/img',
        httpGeneratedImagesPath: '/img/generated',
        httpFontsPath: '/css/fonts',
        relativeAssets: false,
        assetCacheBuster: false,
        raw: 'Sass::Script::Number.precision = 10\n'
      },
      dist: {},
      server: {
        options: {
          debugInfo: true
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/css/',
          src: '<%= yeoman.app %>/{,*/}*.css',
          dest: '.tmp/css/'
        }]
      }
    },
    // not used since Uglify task does concat,
    // but still available if needed
    /*concat: {
      dist: {}
    },*/
    // not enabled since usemin task does concat and uglify
    // check index.html to edit your build targets
    // enable this task if you prefer defining your build targets here
    /*uglify: {
      dist: {}
    },*/
    rev: {
      dist: {
        files: {
          src: [
            '<%= yeoman.dist %>/js/{,*/}*.js',
            '<%= yeoman.dist %>/css/{,*/}*.css',
            '<%= yeoman.dist %>/img/{,*/}*.{png,jpg,jpeg,gif,webp}',
            '<%= yeoman.dist %>/css/fonts/*'
          ]
        }
      }
    },
    useminPrepare: {
      options: {
        dest: '<%= yeoman.dist %>'
      },
      html: '<%= yeoman.src %>/index.html'
    },
    usemin: {
      options: {
        assetsDirs: ['<%= yeoman.dist %>']
      },
      html: ['<%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/css/{,*/}*.css']
    },
    imagemin: {
      dist: {
        files: [
          {
            expand: true,
            cwd: '<%= yeoman.src %>/img',
            src: '{,*/}*.{png,jpg,jpeg}',
            dest: '<%= yeoman.dist %>/img'
          }
        ]
      }
    },
    svgmin: {
      dist: {
        files: [
          {
            expand: true,
            cwd: '<%= yeoman.src %>/img',
            src: '{,*/}*.svg',
            dest: '<%= yeoman.dist %>/img'
          }
        ]
      }
    },
    cssmin: {
      dist: {
        files: {
          '<%= yeoman.dist %>/css/main.css': ['.tmp/css/{,*/}*.css']
        }
      }
    },
    htmlmin: {
      dist: {
        options: {
          /*removeCommentsFromCDATA: true,
          // https://github.com/yeoman/grunt-usemin/issues/44
          //collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true*/
        },
        files: [
          {
            expand: true,
            cwd: '<%= yeoman.src %>',
            src: '*.html',
            dest: '<%= yeoman.dist %>'
          }
        ]
      }
    },
    // Put files not handled in other tasks here
    copy: {
      dist: {
        files: [
          {
            expand: true,
            dot: true,
            cwd: '<%= yeoman.src %>',
            dest: '<%= yeoman.dist %>',
            src: [
              '*.html',
              '*.{ico,txt}',
              '.htaccess',
              'img/{,*/}*.{webp,gif}',
              'styles/fonts/*'
            ]
          },
          {
            expand: true,
            cwd: '.tmp/img',
            dest: '<%= yeoman.dist %>/img',
            src: ['generated/*']
          }
        ]
      }
    },
    concurrent: {
      server: [
        'compass:server'
      ],
      dist: [
        'compass:dist',
        // 'imagemin',
        'svgmin',
        'htmlmin'
      ]
    }
  });

  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'concurrent:server',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', function() {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });

  grunt.registerTask('build', [
    'clean:dist',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'cssmin',
    'concat',
    'uglify',
    'copy',
    'rev',
    'usemin'
  ]);

  grunt.registerTask('default', [
    'jshint',
    'build'
  ]);
};
