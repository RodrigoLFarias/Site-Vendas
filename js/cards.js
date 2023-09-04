class Card {
    _TipodeCard= "card"
    CriarCards(IdAlvo,titulo,Conteudo){

    
    let Elemento = document.getElementById(IdAlvo)
    Elemento.innerHTML+="<div class=' "+this._TipodeCard+"'>"+
    "<h1>"+titulo+"</h1><h3>"+Conteudo+"</h3></div>"
   

}
EscolherTipo(Tipo){
this._TipodeCard = Tipo

}
}

export default Card
