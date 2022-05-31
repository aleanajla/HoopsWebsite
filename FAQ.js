
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

$(document).ready(function(){
    var slider = false;
    $(".btn-header").click(function(){
        $(".btn .jawaban").slideUp()
        $(this).next(".jawaban").slideDown()
        $("symbol").hide()
        

    })
})