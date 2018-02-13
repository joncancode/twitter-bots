require('dotenv').config();

let Twit = require('twit');

let bot = new Twit({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token: process.env.access_token,
  access_token_secret: process.env.access_token_secret,
  timeout_ms: 60 * 1000
});

////to post
// bot.post('statuses/update', {status: 'hello world'}
//     , function(err, data, response){
//         if (err){
//             console.log(err)
//         } else {
//             console.log(data.text + ' was tweeted')
//         }
//     })

// //to get follow list
// bot.get('followers/list', {screen_name: 'muchadoBOTnothn'},
// function(err, data, response){
//     if (err){
//         console.log(err)
//     } else {
//         console.log(data)
//     }
// })

// //to follow an account
// bot.post('friendships/create', {screen_name: 'officialjhaines'},
// function(err, data, response){
//     if (err){
//         console.log(err)
//     } else {
//         console.log(data)
//     }
// })

// //get friend list
// bot.get('friends/list', { screen_name: 'muchadoBOTnothn' }, function(
//   err,
//   data,
//   response
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

////see who is following/followed 
// bot.get('friendships/lookup', { screen_name: 'officialjhaines' }, function(
//     err,
//     data,
//     response
//   ) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(data);
//     }
//   });

////DM
bot.post('direct_messages/new', { screen_name: 'officialjhaines', text: 'this is a DM' }, function(
        err,
        data,
        response
      ) {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
        }
      });