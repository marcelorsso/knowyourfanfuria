// backend/index.js
require("dotenv").config();
const express = require("express");
const { TwitterApi } = require("twitter-api-v2");
const cors = require("cors");

const app = express();
app.use(cors());

const twitterClient = new TwitterApi({
  appKey: process.env.TWITTER_CONSUMER_KEY,
  appSecret: process.env.TWITTER_CONSUMER_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

const roClient = twitterClient.readOnly;

function calculateFanScore(userData, tweets) {
  let score = 0;

  // Tem "FURIA" na bio?
  if (userData.description && userData.description.toLowerCase().includes("furia")) {
    score += 10;
  }

  // Tweets mencionando "FURIA"
  const furiaTweets = tweets.filter((t) =>
    t.text.toLowerCase().includes("furia")
  );
  score += furiaTweets.length * 10;

  return {
    score,
    details: {
      mentionsInBio: userData.description?.toLowerCase().includes("furia") || false,
      tweetMentions: furiaTweets.length,
    },
  };
}

const cache = new Map();

app.get("/analyze/:username", async (req, res) => {
  const username = req.params.username.toLowerCase();

  if (cache.has(username)) {
    return res.json(cache.get(username));
  }

  try {
    const user = await roClient.v2.userByUsername(username, {
      "user.fields": ["description"]
    });

    const tweetsPaginator = await roClient.v2.userTimeline(user.data.id, {
      max_results: 100,
      "tweet.fields": ["text"]
    });

    const tweets = tweetsPaginator.tweets || [];
    const scoreData = calculateFanScore(user.data, tweets);
    const response = { username, ...scoreData };

    cache.set(username, response);
    res.json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao analisar fã" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
