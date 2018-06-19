var gulp = require('gulp');
var data = require('./mock/data.json');

var sass = require('gulp-sass')

var server = require('gulp-webserver');

gulp.task('sass', function() {
    gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/css'))
})

gulp.task('server', function() {
    gulp.src('src')
        .pipe(server({
            port: 8080,
            open: true,
            middleware: function(req, res, next) {
                if (req.url === '/favicon.ico') {
                    return;
                }
                var pathname = require('url').parse(req.url, true).pathname;
                pathname = pathname == '/' ? '/index.html' : pathname;
                if (pathname === '/api/index') {
                    res.end(JSON.stringify(data))
                }

                next();
            }
        }))
})


gulp.task('default', ['sass', 'server'])