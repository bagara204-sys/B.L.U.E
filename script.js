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

class AgenteBLUE {

    analisar(texto){

        return {
            resumo: gerarResumoIA(texto),
            palavrasChave: extrairPalavras(texto)
        };

    }

}

function extrairPalavras(texto){

    let palavras = texto.split(" ");

    return palavras.slice(0,10);

}

function gerarResumoIA(texto){

    let frases = texto.split(".");

    return frases.slice(0,3).join(".");

}

function gerarResumo(){

let texto=
document.getElementById("textoAula").value;

let frases=
texto.split(".");
} 
function gerarResumo(){

    let texto =
    document.getElementById("textoAula").value;

    let agente = new AgenteBLUE();

    let resultado = agente.analisar(texto);

    document.getElementById("resultado").innerHTML = `
        <h3>🤖 Agente BLUE</h3>
        <h4>Resumo</h4>
        <p>${resultado.resumo}</p>

        <h4>Palavras-chave</h4>
        <p>${resultado.palavrasChave.join(", ")}</p>
    `;

}
}

function gerarMapa() {

let texto = document.getElementById("textoAula").value;

let frases = texto
  .split(".")
  .filter(f => f.trim() !== "");

let html = `
<h3>🧠 Mapa Mental</h3>

<div class="mindmap">

<div class="centro">
Tema Principal
</div>
`;

frases.forEach(frase => {

html += `
<div class="ramo">
<span>➜</span>
<div class="caixa">
${frase.trim()}
</div>
</div>
`;

});

html += `</div>`;

document.getElementById("resultado").innerHTML = html;

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
