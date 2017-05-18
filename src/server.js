import express from 'express';
import path from 'path';
import Twitter from 'twitter';
import http from 'http';

const app = express();

var client = new Twitter({consumer_key: 'Nf9Jc8lrw50lFAKC4Pll7FqMV', consumer_secret: 'MYCyPWwaq2iFR7WhdO8vmQBIqzvJgxlB53IMP8ZMBPG7p4RM6O', access_token_key: '3196956440-7GJs6uXamRVvJdogDYdCq9FBqD3FWRPLzv8HBjg', access_token_secret: 'Z4J1FQg4bJbf9GKxz4oMgNceo0xmoBH5JJsergld3dUVH'});

var tweet;

var stream = client.stream('statuses/filter', {
  track: 'missoulian,mtpol,ITMFA'
}, function(stream) {
  stream.on('data', function(response) {
    tweet = response;
  });

  stream.on('error', function(error) {
    throw error;
  });
});

app.get('/stream', (req, res) => {
  res.send(tweet);
});

app.use(express.static('src/public'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.listen(3000, () => console.log("listening on port 3000"));
