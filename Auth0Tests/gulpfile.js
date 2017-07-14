/// <binding AfterBuild='build' />

"use strict";

var gulp = require("gulp"),
    browserify = require("browserify"),
    buffer = require("vinyl-buffer"), // Converts streaming vinyl to buffered vinyl
    source = require("vinyl-source-stream"); // Converts non-gulp stream to streaming vinyl

gulp.task("build", ["systemjs", "auth0js", "auth0lock"]);

gulp.task("systemjs",
    function() {
        return gulp.src("node_modules/systemjs/dist/system.src.js")
            .pipe(gulp.dest("wwwroot/js/"));
    });

gulp.task("auth0js",
    function() {
        return gulp.src("node_modules/auth0-js/build/*")
            .pipe(gulp.dest("wwwroot/js/auth0-js"));
    });

gulp.task("auth0lock",
    function() {
        return browserify("node_modules/auth0-lock/lib/index.js")
            .bundle()
            .pipe(source("auth0-lock.js"))
            .pipe(buffer())
            .pipe(gulp.dest("wwwroot/js"));
    });