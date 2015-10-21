module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true,
        includePaths: [
          'bower_components/bourbon/app/assets/stylesheets',
          'bower_components/neat/app/assets/stylesheets'
        ]
      },
      dist: {
        files: {
          'assets/css/app.css': 'assets/scss/app.scss'
        }
      }
    },
    watch: {
      styles: {
        files: ['assets/scss/*.scss'],
        tasks: ['sass'],
        options: {
        },
      },
    },
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['sass', 'watch']);
};
