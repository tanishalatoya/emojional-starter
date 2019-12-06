var happyBtn = document.querySelector('.happy');
var message = document.querySelector('.message');

happyBth.addEventListener('click', displayHappyMessage);


function displayHappyMessage() {
  var happyMessages = ['Go, you!', 'Your smile just cheered me up!', 'YAY!', 'It\'s a great day to be happy!', 'You\'re walking on sunshine over there!', 'Doing the happy dance!', 'Happy, happy, happy!'];
  randomIndex = Math.floor(Math.random() * happyMessages.length);

  message.innerText = happyMessages[randomIndex];
}
