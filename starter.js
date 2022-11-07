let counter = 0;

const increment = () => {
  counter++;
  setCounter(counter);
};

const decrement = () => {
  counter--;
  setCounter(counter);
};

const setCounter = (value) => {
  document.getElementById("counter").innerText = value.toString();
};
