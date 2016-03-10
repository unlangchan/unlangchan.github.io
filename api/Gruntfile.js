 module.exports = function(grunt) {
  //配置参数
  grunt.initConfig({
     pkg: grunt.file.readJSON('package.json'),
     concat: {
         options: {
             separator:'\n',
         }
     },
     uglify: {
         options: {
            banner: '/*!<%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */',
            sourceMap: true,
         },
         dist: {
             files: [{'js/docs.min.js': 'source/*.js' },
                     {'js/angular-bootstrap/dropdown-toggle.min.js': 'source/js/angular-bootstrap/dropdown-toggle.js' }
                    ]
         }
     },
     watch: {
            scripts: {
                files: ['source/**/*'],
                tasks: ['uglify'],
                options: {
                    spawn: true,
                    interrupt: true
                }
            }
        }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['watch']);
}