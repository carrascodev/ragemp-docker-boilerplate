
> This project requires [docker](https://www.docker.com/).


## ABOUT
This project is the dockerized version of the [RAGE Multiplayer](http://rage.mp) server. In this container it runs a gulp task to watch for files change in all the directories. Feel free to change this behavior on `gulpfile.js` line 33: 

    var  watcher  =  gulp.watch('**/*.js', \['serve'\]);

## HOW TO USE

open the command-line on this project folder and then run   

    docker-compose build
    docker-compose up

          
*TIP: If you use docker on windows don't forget to share your drivers.*