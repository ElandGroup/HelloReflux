var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// BrowserSync
gulp.task('browsersync', ['watch'], function () {
    browserSync({
        server: {
            baseDir: './app'
        },
        port: 184,
        notify: false,
    });
});
// Watch JS/JSX and Sass files
gulp.task('watch', function () {
    gulp.watch(['app/components/*.js', 'app/js/*.js', 'app/stores/*.js']).on('change', reload);
    gulp.watch("app/*.html").on('change', reload);
});
gulp.task('serve', ['browsersync']);
