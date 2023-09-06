import navComponente from "./nav.js"
import Banner from "./banner.js"
import card from "./cards.js"
import paginas from "./paginas.js"

let pag = new paginas()


function mainPage(){
let Menus = ["Nome","Produtos","Contato"]
let nav = new navComponente();
let CardProduto = new card

nav.criarnovomenu("barra_01",Menus)
nav.criarBarraNavUsuario("barra_01","Home")

let B=new Banner ();
let BannerInfo=["<h1> Compra Rápida</h1> <br/> <h3>Compre Roupas Mais Rápido...</h3>","<h1> Moda</h1>","<h1>roupas masculinas"]
B.criarBanner("banner_1",)
B.ModificaBanner("banner_1",BannerInfo,1)


let BannerIndex = 0
let bannnerTime = setInterval(() => {
    try{

    


    if(BannerIndex >=2){
    BannerIndex = 0
}
B.ModificaBanner("banner_1",BannerInfo,BannerIndex)
BannerIndex+=1
    
}
catch{
console.log("Banner foi parado por algum erro")
clearInterval(bannnerTime)
}
},9000)


document.getElementById("btBannerProximo").addEventListener ("click",()=>{

    if(BannerIndex >= 2){
       BannerIndex=0
    }
    else{
        BannerIndex+=1
    }
    B.ModificaBanner("banner_1",BannerInfo,BannerIndex)
})

document.getElementById ("btBannerAnterior").addEventListener ("click",()=>{


if(BannerIndex <=0){
   BannerIndex=2
 }
 else{
     BannerIndex-=1
 }
 B.ModificaBanner("banner_1",BannerInfo,BannerIndex)

})

CardProduto.EscolherTipo("card sb")

CardProduto.CriarCards("Portacard1","Tênis da adidas","É um tênis de alta performance")
CardProduto.CriarCards("Portacard1","Tênis da Nike","É um tênis de baixa performance")

let cardVendas = new card ()
cardVendas.EscolherTipo("cardProduto sb")
cardVendas.CriarCards("Portacard1","Produto a venda","Venda do produto")


let cardNovo = new card ()
cardVendas.EscolherTipo("card03 sb")
cardVendas.CriarCards("Portacard1","Produto a venda","Venda do produto")
cardVendas.CriarCards("Portacard1","Produto a venda","Venda do produto")
}
mainPage()

function produtosPage(){
    let pagina = document.getElementById("pagina")
    pagina.innerHTML = ""
    document.getElementsByClassName("localNav")[0].getElementsByTagName("h4")[0].innerHTML = "Produtos"
    pag.PaginaDeProduto()
}

let HomeMenu = document.getElementById("Menu_02").getElementsByTagName("li")[0].getElementsByTagName("a")[0]
HomeMenu.addEventListener("click",()=>{window.location.reload()})




let ProdutoMenu = document.getElementById("Menu_02").getElementsByTagName("li")[1].getElementsByTagName("a")[0]
ProdutoMenu.addEventListener("click",produtosPage)