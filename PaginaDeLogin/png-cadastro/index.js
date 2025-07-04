const but = document.getElementById('but')

but.addEventListener('click', cadastrarUsuario)
const userlo = localStorage.getItem('usuario') 
const usuario = JSON.parse(userlo)
console.log(usuario)
if(usuario.logado == true){
    window.location.href = "../png-login/login.html"
}

function cadastrarUsuario(){
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value
    const cfsenha = document.getElementById('cfsenha').value

    if(nome === "" || email === "" || senha === "" || cfsenha === ""){
        alert('Preencha todos os campos antes de continuar!')
        return
    }else if(senha != cfsenha){
        alert('Digite a mesma senha nos dois campos!')
        return
    }
    
    const user = {
        nome: nome,
        email: email,
        senha: senha,
        logado: false
    }
    

    const jsonData = JSON.stringify(user)

    localStorage.setItem("usuario",jsonData)

    localStorage.removeItem("nome")

    window.location.href = "../png-login/login.html"
}