class Banner{
    criarBanner(idAlvo,ListaBanner){
        let Elemento = document.getElementById(idAlvo)
        Elemento.innerHTML+="<article></article>"
    }
    ModificaBanner(idAlvo="",ListaBanner=[""],index=0){
        let Banner = document.getElementById(idAlvo).getElementsByTagName("article")[0]
        Banner.innerHTML= ListaBanner[index]
      
    }


}

export default Banner