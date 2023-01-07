var textInput = document.querySelector('#input-text')
var outInput = document.querySelector('#resultado')

function criptografar() {
    var texto = textInput.value

    // CODIFICA
    var resultDescripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")

    // ENVIA PRO LUGAR
    document.querySelector('#resultado').innerHTML =  '<textarea readonly id="result">' + resultDescripto + '</textarea>' + '<input type="button" onclick="copiar()" value="Copiar">'
}

function descriptografar () {
    var texto = textInput.value

    // DESCODIFICA
    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u")

    // ENVIA PRO LUGAR
    document.querySelector('#resultado').innerHTML =  '<textarea readonly id="result">' + resultDescripto + '</textarea>' + '<input type="button" onclick="copiar()" value="Copiar">'

    // LIMPA A CAIXA DE TEXTO
    document.getElementById('input-text').value = " ";
}

function copiar() {
    var textoCop = document.getElementById('result');

    textoCop.select();
    document.execCommand('copy');
    document.getElementById('result').value = " ";
    alert('Texto copiado para a área de transferência')
}