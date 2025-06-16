const perguntas = [
  {
    pergunta: "Qual dessas atitudes ajuda o meio ambiente?",
    respostas: ["Jogar lixo na rua", "Reciclar", "Queimar lixo"],
    correta: 1
  },
  {
    pergunta: "O que é energia renovável?",
    respostas: ["Petróleo", "Sol e vento", "Carvão"],
    correta: 1
  }
];

let indice = 0;

function iniciarQuiz() {
  document.querySelector(".conteudo").style.display = "none";
  document.querySelector("#quiz").classList.remove("escondido");
  mostrarPergunta();
}

function mostrarPergunta() {
  const q = perguntas[indice];
  document.getElementById("pergunta").innerText = q.pergunta;

  const respostasDiv = document.getElementById("respostas");
  respostasDiv.innerHTML = "";

  q.respostas.forEach((resposta, i) => {
    const btn = document.createElement("button");
    btn.innerText = resposta;
    btn.onclick = () => verificarResposta(i);
    respostasDiv.appendChild(btn);
  });
}

function verificarResposta(resposta) {
  if (resposta === perguntas[indice].correta) {
    alert("Resposta correta! ✅");
  } else {
    alert("Ops! Tente novamente. ❌");
  }

  indice++;
  if (indice < perguntas.length) {
    mostrarPergunta();
  } else {
    alert("Fim do quiz! 🌱");
    location.reload();
  }
}
