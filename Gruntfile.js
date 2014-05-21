module.exports = function (grunt) {

  grunt.initConfig({

    clean: {
      all: ['src/assets/css', 'src/assets/vendor']
    },

    less: {
      options: {
        paths: 'src/assets/vendor/less'
      },

      all: {
        files: {
          'src/assets/css/ianmstew.css': 'src/assets/less/ianmstew.less'
        }
      }
    },

    bower: {
      install: {
        options: {
          targetDir: 'src/assets/vendor',
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
          'src/assets/less/**/*'
        ],
        tasks: ['less']
      },

      // Start livereload server at http://localhost:35729/livereload.js
      livereload: {
        options: {
          cwd: 'build',
          livereload: true
        },

        files: [
          '**/*.html',
          'assets/css/*.css'
        ]
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['bower', 'less']);
};
