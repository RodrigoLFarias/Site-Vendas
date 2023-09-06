import card from "./cards.js"



class paginas{
    PaginaPrincipal = document.getElementById("pagina")
    Cards = new card()
 PaginaDeProduto(){
     this.PaginaPrincipal.innerHTML = "Oi Rodrigo"
     this.inserirConteudo("<h1>Conteudo</h1>")
     this.inserirConteudo("<div id='vitrineprodutos'></div>")
     this.Cards.CriarCards("vitrineprodutos","tenis da nike","produto novo da loja")

 }
 inserirConteudo(Conteudo){
     this.PaginaPrincipal.innerHTML+=Conteudo
 }

}
export default paginas