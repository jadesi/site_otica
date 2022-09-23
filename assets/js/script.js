//apresentação do pop up de desconto

setTimeout(ApresentarModal, 4000);
function ApresentarModal(){
    
    document.querySelector(".modal") .style.display = "block"; //o modal aparece

    document //aqui ao clicar ele fecha
        .querySelector(".modal a")
        .addEventListener("click", function(){ 
            document.querySelector(".modal").style.display = "none";});
}

//validação do modal

var form = document.forms["modal_form"]; 

form.addEventListener("submit",validarFormModal);

function validarFormModal(evt){
    var form = document.forms["modal_form"];

    var inputEmail = form.email;
    var valorEmail = form.email.value;

    var posicaoArroba = valorEmail.indexOf("@");

    if(
        valorEmail != "" && //email não pode ser vazio
        valorEmail.indexOf("@") > 3 && //nao pode ter menos de 3 caracteres
        valorEmail.lastIndexOf(".") > posicaoArroba
    ){
     
    }else{
        
        inputEmail.className = "invalido";
        document.querySelector("span.invalido").style.display = "block";

        evt.preventDefault();
    }
}


