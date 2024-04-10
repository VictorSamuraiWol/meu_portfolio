//Seu JavaScript de validação aqui
let formContact = document.querySelector(".formcontato__form");
let inputNome = document.querySelector("#nome");
let helperNome = document.querySelector(".helperNome");
let inputEmail = document.querySelector("#email");
let helperEmail = document.querySelector(".helperEmail");
let inputAssunto = document.querySelector("#assunto");
let helperAssunto = document.querySelector(".helperAssunto");
let textArea = document.querySelector("#mensagem");
let helperMensagem = document.querySelector(".helperMensagem");
let botaoForm = document.querySelector(".formcontato__botao")
let regexName = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
let regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
let validation = false;

valoresCorretos = {
    nome: false,
    email: false,
    assunto: false,
    mensagem: false
};

console.log(formContact, inputNome, helperNome, inputEmail, helperEmail, inputAssunto, helperAssunto, textArea, helperMensagem, botaoForm);

inputNome.addEventListener('change', ()=> {
    let strValue = inputNome.value;
    if (regexName.test(strValue)) {
        console.log(regexName.test(strValue));
        inputNome.classList.add('correct');
        inputNome.classList.remove('error');
        helperNome.innerText = "";
        valoresCorretos.nome = true;
    } else {
        console.log(regexName.test(strValue));
        inputNome.classList.add('error');
        inputNome.classList.remove('correct');
        helperNome.innerText = "Por favor, digite apenas letras.";
        valoresCorretos.nome = false;
    };
});

inputEmail.addEventListener('change', ()=> {
    let strEmail = inputEmail.value;
    if (regexEmail.test(strEmail)) {
        console.log(regexEmail.test(strEmail));
        inputEmail.classList.add('correct');
        inputEmail.classList.remove('error');
        helperEmail.innerText = "";
        valoresCorretos.email = true;
    } else {
        console.log(regexEmail.test(strEmail));
        inputEmail.classList.add('error');
        inputEmail.classList.remove('correct');
        helperEmail.innerText = "Por favor, digite seu email corretamente.";
        valoresCorretos.email = false;
    };
});

inputAssunto.addEventListener('change', ()=> {
    if (inputAssunto.value == "") {
        inputAssunto.classList.add('error');
        inputAssunto.classList.remove('correct');
        helperAssunto.innerText = "Por favor, digite algum texto.";
        valoresCorretos.assunto = false;
    } else {
        console.log(inputAssunto.value != "");
        inputAssunto.classList.add('correct');
        inputAssunto.classList.remove('error');
        helperAssunto.innerText = "";
        valoresCorretos.assunto = true;
    }
});

textArea.addEventListener('change', ()=> {
    if (textArea.value == "") {
        textArea.classList.add('error');
        textArea.classList.remove('correct');
        helperMensagem.innerText = "Por favor, digite algum texto.";
        valoresCorretos.mensagem = false;
    } else {
        console.log(textArea.value != "");
        textArea.classList.add('correct');
        textArea.classList.remove('error');
        helperMensagem.innerText = "";
        valoresCorretos.mensagem = true;
    }
});

botaoForm.addEventListener("click", (event)=> {
    if(valoresCorretos.nome == false || valoresCorretos.email == false || valoresCorretos.assunto == false || valoresCorretos.mensagem == false){
        event.preventDefault();
        alert('Por favor, preencha o formulário corretamente!')
    }
    else {
        alert('Formulário enviado com sucesso!')
    }
});