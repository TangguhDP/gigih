var form = document.getElementById("myform");

function onSubmit(event) {
  if (event) {
    event.preventDefault();
    alert("Hello");
  }
}

form.addEventListener("submit", onSubmit);
