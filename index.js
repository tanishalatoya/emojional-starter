var happyBtn = document.querySelector('.happy');
var message = document.querySelector('.message');
var sillyBtn = document.querySelector('.silly');
var cryingBtn = document.querySelector('.crying');

happyBth.addEventListener('click', displayHappyMessage);
sillyBtn.addEventListener('click', displaySillyMessage);
cryingBtn.addEventListener('click', displayCryingMessage);


function displayHappyMessage() {
  var happyMessages = ['Go, you!', 'Your smile just cheered me up!', 'YAY!', 'It\'s a great day to be happy!', 'You\'re walking on sunshine over there!', 'Doing the happy dance!', 'Happy, happy, happy!'];
  randomIndex = Math.floor(Math.random() * happyMessages.length);

  message.innerText = happyMessages[randomIndex];
}

function displaySillyMessage() {
  var sillyMessages = ['Interesting response.', 'Sounds... good?', 'Me too.', 'Doing the silly dance!', 'Um... let me think about that.', 'Ok.', 'Yacko, Wacko, and Dot!', 'Tell me more.', 'Yerp. That\'s a thing.'];
  var randomIndex = Math.floor(Math.random() * sillyMessages.length);

  message.innerText = sillyMessages[randomIndex];
}
