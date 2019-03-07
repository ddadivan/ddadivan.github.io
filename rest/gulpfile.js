var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require ('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var pug = require('gulp-pug');

gulp.task('sass', function () {
    return gulp.src('app/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'));
});

gulp.task('sass:watch', function () {
     gulp.watch('app/scss/**/*.scss', ['sass'])
});

gulp.task('autoprefixer', function () {
    return gulp.src('app/scss/**/*.scss')
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/css/*.css'));
});

/*gulp.task('img', function() {
    return gulp.src('app/img/*')
        .pipe(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/img'));
});*/

gulp.task('pug', function buildHTML() {
    return gulp.src('app/html/pug/**.pug')
        .pipe(pug({
                    pretty: true
                }))
        .pipe(gulp.dest('app/html/')); 
});

gulp.task('watch', ['sass', 'sass:watch', 'autoprefixer', 'pug']);


gulp.task('build', ['img', 'sass', 'scripts'], function() {
 
    var buildCss = gulp.src([ // Переносим библиотеки в продакшен
        'app/css/style.css'
        ])
    .pipe(gulp.dest('dist/css'))
 
    var buildFonts = gulp.src('app/fonts/**/*') // Переносим шрифты в продакшен
    .pipe(gulp.dest('dist/fonts'))
 
    var buildJs = gulp.src('app/js/**/*') // Переносим скрипты в продакшен
    .pipe(gulp.dest('dist/js'))
 
    var buildHtml = gulp.src('app/html/**/*.html') // Переносим HTML в продакшен
    .pipe(gulp.dest('dist'));
 
});