async function getMessage() {
  const response = await fetch("http://localhost:8080/message");

  const message = await response.json();

  const app = document.getElementById("app");
  app.textContent = message;
}

getMessage();
