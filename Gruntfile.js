	
	module.exports = function(grunt) {

		// Configuration goes here 
		grunt.initConfig({
			pkg: grunt.file.readJSON('package.json'),

			concat: {   
				dist: {
					src: [
						'js/src/*.js' // All JS in the js folder
						// add more here, remember commas!
					],
					dest: 'js/production.js',
				}
			},
			
			uglify: {
				build: {
					src: 'js/production.js',
					dest: 'js/production.min.js'
				}
			},

			sass: {
				dist: {
					options: {
						style: 'compressed'
					},
					files: {
						'css/style.css': 'css/scss/style.scss'
					}
				} 
			}
			
		});

		// Where we tell Grunt we plan to use this plug-in.
		grunt.loadNpmTasks('grunt-contrib-concat');
		grunt.loadNpmTasks('grunt-contrib-uglify');
		grunt.loadNpmTasks('grunt-contrib-sass');

		// Where we tell Grunt what to do when we type "grunt" into the terminal.
		grunt.registerTask('default', ['concat', 'uglify', 'sass']);

	};