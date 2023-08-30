class Banner{
    criarBanner(idAlvo,ListaBanner){
        let Elemento = document.getElementById(idAlvo)
        Elemento.innerHTML+="<article></article>"
        Elemento.innerHTML +="<button id= 'btBannerAnterior' > < </Button>"
        Elemento.innerHTML +="<Button id= 'btBannerProximo'> > </Button>"
    }
    ModificaBanner(idAlvo="",ListaBanner=[""],index=0){
        let Banner = document.getElementById(idAlvo).getElementsByTagName("article")[0]
        Banner.innerHTML= ListaBanner[index]
      
    }


}

export default Banner