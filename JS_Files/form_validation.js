document.addEventListener("DOMContentLoaded", () => {
  const name=document.getElementById("name");
  const ID=document.getElementById("ID");
  const Class=document.getElementById("class");
  const dept=document.getElementById("dept");
  const year=document.getElementById("year");
  const email=document.getElementById("email");
  const phone=document.getElementById("phone");
  const photo=document.getElementById("photo");
  const proceed=document.getElementById("proceed");

  const route=document.getElementById("route");
  const point=document.getElementById("point");
  const type=document.getElementById("type");
  const duration=document.getElementById("duration");

  const routeError=document.getElementById("routeError");
  const pointError=document.getElementById("boardingError");
  const typeError=document.getElementById("typeError");
  const durationError=document.getElementById("durationError");

  const nameError=document.getElementById("nameError");
  const IDError=document.getElementById("IDError");
  const classError=document.getElementById("classError");
  const deptError=document.getElementById("deptError");
  const yearError=document.getElementById("yearError");
  const emailError=document.getElementById("emailError");
  const phoneError=document.getElementById("phoneError");
  const photoerror=document.getElementById("photoError");

  function adderror(inputField,error,message){
    inputField.classList.add("border-red-500");
    inputField.classList.remove("border-green-700");
    error.textContent=message;
  }

  function removeerror(inputField,error){
    inputField.classList.add("border-green-700");
    inputField.classList.remove("border-red-500");
    error.textContent="";
  }

const Validators={
  name:(value)=>{
    if(value==="")
      return "Field must not be empty"
    else if(!/^[A-Za-z\s]+$/.test(value))
      return "Enter a valid name";
    else
      return "";
  },
  ID:(value)=>{
    if(value==="")
      return "Field must not be empty";
    else
      return "";
  },
  Class:(value)=>{
    if(value==="")
      return "Field must not be empty";
    else
      return "";
  },
  dept:(value)=>{
    if(value==="")
      return "Field must not be empty";
    else
      return "";
  },
  year:(value)=>{
    if(value==="")
      return "Field must not be empty";
    else if(!/^[0-9]{4}$/.test(value))
      return "Enter a valid year";
    else
      return "";
  },
  email:(value)=>{
    if(value==="")
      return "Field must not be empty";
    else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
      return "Enter a valid email";
    else
      return "";
  },
  phone:(value)=>{
    if(value==="")
      return "Field must not be empty";
    else if(!/^[0-9]{10}$/.test(value))
      return "Enter a valid phone number";
    else
      return "";
  },
  "photo":(value, inputField) => {
  if (inputField.files.length === 0)
    return "Please upload a photo";
  return "";
  },
  route:(value)=>{
    if (!value || value === "")
      return "Fill the above field";
    else
      return "";
  },
  point:(value)=>{
    if (!value || value === "")
      return "Fill the above field";
    else
      return "";
  },
  type:(value)=>{
    if (!value || value === "")
      return "Fill the above field";
    else
      return "";
  },
  duration:(value)=>{
    if (!value || value === "")
      return "Fill the above field";
    else
      return "";
  }}

  function Validation(Field){
    let inputField,error,rule;
    switch(Field){
      case "name":inputField=name;error=nameError;rule="name";break;
      case "ID":inputField=ID;error=IDError;rule="ID";break;
      case "class":inputField=Class;error=classError;rule="Class";break;
      case "year":inputField=year;error=yearError;rule="year";break;
      case "dept":inputField=dept;error=deptError;rule="dept";break;
      case "email":inputField=email;error=emailError;rule="email";break;
      case "phone":inputField=phone;error=phoneError;rule="phone";break;
      case "photo":inputField=photo;error=photoerror;rule="photo";break;
      case "route":inputField=route;error=routeError;rule="route";break;
      case "point":inputField=point;error=pointError;rule="point";break;
      case "type":inputField=type;error=typeError;rule="type";break;
      case "duration":inputField=duration;error=durationError;rule="duration";break;
      default:return true;
    }
    if (rule === "photo") {
      const err = Validators.photo("", inputField);
      if (err) {
        adderror(inputField, error, err);
        return true;
      } else {
        removeerror(inputField, error);
        return false;
      }
    }
    const value = inputField.value.trim();
    const err = Validators[rule](value);
    if(err){
      adderror(inputField,error,err);
      return true;   } 
    else{
      removeerror(inputField,error);
      return false;}}
  
  const Input=[name,ID,year,email,phone,Class,photo,dept,route,point,type,duration];
  Input.forEach((value)=>{
    if(value===route || value===point || value===type || value===duration)
      value.addEventListener("change", () => Validation(value.id));
    else
      value.addEventListener("input", () => Validation(value.id));
    value.addEventListener("blur", () => Validation(value.id));
  });
  const form=document.getElementById("myForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); 
    // stop redirect

    let hasError = false;

    // All fields from Personal Details
    const personalFields = ["name", "ID", "class", "dept", "year", "email", "phone", "photo"];

    // Validate personal fields
    personalFields.forEach(id => {
        if (Validation(id)) 
          hasError = true;
    });

    // All fields from Bus Details
    const busFields = ["duration", "type", "route", "point"];

    busFields.forEach(id => {
        if (Validation(id)) 
        hasError = true;
    });

    if (hasError) {
        alert("Please correct all errors before proceeding.");
        return; // stop
    }
    else{
      const nameValue = document.getElementById("name").value.trim();
    const IDvalue = document.getElementById("ID").value.trim();
    const classValue = document.getElementById("class").value.trim();
    const deptValue = document.getElementById("dept").value.trim();
    const yearValue = document.getElementById("year").value.trim();
    const emailValue = document.getElementById("email").value.trim();
    const phoneValue = document.getElementById("phone").value.trim();
    const photoValue = document.getElementById("photoPreview").src;

    localStorage.setItem("name", nameValue);
    localStorage.setItem("ID", IDvalue);
    localStorage.setItem("class", classValue);
    localStorage.setItem("dept", deptValue);
    localStorage.setItem("year", yearValue);
    localStorage.setItem("email", emailValue);
    localStorage.setItem("phone", phoneValue);
    localStorage.setItem("photo", photoValue);

    const timeValue = duration.value;
    const typeValue = type.value;
    const routeValue = route.value;
    const pointValue = point.value;

    localStorage.setItem("time", timeValue);
    localStorage.setItem("type", typeValue);
    localStorage.setItem("route_no", routeValue);
    localStorage.setItem("point", pointValue);

    const feeValue = calculateFee();
    localStorage.setItem("bus fee", feeValue);

    // Redirect now
    window.location.href = "payment.html";
    }
    console.log("hasError:", hasError);

});
const photoPreview=document.getElementById("photoPreview");
photo.addEventListener('change', function () {
    const file = this.files[0];


    if (!file) {
        photoerror.textContent = "Please upload your photo";
        photoPreview.classList.add('hidden');
        return;}

    const reader = new FileReader();
    reader.onload = function (e) {
    photoPreview.src = e.target.result;
    photoPreview.classList.remove('hidden');
    };
    reader.readAsDataURL(file);
    });

});
