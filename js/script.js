function logar(){
    var usuario = document.getElementById('login').value
    var senha = document.getElementById('senha').value
    if(usuario == "day" && senha == "123"){
            window.location.href = "http://127.0.0.1:5500/pages/galeria.html"

    }else {
      alert('erro')
 }
}

