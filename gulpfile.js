var path = require('path');
var _ = require('lodash');
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var child_process = require('child_process');
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

gulp.task('test-e2e', ['serve-e2e'], function(done) {
	var protractor = path.resolve('node_modules/.bin/protractor');

	child_process.spawn(protractor, ['./protractor.conf.js'], {
		stdio: 'inherit'
	}).once('close', function (code) {
		browserSync.exit();
		done();
	});
});

// Watch
gulp.task('watch', function() {
	gulp.watch(config.paths.scripts, ['lint']);
});

// Serve
gulp.task('serve', ['watch'], function() {

	serve({
		port: 3000
	});

	gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('serve-e2e', function(done) {
	serve({
		notify: false,
		logConnections: false,
		logFileChanges: false,
		open: false,
		port: 3333
	});
	done();
});

function serve(config, done) {
	var defaults = {
		notify: false,
		logConnections: true,
		logFileChanges: true,
		open: true,
		port: 3000,
		server: {
			baseDir: ['./', './demo'],
			middleware: [
				modRewrite([
					'^/$ /demo/index.html'
				])
			]
		}

	};

	browserSync.init(_.extend({}, defaults, config));
}

gulp.task('default', ['serve']);
