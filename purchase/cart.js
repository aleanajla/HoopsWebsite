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

document.getElementById('button').addEventListener('click', onSubmit);

function validateForm() {
    if (document.forms["formPendaftaran"]["nama"].value == "") {
        alert("Name is required");
        document.forms["formPendaftaran"]["nama"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["email"].value == "") {
        alert("Email is required");
        document.forms["formPendaftaran"]["email"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["nomor"].value == "") {
        alert("Phone number is required");
        document.forms["formPendaftaran"]["nomor"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["alamat"].value == "") {
        alert("Address is required");
        document.forms["formPendaftaran"]["alamat"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["kodepos"].value == "") {
        alert("Postal code is required");
        document.forms["formPendaftaran"]["kodepos"].focus();
        return false;
    }
}


