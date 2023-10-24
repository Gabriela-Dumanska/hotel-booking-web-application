const menu=document.querySelector('#mobile-menu');
const menuLinks=document.querySelector('.navbar__menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

function getValues(){
    var date1 = document.getElementById("arrival").value;
    var date2= document.getElementById("departure").value; 
    var adults= document.getElementById("nadults").value; 
    var kids= document.getElementById("nkids").value; 
    var type= document.getElementById("typ").value; 
    //saving the values in local storage
    localStorage.setItem("val1", date1);
    localStorage.setItem("val2", date2);
    localStorage.setItem("val3", adults);
    localStorage.setItem("val4", kids); 
    localStorage.setItem("val5", type);
    window.location.href = 'booking.html';
    }
    
    function myFunction(){
    document.getElementById("data").innerHTML=localStorage.getItem("val1");
    document.getElementById("data1").innerHTML=localStorage.getItem("val2");
    document.getElementById("data2").innerHTML=localStorage.getItem("val3");
    document.getElementById("data3").innerHTML=localStorage.getItem("val4");
    document.getElementById("data4").innerHTML=localStorage.getItem("val5");
    }
