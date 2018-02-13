require('dotenv').config()

let Twit = require('twit')

let bot = new Twit({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token: process.env.access_token,
    access_token_secret: process.env.access_token_secret,
    timeout_ms: 60*1000
})

bot.post('statuses/update', {status: 'hello world'}
    , function(err, data, response){
        if (err){
            console.log(err)
        } else {
            console.log(data.text + ' was tweeted')
        }
    })