const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");

questions.forEach((question,index)=>{
   question.addEventListener("click",()=>{
     answers.forEach((answer)=>{
       answer.classList.remove("active")
     });
     
     answers[index].classList.add("active");
   });
});



// copy right year

const year = document.querySelector(".year");
const currentDate = new Date();
const currentYear = currentDate.getFullYear()
year.innerHTML = currentYear;