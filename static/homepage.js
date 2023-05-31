const bodyWidth = document.body.clientWidth;
const tamanho = bodyWidth.toString()
console.log(tamanho)

function alterarParaEntradadaDeDados(){
    var titulo = document.getElementById('titulo');
    titulo.style.left = "-" + tamanho +"px";
    titulo.style.transition = '1s'

    var subtitulo = document.getElementById('subtitulo');
    subtitulo.style.left = "-" + tamanho +"px";
    subtitulo.style.transition = '1.7s';

    var bot = document.getElementById('bot');
    bot.style.left = "-" + tamanho +"px";
    bot.style.transition = '1.8s';

    var tituloEntradaDeDados = document.getElementById('tituloEntradaDeDados');
    tituloEntradaDeDados.style.zIndex = '1000';
    tituloEntradaDeDados.style.left = '0px';
    tituloEntradaDeDados.style.transition = '1s';

    var subtituloEntradaDeDados = document.getElementById('subtituloEntradaDeDados');
    subtituloEntradaDeDados.style.zIndex = '1000';
    subtituloEntradaDeDados.style.left = '0px';
    subtituloEntradaDeDados.style.transition = '1.2s';

    var inputEntradaDeDados = document.getElementById('inputEntradaDeDados');
    inputEntradaDeDados.style.zIndex = '1000';
    inputEntradaDeDados.style.left = '0px';
    inputEntradaDeDados.style.transition = '1.5s';

    var caixaPrincipal = document.getElementById('caixaPrincipal');
    caixaPrincipal.style.height = '260px';
    caixaPrincipal.style.transition = '1s';
    
    var botEntradaDeDados = document.getElementById('botEntradaDeDados');
    botEntradaDeDados.style.left = '0px';
    botEntradaDeDados.style.transition = '1s';
}

function alterarParaEspacoEntradaDeDados(){
    var titulo = document.getElementById('titulo');
    titulo.style.left = "600px";
    titulo.style.transition = '0s'

    var subtitulo = document.getElementById('subtitulo');
    subtitulo.style.left = '600px';
    subtitulo.style.transition = '0s';

    var bot = document.getElementById('bot');
    bot.style.left = '600px';
    bot.style.transition = '0s';

    var tituloEntradaDeDados = document.getElementById('tituloEntradaDeDados');
    tituloEntradaDeDados.style.zIndex = '1000';
    tituloEntradaDeDados.style.left = '-600px';
    tituloEntradaDeDados.style.transition = '1s';

    var subtituloEntradaDeDados = document.getElementById('subtituloEntradaDeDados');
    subtituloEntradaDeDados.style.zIndex = '1000';
    subtituloEntradaDeDados.style.left = '-600px';
    subtituloEntradaDeDados.style.transition = '1.2s';

    var inputEntradaDeDados = document.getElementById('inputEntradaDeDados');
    inputEntradaDeDados.style.zIndex = '1000';
    inputEntradaDeDados.style.left = '-600px';
    inputEntradaDeDados.style.transition = '.8s';
    
    var botEntradaDeDados = document.getElementById('botEntradaDeDados');
    botEntradaDeDados.style.left = '-600px';
    botEntradaDeDados.style.transition = '1s';

    var espacoInputEntradas = document.getElementById('espacoInputEntradas');
    espacoInputEntradas.style.left = '0px';
    espacoInputEntradas.style.transition = "1s";

    var caixaPrincipal = document.getElementById('caixaPrincipal');
    caixaPrincipal.style.height = '500px';
    caixaPrincipal.style.transition = '1s';
}

function alterarParaMenuPrincipal(){
    var tituloEntradaDeDados = document.getElementById('tituloEntradaDeDados');
    tituloEntradaDeDados.style.zIndex = '1000';
    tituloEntradaDeDados.style.left = '600px';
    tituloEntradaDeDados.style.transition = '0s';

    var subtituloEntradaDeDados = document.getElementById('subtituloEntradaDeDados');
    subtituloEntradaDeDados.style.zIndex = '1000';
    subtituloEntradaDeDados.style.left = '600px';
    subtituloEntradaDeDados.style.transition = '0s';

    var inputEntradaDeDados = document.getElementById('inputEntradaDeDados');
    inputEntradaDeDados.style.zIndex = '1000';
    inputEntradaDeDados.style.left = '600px';
    inputEntradaDeDados.style.transition = '0s';
    
    var botEntradaDeDados = document.getElementById('botEntradaDeDados');
    botEntradaDeDados.style.left = '600px';
    botEntradaDeDados.style.transition = '0s';

    var espacoInputEntradas = document.getElementById('espacoInputEntradas');
    espacoInputEntradas.style.left = '-600px';
    espacoInputEntradas.style.transition = "1s";

    var caixaPrincipal = document.getElementById('caixaPrincipal');
    caixaPrincipal.style.height = '520px';
    caixaPrincipal.style.width = "390px";
    caixaPrincipal.style.transition = '1s';

    var tituloMenuPrincipal = document.getElementById('tituloMenuPrincipal');
    tituloMenuPrincipal.style.left = '0px';
    tituloMenuPrincipal.style.transition = '1s';

    var listaDigitada = document.getElementById('listaDigitada');
    listaDigitada.style.left = '0px';
    listaDigitada.style.transition = '1s';

    var opcaoMediaAritmetica = document.getElementById('opcaoMediaAritmetica');
    opcaoMediaAritmetica.style.left = '50px';
    opcaoMediaAritmetica.style.transition = '1s';

    var opcaoMediaPonderada = document.getElementById('opcaoMediaPonderada');
    opcaoMediaPonderada.style.left = '220px';
    opcaoMediaPonderada.style.transition = '1s';

    var moda = document.getElementById('moda');
    moda.style.left = '50px';
    moda.style.transition = '1s';

    var mediana = document.getElementById('mediana');
    mediana.style.left = '220px';
    mediana.style.transition = '1s';

    var botRedigitarLista = document.getElementById('botRedigitarLista');
    botRedigitarLista.style.left = '0px';
    botRedigitarLista.style.transition = '1s';

    
    
}

const containerInputs = document.getElementById("containerInputs");
const quantidadeInputs = document.getElementById("inputDados");

quantidadeInputs.addEventListener("input", () => {
  const quantidade = quantidadeInputs.value;
  containerInputs.innerHTML = "";

  for (let i = 0; i < quantidade; i++) {
    const input = document.createElement("input");
    containerInputs.appendChild(input);
  }
});