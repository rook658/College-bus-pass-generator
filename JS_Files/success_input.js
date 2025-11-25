const NAME=document.getElementById("name");
const ID=document.getElementById("ID");
const CLASS=document.getElementById("class");
const DEPT=document.getElementById("dept");
const EMAIL=document.getElementById("email");
const PHONE=document.getElementById("phone");
const PHOTO=document.getElementById("photo");
const YEAR=document.getElementById("year");

const Route=document.getElementById("route");
const point=document.getElementById("point");
const type=document.getElementById("type");
const time=document.getElementById("time");

document.addEventListener('DOMContentLoaded',()=>{
    const nameINPUT=localStorage.getItem('name');
    const idINPUT=localStorage.getItem("ID");
    const classINPUT=localStorage.getItem('class');
    const deptINPUT=localStorage.getItem('dept');
    const emailINPUT=localStorage.getItem('email');
    const yearINPUT=localStorage.getItem('year');
    const phoneINPUT=localStorage.getItem('phone');
    const photoINPUT=localStorage.getItem('photo');
    const expiry=document.getElementById("DOE");

    const time1=localStorage.getItem('time');
    const type1=localStorage.getItem('type');
    const route_no=localStorage.getItem('route_no');
    const point1=localStorage.getItem('point');

    NAME.textContent=`Name : ${nameINPUT}`;
    ID.textContent=`Registration number : ${idINPUT}`;
    CLASS.textContent=`Class : ${classINPUT}`;
    DEPT.textContent=`Department : ${deptINPUT}`;
    EMAIL.textContent=`Email : ${emailINPUT}`;
    YEAR.textContent=`Year : ${yearINPUT}`;
    PHONE.textContent=`Contact : ${phoneINPUT}`;
    if(photoINPUT)
    PHOTO.src = photoINPUT;
    Route.textContent=`Route : ${route_no}`;
    time.textContent=`Valid for : ${time1}`;
    point.textContent=`Boarding point : ${point1}`;
    type.textContent=`Type of Passenger : ${type1}`;
    const Newdate=document.getElementById("DOI");
            const today=new Date();
            const options = { day: '2-digit', month: 'short', year: 'numeric' };
            const formattedDate = today.toLocaleDateString('en-US', options);
            Newdate.textContent=`Date of issue : ${formattedDate}`;
    const ExpiryDate=new Date(today);
    if(time==='3 months'){
        ExpiryDate.setMonth(ExpiryDate.getMonth()+3);
        const formattedExpiry = ExpiryDate.toLocaleDateString('en-US', options);
        expiry.textContent = `Date of expiry: ${formattedExpiry}`;
    }
    else{
        ExpiryDate.setMonth(ExpiryDate.getMonth()+6);
        const formattedExpiry = ExpiryDate.toLocaleDateString('en-US', options);
        expiry.textContent = `Date of expiry: ${formattedExpiry}`;
    }
});