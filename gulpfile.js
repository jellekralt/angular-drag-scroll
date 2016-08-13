var path = require('path');
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var Server = require('karma').Server;
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var modRewrite = require('connect-modrewrite');
var gulp = require('gulp');

var config = {
	paths: {
		scripts: ['./src/*.js']
	}
};

// Build
gulp.task('build', function() {
	return gulp.src(config.paths.scripts)
		.pipe(uglify({
			preserveComments: 'some'
		}))
		.pipe(rename({
			extname: '.min.js'
		}))
		.pipe(gulp.dest('dist/'));
	});

// Lint
gulp.task('lint', function() {
	return gulp.src(config.paths.scripts)
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('test', ['lint'], function(done) {
	var server = new Server({
		configFile: path.resolve('karma.conf.js')
	});

	server.on('browser_error', function (browser, err) {
		throw err;
	});

	server.on('run_complete', function (browsers, results) {
		if (results.failed) {
			throw new Error('Karma: Tests Failed');
		}

		done();
	});


	server.start();
});

// Watch
gulp.task('watch', function() {
	gulp.watch(config.paths.scripts, ['lint']);
});

// Serve
gulp.task('serve', ['watch'], function() {
    browserSync.init({
        server: {
            baseDir: ['./', './demo'],
            middleware: [
				modRewrite([
					'^/$ /demo/index.html'
				])
			]
        }
    });

    gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
