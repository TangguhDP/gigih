// https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json

var form = document.getElementById("myform");

function onSubmit(event) {
  if (event) {
    event.preventDefault();
    alert("Hello");
  }
}

form.addEventListener("submit", onSubmit);

function getAPI(url) {
  fetch(url)
    // Handle success
    .then((response) => response.json()) // convert to json
    .then((json) => console.log(json)) //print data to console
    .catch((err) => console.log("Request Failed", err)); // Catch errors
}

getAPI(
  "https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json"
);
