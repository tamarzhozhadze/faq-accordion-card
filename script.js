const questions = document.querySelectorAll(".question-container");


questions.forEach(question => {
    question.addEventListener("click", ()=> {
        question.classList.toggle("active");
    })
})