async function sendMessage() {
  const input = document.getElementById("input");
  const messages = document.getElementById("messages");

  const userText = input.value;
  if (!userText) return;

  messages.innerHTML += "<div><b>Tu:</b> " + userText + "</div>";

  const response = await fetch("/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message: userText })
  });

  const data = await response.json();

  messages.innerHTML += "<div><b>Bot:</b> " + data.reply + "</div>";

  input.value = "";
      }
