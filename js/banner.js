class Banner{
    criarBanner(idAlvo,Texto){
        let Elemento = document.getElementById(idAlvo)
        Elemento.innerHTML+="<article>"+Texto+"</article>"
    }


}

export default Banner