
// navbar
var navbarList = document.getElementById("navbarList");

navbarList.style.maxHeight = "0px";

function toogleMenu(){

    if(navbarList.style.maxHeight == "0px"){

        navbarList.style.maxHeight = "210px";
        // navbarList.style.display = "none";

    }
    else{
        navbarList.style.maxHeight = "0px";
        navbarList.style.display = "none";
    }
}

// announcement
var announcement = 1;
showSlide(announcement);

function plusSlides(n){
    showSlide(announcement+=n);
}

function currentSlide(n){
    showSlide(announcement = n)
}

function showSlide(n){
    var idx;
    var slide = document.getElementsByClassName('mySlide');
    var dots = document.getElementsByClassName('dots');
    if(n > slide.length){
        announcement = 1;
    }
    if(n < 1){
        announcement = slide.length;
    }
    for(idx = 0; idx < slide.length; idx++){
        slide[idx].style.display = "none";
    }

    for(idx=0;idx<dots.length; idx++){
        dots[i].className = dots[i].className.replace(" Active", "");
    }
    slide[announcement-1].style.display = "block";
    dots[announcement-1].className+=" active";
}



