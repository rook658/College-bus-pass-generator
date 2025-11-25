document.addEventListener("DOMContentLoaded",()=>{
    const hidden=document.getElementById("hidden");
    const button=document.getElementById("button");
    const buttonless=document.getElementById("buttonless");
    button.addEventListener("click",(event)=>{
        event.preventDefault();
        hidden.classList.toggle("hidden");
        button.classList.add("hidden");
        buttonless.classList.remove("hidden");
    });
    
    buttonless.addEventListener("click",(event)=>{
        event.preventDefault();
        hidden.classList.add("hidden");      
        buttonless.classList.add("hidden");  
        button.classList.remove("hidden");
    });
    const myTextarea = document.getElementById('text');

    myTextarea.addEventListener('input', function() {
    this.style.height = 'auto'; // Reset height to recalculate
    this.style.height = (this.scrollHeight) + 'px'; // Set height to scrollHeight
});
const SUBMIT=document.getElementById("submit");
SUBMIT.addEventListener("click",(event)=>{
    event.preventDefault();
    const allErrors = document.querySelectorAll("p.text-red-500");
  let hasError = false;
  allErrors.forEach((p) => {
    if (p.textContent.trim() !== "") hasError = true;
  });

  if (hasError) {
    event.preventDefault();
    alert("Please fix all errors before proceeding.");
  } else {
    alert('Ticket submitted sucessfully.Our team will resolve your issue within 48 working hours.');
    window.location.href="contact.html";
  }
    
})
});