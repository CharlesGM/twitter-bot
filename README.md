--------------------     Project twitter bot.   ----------------------------------

Basically a twitter bot that can favorite tweets. To be successful with this project, you need to first generate twitter authentication tokens as described in config.js(the commented out section)

To run test this locally on your machine, you will need to download and install node & npm first.
Then run:
$ node app.js


Alternatively, to run it with docker, you will first have to build the image using the Dockerfile provided. The command is:
$ docker build . -t <name-of-your-choice>/node-twitter-bot-app

After building the image, to test the app, the command is:
$ docker run -p 80:8080 -d <name-of-your-choice>/node-twitter-bot-app

That's it. Should be running well and check the 'Likes' section on your twitter account to see your latest favorited tweets.