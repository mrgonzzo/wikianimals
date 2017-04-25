/**importamos gulp */
const gulp = require('gulp');
const concat=require('gulp-concat');
//importamos erramientas
const eslint =require('gulp-eslint');//validador de codigo
const browserSync = require('browser-sync').create();
const reload =browserSync.reload;
gulp.task('scripts', function() {
    return gulp.src('./**/*.js')
    .pipe(concat('unified.js'))
    .pipe(gulp.dest('./dist/'));
});
//Server
gulp.task('browserSync', function() {

  browserSync.init({

    server: {

      baseDir: 'src',

      index: 'index.html',

      https: false

    },

  });



  gulp.watch("src/app/**/*.js").on("change", reload);

});


// el archivo con las reglas es .eslintcr
gulp.task('lint', () => {
    return gulp.src(['app/**/*js','!mock/**'])
               .pipe(eslint())
               .pipe(eslint.format())
               .pipe(eslint.failAfterError());
});

//definimos una  tarea
gulp.task('tarea',function(){
    console.log('he ejecutado la tarea');
});

//tarea default

gulp.task('default',function(){
    console.log('ejecuto por defecto');
});

gulp.task('uno',function(){
    console.log('soy uno');
});
gulp.task('dos',function(){
    console.log('soy dos');
});
gulp.task('tres',['uno','dos'],function(){
    console.log('soy uno');
});

gulp.task('sintransformarentuberias',function(){
    return gulp.src('pez.js').pipe(gulp.dest('./mar'));
});


