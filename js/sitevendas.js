import navComponente from "./nav.js"
import Banner from "./banner.js"
import card from "./cards.js"

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
setInterval(() => {

    if(BannerIndex >=2){
    BannerIndex = 0
}
B.ModificaBanner("banner_1",BannerInfo,BannerIndex)
BannerIndex+=1
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
CardProduto.CriarCards("Portacard1","Tênis da adidas","É um tênis de alta performance")

let cardVendas = new card ()
cardVendas.EscolherTipo("cardProduto sb")
cardVendas.CriarCards("Portacard1","Produto a venda","Venda do produto")


let cardNovo = new card ()
cardVendas.EscolherTipo("card03 sb")
cardVendas.CriarCards("Portacard1","Produto a venda","Venda do produto")
cardVendas.CriarCards("Portacard1","Produto a venda","Venda do produto")
