import navComponente from "./nav.js"


let Menus = ["Nome","Produtos","Contato"]
let nav = new navComponente();

nav.criarnovomenu("barra_01",Menus)
nav.criarBarraNavUsuario("barra_01","Home")