function cadastro(){

let usuario = prompt("Crie seu usuário:");
let senha = prompt("Crie sua senha:");

localStorage.setItem("usuario",usuario);
localStorage.setItem("senha",senha);

alert("Cadastro realizado!");
}

function login(){

let usuario =
document.getElementById("usuario").value;

let senha =
document.getElementById("senha").value;

if(
usuario===localStorage.getItem("usuario")
&&
senha===localStorage.getItem("senha")
){
window.location.href="home.html";
}
else{
alert("Usuário ou senha incorretos");
}
}

function logout(){
window.location.href="index.html";
}

let recognition;

function iniciarGravacao(){

const SpeechRecognition =
window.SpeechRecognition ||
window.webkitSpeechRecognition;

recognition = new SpeechRecognition();

recognition.lang="pt-BR";
recognition.continuous=true;

recognition.start();

recognition.onresult=function(event){

let texto="";

for(
let i=0;
i<event.results.length;
i++
){
texto+=event.results[i][0].transcript+" ";
}

document.getElementById("textoAula").value=
texto;

};

}

function pararGravacao(){

if(recognition){
recognition.stop();
}

}

function gerarResumo(){

let texto=
document.getElementById("textoAula").value;

let frases=
texto.split(".");

let resumo=
frases.slice(0,3).join(".");

document.getElementById("resultado")
.innerHTML=
"<h3>Resumo Final</h3>"+resumo;

}

function gerarMapa(){

let texto=
document.getElementById("textoAula").value;

let palavras=
texto.split(" ").slice(0,15);

document.getElementById("resultado")
.innerHTML=
"<h3>Mapa Mental</h3><p>"
+ palavras.join(" ➜ ")
+"</p>";

}

function gerarPDF(){

const { jsPDF } = window.jspdf;

const doc = new jsPDF();

doc.text(
document.getElementById("resultado").innerText,
10,
20
);

doc.save("Resumo_BLUE.pdf");

}