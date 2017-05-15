
var gulp = require('gulp');


var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create();

gulp.task('minify-js', function() {
  return gulp.src('app/js/*.js')
    .pipe($.rename({ suffix: '.min' })) 
    .pipe($.uglify({ preserveComments:'some' })) 
    .pipe(gulp.dest('app/js')); 
});
<<<<<<< HEAD
gulp.task('myless',function () {
    gulp.src('app/*.less')
        .pipe(plugins.less())
        .pipe(gulp.dest('app/less'));
});
gulp.task("mywatch",function () {
    gulp.watch("app/less*.less",["myless"])
=======


gulp.task('concat-js', function () {
    gulp.src('app/js/*.min.js')  
    .pipe($.concat('libs.js'))  
    .pipe(gulp.dest('app/js'));
});

gulp.task('minify-css', function () {
    gulp.src('app/css/*.css') 
    .pipe($.rename({ suffix: '.min' })) 
    .pipe($.minifyCss()) 
    .pipe(gulp.dest('app/css'));
});

//�ϲ�css�ļ�
gulp.task('concat-css', function () {
    gulp.src('app/css/*.min.css')  // Ҫ�ϲ����ļ�
    .pipe($.concat('libs.css'))  // �ϲ���libs.js
    .pipe(gulp.dest('app/css'));
});

//����less
gulp.task('less-to-css', function () {
    gulp.src('app/less/*.less')
    .pipe($.less())
    .pipe(gulp.dest('app/css'));
});
gulp.task('auto-less',function(){
   gulp.watch('app/less/*.less',['less-to-css'])
});
//BrowserSync
gulp.task('serve', function() {
    gulp.start('less-to-css');
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
  
    gulp.watch('app/less/*.less',['less-to-css']);//�����ѹ��CSS�ļ�
    gulp.watch(['app/*.html','app/less/*.less','app/js/*.js','app/css/*.css']).on("change", browserSync.reload);;//����
>>>>>>> bc8d85252a27d811a0f842230cb43e7b4acb13c5
});
