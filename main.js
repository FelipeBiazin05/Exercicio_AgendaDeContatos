const form = document.getElementById('form-cadastro');
const tel = document.getElementById ('telefone')
const nomeInteiro = document.getElementById ('Nome')
let linhas = '';

function validaNome (nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2; 
}

form.addEventListener('submit', function(e) {
    e.preventDefault ();

    if (!validaNome (nomeInteiro.value)) {
        alert("O nome não esta completo!");
    }
    else {
        alert("Contato adicionado na agenda");
    }
    adicionandoContato();
}) 

function adicionandoContato() {
    let linha = `<tr>`;
    linha += `<td> ${nomeInteiro.value} </td>`;
    linha += `<td> ${tel.value} </td>`;
    linha += `</tr>`

    linhas += linha;

    const corpoTabela = document.querySelector ('tbody');
    corpoTabela.innerHTML = linhas;

    nomeInteiro.value = '';
    tel.value = '';
}


