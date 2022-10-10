
function hidenshow(show) {
    $("#" + show).slideToggle("slow");
    document.getElementById('portfolio').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('news').style.display = 'none';
    document.getElementById('service').style.display = 'none';
    document.getElementById('about').style.display = 'none';
    document.getElementById('home').style.display = 'none';
    $("#" + show).slideToggle("slow");

}

