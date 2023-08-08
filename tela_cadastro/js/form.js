
let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')


let cpf = document.querySelector('#cpf')
let labelCpf = document.querySelector('#labelCpf')
let validCpf = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmsenha = document.querySelector('#confirmsenha')
let labelConfirmsenha = document.querySelector('#labelConfirmsenha')
let validConfirmsenha = false

let msgError = document.querySelector('#msgError')
let msgSucces = document.querySelector('#msgSucces')


cpf.addEventListener("keyup",() => {
    if(cpf.value.length <=10){
        labelCpf.setAttribute("style","color: red")
        labelCpf.innerHTML = "Cpf *Insira no minimo 11 caracteres"
        cpf.setAttribute("style","border-color: red")
        validCpf = false
    }else{
        labelCpf.setAttribute("style","color: green")
        labelCpf.innerHTML = "Cpf"
        cpf.setAttribute("style","border-color: green")
        validCpf = true

    }
}

)
usuario.addEventListener("keyup",() => {
    if(usuario.value.length <=4){
        labelUsuario.setAttribute("style","color: red")
        labelUsuario.innerHTML = "Usuario *Insira no minimo 5 caracteres"
        usuario.setAttribute("style","border-color: red")
        validUsuario = false
    }else{
        labelUsuario.setAttribute("style","color: green")
        labelUsuario.innerHTML = "Usuario"
        usuario.setAttribute("style","border-color: green")
        validUsuario = true

    }
}
)

senha.addEventListener("keyup",() => {
    if(senha.value.length <=7){
        labelSenha.setAttribute("style","color: red")
        labelSenha.innerHTML = "Senha *Insira no minimo 8 caracteres"
        senha.setAttribute("style","border-color: red")
        validSenha = false
    }else{
        labelSenha.setAttribute("style","color: green")
        labelSenha.innerHTML = "Senha"
        senha.setAttribute("style","border-color: green")
        validSenha = true

    }
}
)

confirmsenha.addEventListener("keyup", () => {
    if(senha.value != confirmsenha.value){
        labelConfirmsenha.setAttribute("style","color: red")
        labelConfirmsenha.innerHTML = "Confirma Senha *As senhas não conferem"
        confirmsenha.setAttribute("style","border-color: red")
        validConfirmsenha = false
    }else{
        labelConfirmsenha.setAttribute("style","color: green")
        labelConfirmsenha.innerHTML = "Confirma Senha"
        confirmsenha.setAttribute("style","border-color: green")
        validConfirmsenha = true

    }
})


function cadastrar(){
    if(validCpf && validUsuario && validSenha && validConfirmsenha){
        msgSucces.setAttribute('style','display: block')
        msgSucces.innerHTML ='<strong>Cadastrando Usuario...</strong>'
        msgError.setAttribute('style','display: none')
        msgError.innerHTML =''


        setTimeout(()=>{
            window.location.href = 'http://localhost/Projeto_SESE/tela_login/login.html'

        },3000)

        
        

    }else {
        msgError.setAttribute('style','display: block')
        msgError.innerHTML ='<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
        msgSucces.innerHTML =''
        msgSucces.setAttribute('style','display: none')
    }
   
}


btn.addEventListener('click',()=>{
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type','text')
    }else {
        inputSenha.setAttribute('type','password')
    }

})


btnConfirm.addEventListener('click',()=>{
    let inputConfirmSenha = document.querySelector('#confirmsenha')

    if(inputConfirmSenha.getAttribute('type') == 'password'){
        inputConfirmSenha.setAttribute('type','text')
    }else {
        inputConfirmSenha.setAttribute('type','password')
    }

})












