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

function displayCryingMessage() {
  var cryingMessages = ['Do you want to talk?', 'Keep your head up!', 'We can cry together!', 'What can I do?', 'A smile might make you feel better.', 'I get it.', 'Feeling like poop, huh?', 'Don\'t worry, you\'ll crush it tomorrow!', 'Your head... my shoulder.', 'It\'s your party, you can cry if you want to.'];
  var randomIndex = Math.floor(Math.random() * cryingMessages.length);

  message.innerText = cryingMessages[randomIndex];
}
