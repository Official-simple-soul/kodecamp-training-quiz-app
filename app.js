// create a dummy data representing the questions, options, and answer
// create the html syntax to display the data
// select the data view
// map through the data to display each on the webpage
// add an event listener to each data option, so that user can select an option
// display the selected option
// display the correct answer
// display if selection is correct or wrong
// sum up the total after the entire selection

let quizData = [
  {
    question: "Which css property is used to display items on a row",
    options: ["flex", "flex-direction", "column"],
    answer: "flex",
  },
  {
    question: "what is the popular Version Control used by developers",
    options: ["vscode", "git", "github"],
    answer: "git",
  },
  {
    question: "what keyword is used for a non reassignable value in javascript",
    options: ["var", "let", "const", "function"],
    answer: "const",
  },
];

let dataView = document.querySelector(".data-view");

function quizApp() {
  let corrects = 50;
  let wrong = 0;
  let result = 0;

  let quizArray = quizData.map((quiz, index) => {
    return `<div class="row my-3 py-2 justify-content-between">
              <div class="left col-6 shadow">
                <div class="d-flex">
                <p class="col-1">${index + 1}</p>
                <p class="question" style="font-size: 20px">${quiz.question}</p>
                </div>
                <select name="" id="select-item" class="w-100 py-2">
                  <option value="" select-disabled>Select an answer</option>
                  ${quiz.options.map((option) => {
                    return `<option value=${option}>${option}</option>`;
                  })}
                </select>
              </div>
              <div class="right col-5 shadow">
                <p class="selected">Selected answer:</p>
                <p class="correct">Correct answer:</p>
                <p class="status">Status:</p>
              </div>
            </div>`;
  });

  dataView.innerHTML = quizArray.join(" ");

  let selectElement = document.querySelectorAll("select");

  selectElement.forEach((select, index) => {
    select.addEventListener("change", (event) => {
      let selectValue = event.target.value;
      let picked = document.querySelectorAll(".selected")[index];
      picked.innerHTML = `Selected answer: ${selectValue}`;
      let correct = document.querySelectorAll(".correct")[index];
      correct.innerHTML = `Correct answer: ${quizData[index].answer}`;

      if (quizData[index].answer === selectValue) {
        document.querySelectorAll(".status")[
          index
        ].innerHTML = `Status: Correct`;
        result += corrects;
        document.querySelector(".result").innerHTML = `${result}/150`;
      } else {
        document.querySelectorAll(".status")[index].innerHTML = `Status: Wrong`;
        result += wrong;
        document.querySelector(".result").innerHTML = `${result}/150`;
      }
    });
  });
}

quizApp();

let input = document.getElementById(".input");
