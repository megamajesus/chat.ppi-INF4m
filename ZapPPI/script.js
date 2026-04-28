const users = [
  {user: "admin", pass: "123"},
  {user: "Meg", pass: "20231114010028"},
  {user: "Geovana", pass: "20231114010044"},
  {user: "Duda", pass: "20231114010034"},
  {user: "Cássia", pass: "20231114010050"},
  {user: "mimmarcelo", pass: "Teste123"}
];

let chats = {
  chat1: ["Bom dia! Irei avaliar o chat de vocês."],
  chat2: ["Bom dia. Com Jesus !"]
};

function login() {
  let u = document.getElementById("user").value;
  let p = document.getElementById("pass").value;

  let valid = users.find(x => x.user === u && x.pass === p);

  if(valid){
    document.getElementById("login").classList.add("hidden");
    document.getElementById("chat-area").classList.remove("hidden");
    loadChat();
  } else {
    document.getElementById("error").innerText = "Login inválido";
  }
}

function loadChat(){
  let chat = document.getElementById("chatSelect").value;
  let msgDiv = document.getElementById("messages");
  msgDiv.innerHTML = "";

  chats[chat].forEach(m => {
    msgDiv.innerHTML += `<p>${m}</p>`;
  });
}

function sendMessage(){
  let chat = document.getElementById("chatSelect").value;
  let msg = document.getElementById("msg").value;

  if(msg.trim() === "") return;

  chats[chat].push(msg);
  document.getElementById("msg").value = "";
  loadChat();
}
