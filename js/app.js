let questions = document.querySelectorAll(".questions");
questions.forEach(function (question) {
  question.addEventListener("click", function () {
    // console.log("A question is clicked");
    questions.forEach(function (item) {
      if (item != question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});
