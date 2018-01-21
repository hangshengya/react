var gulp = require('gulp');
var pump = require('pump');
var uglify = require('gulp-uglify');
var sass = require('gulp-ruby-sass');
var htmlmin = require('gulp-htmlmin');

gulp.task('sass',function(){
	sass('./src/sass/*.scss',{'style':'compressed'})
	.on('error',sass.logError)
	.pipe(gulp.dest('./dist/css'))
	.pipe(gulp.dest('./src/css'))
})

gulp.task('compress',function(){
	gulp.src('./src/js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('./dist/js'));
})

gulp.task('htmlmin',function(){
	return gulp.src('./src/html/*.html')
	.pipe(htmlmin({collapseWhitespace:true}))
	.pipe(gulp.dest('./dist/html'))
})

gulp.task('watch',function(){
	gulp.watch('./src/js/*.js',['compress'])
	gulp.watch('./src/sass/*.scss',['sass'])
	gulp.watch('./src/html/*.html',['htmlmin'])
})
