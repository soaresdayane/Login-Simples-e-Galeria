window.onload = CarregarImg;

function CarregarImg(){
    
    const qtdImagens = 6;
    const img = document.getElementById('fotos'); 

    for (i = 1; i <= qtdImagens; i++){
        var image = document.createElement('button');
        var urlImg = "../img/img0" + i + ".jpg";
        var pathImg = "url(../img/img0" + i + ".jpg)";
        
        image.style.backgroundImage = pathImg;

        image.addEventListener('click', abrirImagemGrande, false );
        image.myParam = urlImg;

        img.appendChild(image);
    }
}
function abrirImagemGrande(evt){
    const imgGrande = document.getElementById('fotoGrande'); 

    var image = document.createElement('img');
    image.setAttribute('src', evt.currentTarget.myParam);
    imgGrande.replaceChildren(image);
}



