var form = document.getElementById("myform");

function onSubmit(event) {
  if (event) {
    event.preventDefault();
    console.log(event);
    alert("Hello");
  }
}

form.addEventListener("submit", onSubmit);
