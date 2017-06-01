module.exports = function(grunt) {
  grunt.initConfig({
    shell: {
      jekyllBuild: {
        command: 'jekyll build --config _config.yml,_config.local.yml --verbose'
      },
      jekyllServe: {
        command: "jekyll serve --baseurl ''"
      }
    },
    /*connect: {
      server: {
        options: {
          port: 8080,
          base: '_site'
        }
      }
    },*/
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'css/sassy.css': '_sass/sassy.scss'
        }
      }
    },
    watch: {
      scripts: {
        files: [
          '_config.yml',
          '*.html',  
          '_layouts/**',
          '_posts/**',
          '_includes/**',
          'js/**'
        ],
        tasks: ['shell:jekyllBuild'],
        options: {
          livereload: true
        },
      },
      css: {
        files: [
          '_sass/**'
        ],
        tasks: ['sass', 'shell:jekyllBuild'],
        options: {
          livereload: true
        },
      },
    },
    browserSync: {
      default_options: {
        bsFiles: {
          src: [
            './_site/*.html',
            './_site/*.css'
          ]
        },
        options: {
          watchTask: true,
          server: './_site',
          watchOptions: {
            ignoreInitial: true,
            ignored: ['*.txt', 'node_modules', '.git'],
          },
          browser: 'google chrome',
          notify: false
        } 
      }
    },
    jekyll: {
      options: {                        
        raw: 'baseurl: ""'
      }
    } 
  })

  grunt.loadNpmTasks('grunt-contrib-sass')
  // grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-shell')
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-jekyll');
  
  // grunt.registerTask('tasting', ['browserSync', 'watch'])
  grunt.registerTask('default', ['shell:jekyllBuild', 'browserSync', 'watch'])
  // grunt.registerTask('yolo', ['jekyll', 'watch'])
}
