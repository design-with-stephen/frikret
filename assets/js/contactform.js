const contactBtn = document.querySelector(".contactBtn");
const form = document.querySelector("form");

const inputs = document.querySelectorAll ("input");
contactBtn.addEventListener("click", ()=>{
  form.preventDefault();
  inputs.forEach(input,()=>{
    input.value
  }))
});