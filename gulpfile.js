'use strict';
// Generated on 2014-03-29 using generator-gulp-webapp 0.0.4

var gulp = require('gulp');
var wiredep = require('wiredep').stream;
var gutil = require('gulp-util');

// Load plugins
var $ = require('gulp-load-plugins')();

// JST
gulp.task('jst', function () {
  return gulp.src('app/scripts/templates/*.ejs')
    .pipe($.jstConcat('templates.js', {
        renameKeys: ['^.*templates/(.*).ejs$', '$1']
    }))
    .pipe(gulp.dest('app/scripts/'))
})


// Styles
gulp.task('styles', function () {
    return gulp.src('app/styles/main.sass')
        .pipe($.rubySass({
          style: 'expanded',
          loadPath: ['app/bower_components']
        }).on('error', gutil.log))
        .pipe($.autoprefixer('last 1 version'))
        .pipe(gulp.dest('app/styles'))
        .pipe($.size());
});

// Scripts
gulp.task('scripts', function () {
    return gulp.src('app/scripts/**/*.js')
        //.pipe($.jshint('.jshintrc'))
        //.pipe($.jshint.reporter('default'))
        .pipe($.size());
});

gulp.task('coffee', function() {
  return gulp.src('app/scripts/**/*.coffee')
    .pipe($.coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('app/scripts/'))
});

// HTML
gulp.task('html', function () {
    return gulp.src('app/*.html')
      .pipe($.useref())
      .pipe(gulp.dest('dist'))
      .pipe($.size());
});

// Images
gulp.task('images', function () {
    return gulp.src('app/images/**/*')
        .pipe($.cache($.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('dist/images'))
        .pipe($.size());
});

// Clean
gulp.task('clean', function () {
    return gulp.src(['dist/styles', 'dist/scripts', 'dist/images'], {read: false}).pipe($.clean());
});

// Bundle
gulp.task('bundle', ['styles', 'scripts'], $.bundle('./app/*.html'));

// Build
gulp.task('build', ['html', 'bundle', 'images']);

// Default task
gulp.task('default', ['clean'], function () {
    gulp.start('build');
});

// Connect
gulp.task('connect', $.connect.server({
    root: ['app'],
    port: 9000,
    livereload: true
}));

// Inject Bower components
gulp.task('wiredep', function () {
    gulp.src('app/styles/*.sass')
        .pipe(wiredep({
            directory: 'app/bower_components',
            ignorePath: 'app/bower_components/'
        }))
        .pipe(gulp.dest('app/styles'));

    gulp.src('app/*.html')
        .pipe(wiredep({
            directory: 'app/bower_components',
            ignorePath: 'app/'
        }))
        .pipe(gulp.dest('app'));
});

// Watch
gulp.task('watch', ['connect'], function () {
    // Watch for changes in `app` folder
    gulp.watch([
        'app/*.html',
        'app/styles/**/*.css',
        'app/scripts/**/*.coffee',
        'app/scripts/**/*.js',
        'app/images/**/*'
    ], function(event) {
        return gulp.src(event.path)
            .pipe($.connect.reload());
    });
    
    // Watch .sass files
    gulp.watch('app/styles/**/*.sass', ['styles']);
    
    // Watch .ejs files
    gulp.watch('app/scripts/templates/*.ejs', ['jst']);

    // Watch .js files
    gulp.watch('app/scripts/**/*.js', ['scripts']);

    // Watch .coffee files
    gulp.watch('app/scripts/**/*.coffee', ['coffee']);

    // Watch image files
    gulp.watch('app/images/**/*', ['images']);

    // Watch bower files
    gulp.watch('app/bower_components/*', ['wiredep']);
});
