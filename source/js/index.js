const textarea = document.querySelector('textarea');
const button = document.querySelector('button');
const result = document.querySelector('div');

const SUCCESS_MESSAGE = "hsl(119, 34%, 74%, 0.7)";
const ERROR_MESSAGE = "hsl(322, 42%, 51%, 0.7)";

const updateMessage = (message, messageType = false) => {
  result.innerText = message;

  if (messageType) {
    result.style.backgroundColor = SUCCESS_MESSAGE
  } else {
    result.style.backgroundColor = ERROR_MESSAGE
  }
}

const inputHandler = () => {
  const trimmedValue = textarea.value.toLocaleLowerCase().match(/[a-z0-9a-я]/g);

  if (trimmedValue !== null && trimmedValue.length >= 3) {
    const trimmedString = trimmedValue.join('');
    const reversedString = trimmedValue.reverse().join('');

    trimmedString === reversedString ? updateMessage("Палиндром", true) : updateMessage("Не палиндром");

  } else {
    updateMessage("Минимум 3 буквы")
  }
}

const enterHandler = (evt) => {
  if (evt.code === "Enter") {
    evt.preventDefault();
    inputHandler();
  };
}

button.addEventListener('click', inputHandler);
textarea.addEventListener('keydown', enterHandler)
