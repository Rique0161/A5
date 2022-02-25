function confirmacaoPrimeiraPergunta(){
    var txt = document.getElementById('valorResposta').value
    if (txt.toLowerCase() === "jujuba"){
        document.getElementById('segundoBotao').style.opacity="100%";
        console.log('ok')
    }else{
        console.log('n')
    }
}

function proximaFase(){
    location.href = 'https://docs.google.com/document/d/1LAmF3qWeMvf_e-fOoQdaF4QzDXjnTE1-6Zs5dtCa0lk/edit?usp=sharing'
}

function fechar(){
    var x = document.getElementById("1Div");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};

function confirmacaoFase(){
    var resposta = document.getElementById("confirmacao")
    if(resposta.value="oalo"){
        document.getElementById('primeiraDiv').style.opacity="100%"
    }
}