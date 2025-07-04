const entrar = document.getElementById('entrar')
const divpos = document.getElementById('poslogin')
const but = document.getElementById('sair')
const userlo = localStorage.getItem('usuario')
const user = JSON.parse(userlo)

document.querySelector("button").addEventListener('click', AnalisandoDados)

if(user.logado == true){
    divpos.style.display = 'block'
    document.getElementById('conteiner').style.display = 'none'
    document.getElementById('h1').innerHTML = `Olá ${user.nome} obrigado pela ajuda`
    
    but.addEventListener('click', Deslogar)
}

function AnalisandoDados(){
    const email = document.getElementById('email').value 
    const senha = document.getElementById('senha').value 

    if(email === "" || senha === ""){
        alert('Preencha todos os dados para fazer login!')
        return 
    }
    
    if(email != user.email || senha != user.senha){
        alert('Email ou senha errados ou inexistente')
        return
    }else {
        user.logado = true
        console.log(user)

        const jsonData = JSON.stringify(user)
        localStorage.setItem("usuario",jsonData)


        divpos.style.display = 'block'
        document.getElementById('conteiner').style.display = 'none'
        document.getElementById('h1').innerHTML = `Olá ${user.nome} obrigado pela ajuda`
    }

   but.addEventListener('click', Deslogar)
}

function Deslogar (){
        divpos.style.display = 'none'
        document.getElementById('conteiner').style.
        display = 'block'
        user.logado = false
        const jsonData = JSON.stringify(user)
        localStorage.setItem("usuario",jsonData)
    }