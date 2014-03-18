// fifo queue for site tour messages
var messageQueue = [];
exports.messageQueue = messageQueue;

exports.queueMessage = function(messageID, messageCallback) {
  if(messageQueue.length == 0) {
    messageCallback();
  }
  messageQueue.push({id: messageID, call: messageCallback});
}

exports.dequeueMessage = function() {
  if(messageQueue.length == 0) {
    return false;
  }
  messageQueue.shift();
  if(messageQueue.length > 0) {
    messageQueue[0].call();
  }
}
