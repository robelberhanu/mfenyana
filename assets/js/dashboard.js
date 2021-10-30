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

function toDataURL(url, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onload = function() {
        var fileReader = new FileReader();
        fileReader.onloadend = function() {
            callback(fileReader.result);
        }
        fileReader.readAsDataURL(httpRequest.response);
    };
    httpRequest.open('GET', url);
    httpRequest.responseType = 'blob';
    httpRequest.send();
}

toDataURL(document.getElementById('blogPic').value, function(dataUrl) {
    // document.write('Result in string:', dataUrl)
    localStorage.setItem("base64Img", dataUrl);
})
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

    alert("You have successfully added to your blog")


    }

