import navComponente from "./nav.js"

import Banner from "./banner.js"


let Menus = ["Nome","Produtos","Contato"]
let nav = new navComponente();

nav.criarnovomenu("barra_01",Menus)
nav.criarBarraNavUsuario("barra_01","Home")

let B=new Banner ();
B.criarBanner("banner_1","<h1>Compra Rapida</h1> <br/> <h3>Compre Roupas Mais Rapido...</h3>")