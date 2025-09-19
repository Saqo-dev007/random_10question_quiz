const questions = document.querySelectorAll(".question");
let rightAnswers = 0;
let clickCount = 0;

const labelsWithIdR = [
  "Iron",
  "Tolstoy",
  "Giraffe",
  "Berlin",
  "Jupiter",
  "Iron",
  "Berlin",
  "Spanish",
  "1905",
  "Giraffe",
  "Spanish",
  "1905",
  "Lungs",
  "Giraffe",
  "Jupiter",
  "Giraffe",
  "Berlin",
  "Berlin",
  "Jupiter",
  "CO2",
  "1905",
  "Berlin",
  "Berlin",
  "Jupiter",
  "Berlin",
  "Jupiter",
  "6",
  "Berlin",
  "6",
  "Berlin",
  "Berlin",
  "Tolstoy",
  "Iron",
  "Giraffe",
  "Jupiter",
  "CO2",
  "1905",
  "Spanish",
  "Giraffe",
  "1905",
  "Giraffe",
  "6",
  "Jupiter",
  "Iron",
  "Lungs",
  "Lungs",
  "Giraffe",
  "Jupiter",
  "Tolstoy",
  "Tolstoy",
  "6",
  "Lungs",
  "Iron",
  "Lungs",
  "CO2",
  "Berlin",
  "Spanish",
  "Berlin",
  "Iron",
  "Giraffe",
  "Tolstoy",
  "Spanish",
  "CO2",
  "Tolstoy",
  "Tolstoy",
  "Lungs",
  "CO2",
  "CO2",
  "CO2",
  "CO2",
  "Tolstoy",
  "CO2",
  "CO2",
  "1905",
  "Berlin",
  "Berlin",
  "Berlin",
  "6",
  "Jupiter",
  "6",
  "Berlin",
  "1905",
  "6",
  "Giraffe",
  "Iron",
  "CO2",
  "CO2",
  "Iron",
  "Jupiter",
  "Iron",
  "Jupiter",
  "Iron",
  "Iron",
  "Berlin",
  "Giraffe",
  "Berlin",
  "6",
  "6"
];

questions.forEach((div, i) => {
    div.classList.add(`question${i + 1}`);
});

for (let i = 0; i < 10; i++) {
    let num = Math.floor(Math.random() * 100);

    while (questions[num].style.display !== "") {
        num = Math.floor(Math.random() * 100);
    }

    questions[num].style.display = "block";
}

document.querySelectorAll("input[type=radio]").forEach(radio => {
    radio.addEventListener("click", function (event) {
        console.log(event.target.value);
        if (labelsWithIdR.includes(event.target.value)) {
            clickCount++;
            Array.from(this.parentElement.parentElement.children).forEach(val => {
                if (val.tagName === "LABEL") {
                    val.style.backgroundColor = "rgb(220, 53, 69)";
                }
            });

            this.parentElement.style.backgroundColor = "rgb(40, 167, 69)";
            this.parentElement.parentElement.style.pointerEvents = "none";
            this.parentElement.parentElement.style.userSelect = "none";

            rightAnswers++;
        } else {
            clickCount++;
            Array.from(this.parentElement.parentElement.children).forEach(val => {
                if (val.tagName === "LABEL") {
                    if (!labelsWithIdR.includes(val.children[0].value)) {
                        val.style.backgroundColor = "rgb(220, 53, 69)";
                    } else {
                        val.style.backgroundColor = "rgb(40, 167, 69)";
                    }
                }
            });

            this.parentElement.parentElement.style.pointerEvents = "none";
            this.parentElement.parentElement.style.userSelect = "none";
        }
    });
});

document.querySelector("#quiz-form").addEventListener("submit", e => {
    e.preventDefault();
    if (clickCount === 10) {
        alert(`The count of your right answers is: ${rightAnswers}`);
        setTimeout(() => location.reload(), 1000);
    } else {
        alert("please, fill all blanks");
    }
});