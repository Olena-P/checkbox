const boxes = document.querySelectorAll(".card");
const submitButton = document.getElementById("button");

const getRandomNumber = (min, max) => {
  const randomNumber = min + Math.random() * (max + 1 - min);

  return Math.floor(randomNumber);
};

function addColor() {
  const randomNumber = getRandomNumber(1, 3);

  boxes.forEach((item) => {
    item.style.backgroundColor = `#${parseInt(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0")}`;
  });

  [...boxes].reduce((acc, item, index, arr) => {
    const randomIndex = getRandomNumber(0, 5);

    if (acc < randomNumber) {
      arr[randomIndex].style.backgroundColor = "blue";
    }

    return (acc += 1);
  }, 0);
}

function getCheckedCheckBoxes() {
  const checkboxes = document.querySelectorAll(".card__input");

  const reject = [...checkboxes].find(
    (checkbox) =>
      (checkbox.parentElement.style.backgroundColor !== "blue" &&
        checkbox.checked) ||
      (checkbox.parentElement.style.backgroundColor === "blue" &&
        !checkbox.checked)
  );

  reject
    ? alert(
        "Ошибка! Перезагрузите страницу и повторите попытку выбрав все синие квадраты!"
      )
    : alert("Все квадраты выбраны правильно");
}

submitButton.addEventListener("click", getCheckedCheckBoxes);

addColor();

// const boxes = document.querySelectorAll(".card");

// function addColor() {
//   const color = boxes.forEach((item) => {
//     item.style.backgroundColor = `#${parseInt(Math.random() * 0xffffff)
//       .toString(16)
//       .padStart(6, "0")}`;
//   });

//   const randomNumber = Math.floor(Math.random() * 6);
//   for (let i = 0; i <= randomNumber; i++) {
//     if (i < 3) {
//       boxes[i].style.backgroundColor = "blue";
//     }
//   }
// }

// function getCheckedCheckBoxes() {
//   const checkboxes = document.getElementsByClassName("card__input");
//   const checkboxesChecked = [];
//   for (let index = 0; index < checkboxes.length; index++) {
//     if (checkboxes[index].checked) {
//       checkboxesChecked.push(checkboxes[index].value);
//       return alert("Все квадраты выбраны правильно");
//     }
//     return alert(
//       "Ошибка! Перезагрузите страницу и повторите попытку выбрав все синие квадраты!"
//     );
//   }
//   return checkboxesChecked;
// }
// addColor();
