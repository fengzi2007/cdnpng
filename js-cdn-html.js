var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("content1").innerHTML = this.responseText;
    }
};
xhr.open("GET", "https://img.cdn.mifengyun.top/cdn-txt.html", true);
xhr.send();

var xha = new XMLHttpRequest();
xha.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("content2").innerHTML = this.responseText;
    }
};
xha.open("GET", "https://img.cdn.mifengyun.top/cdn-img.html", true);
xha.send();
