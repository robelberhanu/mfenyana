function openCity(evt, cityName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " w3-red";
}

function getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        console.log(reader.result);
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}

var file = document.querySelector('#blogPic'.files[0]);
getBase64(file); // prints the base64 string

function onSubmit(){

    // Get the data from each element on the form.
    const name = document.getElementById('blogName').value;
    const date = document.getElementById('blogDate').value;
    const thumbnail = document.getElementById('blogPic').value;
    const msg = document.getElementById('body').value;

    // console.log("form data:", name,"___", date, "___", thumbnail, "___",msg);
    localStorage.setItem("title", name);
    localStorage.setItem("date", date);
    localStorage.setItem("text", msg);


    }

