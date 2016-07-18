module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ['dist'],
    uglify: {
      my_target: {
        options: {
          sourceMap: true
        },
        files: {
          'dist/rectangle-validator.min.js': ['src/rectangle-validator.js']
        }
      }
    },
    copy: {
        main: {
            files: [{
                expand: true,
                cwd: 'src/',
                src: ['rectangle-validator.js'],
                dest: 'dist/'
            }]
        }
    }
  });

  grunt.registerTask('build', ['clean', 'uglify', 'copy']);

};