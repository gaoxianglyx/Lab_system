var gulp = require("gulp"),
sass = require("gulp-sass"),
sprite = require("gulp.spritesmith"),
sourcemaps = require("gulp-sourcemaps");

var nodemon = require("gulp-nodemon");

// 监听 app.js mock/*, 自动重启服务
gulp.task('serve-dev', function() {
    var options = {
        script: 'app.js',
        execMap: { 
            "js": "node --harmony"
        },
        ext: "js json",
        env: {
            /*'PORT': port,*/
            'NODE_ENV': 'development'
        },
        watch: ['app.js', 'mock/*']
    };

    nodemon(options).on('restart', function(files) {
        // when reload , livereload the broswer
        console.log('App restarted due to: ', files);
    });
});

// 编译 sass
gulp.task('sass', function() {
    gulp.src('static/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('static/css'));

    gulp.watch('static/sass/**/*.scss', ['sass']);
});

gulp.task('sass:watch', function() {
    // gulp.watch('static/sass/**/*.scss', ['sass']);
});

// 合成雪碧图
gulp.task('sprite', function() {
    var spriteData = gulp.src('static/img/common/*.png')
    .pipe(sprite({
        imgName: 'sprite-common.png',
        cssName: 'sprite-common.css',
        padding: 10
    }));

    spriteData.img.pipe(gulp.dest('static/img/common'));
    spriteData.css.pipe(gulp.dest('static/css/common'));
});

gulp.task('default', function() {
    gulp.run('serve-dev', 'sass');
});