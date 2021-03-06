var gulp            = require('gulp');
var livereload = required('gulp-livereload');

gulp.task('livereload', function() {

gulp.src('.css/*.css')
     .pipe(livereload'());

});

gulp.task('default', function() {
  livereload.listen();
  gulp.watch('.css/*.css', ['livereload']);
});
