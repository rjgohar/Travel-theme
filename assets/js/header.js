function fetchHTML(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(xhr.responseText);
    }
  };
  xhr.send();
}
// fetch page1.html and insert into content1
fetchHTML("header.html", function (html) {
  document.getElementById("masthead").innerHTML = html;
});
fetchHTML("footer.html", function (html) {
  document.getElementById("colophon").innerHTML = html;
});
