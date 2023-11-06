const menu=document.querySelector('#mobile-menu');
const menuLinks=document.querySelector('.topBar__menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

let sliderImages = document.querySelectorAll(".slide"),
    arrowLeft = document.querySelector("#arrow-left"),
    arrowRight = document.querySelector("#arrow-right"),
    current = 0;
 
function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "none";
    }
}
function startSlide() {
    reset();
    sliderImages[0].style.display = "block";
}

function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = "block";
    current--;
}
 
function slideRight() {
    reset();
    sliderImages[current + 1].style.display = "block";
    current++;
}

arrowLeft.addEventListener("click", function () {
    if (current == 0) {
        current = sliderImages.length;
    }
    slideLeft();
});

arrowRight.addEventListener("click", function () {
    if (current == sliderImages.length - 1) {
        current = -1;
    }
    slideRight();
});
 
startSlide();
var counter=0;
function easteregg(){
    counter=counter+1;
    if(counter>4){
        window.location.href = 'https://media.tenor.com/TUmjIWdiLIcAAAAd/dog-door-dog-dance.gif';
    }
}
function validateBookingForm(){
    var arrival = document.getElementById("arrival").value;
    var departure= document.getElementById("departure").value; 
    var nadults= document.getElementById("nadults").value; 
    var nkids= document.getElementById("nkids").value; 
    var type= document.getElementById("roomtype").value; 
    localStorage.setItem("val1", arrival);
    localStorage.setItem("val2", departure);
    localStorage.setItem("val3", nadults);
    localStorage.setItem("val4", nkids); 
    localStorage.setItem("val5", type);
    var errors=[];
    if (arrival>departure || arrival=='' || departure=='') {
        errors.push('Błędny termin wyjazdu');
    }
    if (nadults<0 || nkids<0){
        errors.push(' Liczba osób nie może być ujemna');
    }
    if (nadults=='' || nadults==0){
        errors.push(' Błędna liczba dorosłych');
    }
    if(nadults>10 || nkids>10){
        errors.push(' Niestety nie zapewnimy noclegu dla tylu osób');
    }
    
    if(errors.length==0){
        window.location.href = 'booking.html';
    }
    else{
        errors.push(' Spróbuj ponownie :(');
        alert(errors);
    }

}
function getBookingValues2(){
        const name= document.getElementById("bookingName").value;
        const number=document.getElementById("bookingNumber").value;
        localStorage.setItem("name", name);
        localStorage.setItem("number", number);
        var errors=[];
        const regn = /^[a-zA-Z \s ń ś ć ź ż ó ł ę ą ]{2,}$/g;
        
        if (!regn.test(name)) {
            errors.push('Błędne imię');
        }
        const regnum = /^[0-9]{8,10}$/g;
        if (!regnum.test(number)) {
            errors.push(' Błędny numer telefonu');
        }
        if(errors.length==0){
            window.location.href = 'potwierdzenie.html';
        }
        else{
            errors.push(' Spróbuj ponownie :(');
            alert(errors);
        }
}
function getBookingValues1(){
    document.getElementById("bookingDataArrival").innerHTML=localStorage.getItem("val1");
    document.getElementById("bookingDataDeparture").innerHTML=localStorage.getItem("val2");
    document.getElementById("bookingDataNumAdults").innerHTML=localStorage.getItem("val3");
    if(localStorage.getItem("val4")==''){
        document.getElementById("bookingDataNumKids").innerHTML=0;
    }
    else{
        document.getElementById("bookingDataNumKids").innerHTML=localStorage.getItem("val4");
    }
    document.getElementById("bookingDataRoomType").innerHTML=localStorage.getItem("val5");
    document.getElementById("bookingName").innerHTML=localStorage.getItem("name");
    document.getElementById("bookingNumber").innerHTML=localStorage.getItem("number");
    if (localStorage.getItem("val5")=="Standard"){
        document.getElementById("roomphoto").src= "images/standardroom.jpg";
    }
    if (localStorage.getItem("val5")=="Premium"){
        document.getElementById("roomphoto").src= "images/premiumroom.jpg";
    }
    if (localStorage.getItem("val5")=="Vip"){
        document.getElementById("roomphoto").src= "images/viproom.jpg";
    }
}
function getConfirmationData(){
    document.getElementById("bookingDataArrival").innerHTML=localStorage.getItem("val1");
    document.getElementById("bookingDataDeparture").innerHTML=localStorage.getItem("val2");
    document.getElementById("bookingDataNumAdults").innerHTML=localStorage.getItem("val3");
    if(localStorage.getItem("val4")==''){
        document.getElementById("bookingDataNumKids").innerHTML=0;
    }
    else{
        document.getElementById("bookingDataNumKids").innerHTML=localStorage.getItem("val4");
    }
    document.getElementById("bookingDataRoomType").innerHTML=localStorage.getItem("val5");
    document.getElementById("bookingDataName").innerHTML=localStorage.getItem("name");
    document.getElementById("bookingDataNumber").innerHTML=localStorage.getItem("number");
}
function validateContactForm() {
    var errors=[];
    const name = document.forms["contactForm"]["fname"].value;
    const email= document.forms["contactForm"]["femail"].value;
    const mess= document.forms["contactForm"]["fmessage"].value;
    const check= document.forms["contactForm"]["fcheckbox"];
    const regn = /^[a-zA-Z \s ń ś ć ź ż ó ł ę ą ]{2,}$/g;
    if (!regn.test(name)) {
        errors.push('Błędne imię');
    }
    const regm= /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;
    if (!regm.test(email)){
        errors.push(' Błędny adres e-mail');
    }
    if(mess.length<1){
        errors.push(' Za krótka wiadomość');
    }
    if(!check.checked){
        errors.push(' Musisz zaakceptować nasz newsletter');
    }
    if(errors.length==0){
        alert('Dziękujemy za twoją wiadomość! Do zobaczenia :)');
    }
    else{
        errors.push(' Spróbuj ponownie :(');
        alert(errors);
    }
}
  