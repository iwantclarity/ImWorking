var Slack = require('slack-node');
 
webhookUri = "https://hooks.slack.com/services/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";
 
slack = new Slack();
slack.setWebhook(webhookUri);
 
// slack.webhook({
//   channel: "",
//   username: "webhookbot",
//   text: "This is posted to #general and comes from a bot named webhookbot."
// }, function(err, response) {
//   console.log(response);
// });

// slack emoji 
slack.webhook({
  channel: "",
  username: "nodebot",
  icon_emoji: ":ghost:",
  text: "test message, test message"
}, function(err, response) {
  console.log(response);
});
 
// URL image 
slack.webhook({
  channel: "",
  username: "nodebot2",
  icon_emoji: "http://icons.iconarchive.com/icons/rokey/popo-emotions/128/after-boom-icon.png",
  text: "test message, test message"
}, function(err, response) {
  console.log(response);
});