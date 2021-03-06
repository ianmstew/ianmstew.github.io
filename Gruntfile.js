module.exports = function (grunt) {

  grunt.initConfig({

    clean: {
      all: ['assets/css', 'assets/vendor']
    },

    less: {
      options: {
        paths: 'assets/vendor/less'
      },

      all: {
        files: {
          'assets/css/ianmstew.css': 'assets/less/ianmstew.less'
        }
      }
    },

    bower: {
      install: {
        options: {
          targetDir: 'assets/vendor',
          verbose: true,
          bowerOptions: {
            production: true
          }
        }
      }
    },

    watch: {
      options: {
        nospawn: true
      },

      less: {
        files: [
          'assets/less/**/*'
        ],
        tasks: ['less']
      },

      // Start livereload server at http://localhost:35729/livereload.js
      livereload: {
        options: {
          cwd: '_site',
          livereload: true
        },

        // Note, html files are ALL rewritten and "changed" whenever any file is modified,
        // so this effectively refreshes the page no matter what.
        files: [
          'index.html'
        ]
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['bower', 'less']);
};
