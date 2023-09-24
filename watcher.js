import gulp from 'gulp';
import { styles, scripts, html, reload, copyImages } from './gulpfile';

// Watcher
export const watcher = () => {
  gulp.watch('source/less/**/*.less', gulp.series(styles));
  gulp.watch('source/js/*.js', gulp.series(scripts));
  gulp.watch('source/*.html', gulp.series(html, reload));
  gulp.watch('sourse/img/**/*.{png,jpg,svg}', gulp.series(copyImages, reload));
};
