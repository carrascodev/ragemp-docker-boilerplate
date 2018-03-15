var spawn = require('child_process').spawn;
var gulp = require('gulp');
var ls;



gulp.task('serve', function() {

    if (ls) {
        console.log("killing");
        ls.kill();
    }
    ls = spawn("./server");

    ls.stdout.on('data', function(data) {
        console.log(data.toString());
    });

    ls.stderr.on('data', function(data) {
        console.log(data.toString());
    });

    ls.on('exit', function(code) {
        if (code) {
            console.log('child process exited with code ' + code.toString());
        }
    });

});



var watcher = gulp.watch('**/*.js', ['serve']);
watcher.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});

gulp.task('default', ['serve']);