class navComponente {
    criarnovomenu(IDdomenu, Elementos) {
        let MenuEscolhido = document.getElementById(IDdomenu)
        MenuEscolhido.innerHTML += "<ul id= 'Menu_02'> </ul>"
        let MenuAcrescentar = document.getElementById("Menu_02")

Elementos.forEach(MenuAdd => {
    MenuAcrescentar.innerHTML+="<li><a href='#'>"+MenuAdd+"<a/></li>"
    
});

    }

    criarBarraNavUsuario(IDdomenu, Localizaçao) {
        let MenuEscolhido = document.getElementById(IDdomenu)
        MenuEscolhido.innerHTML += "<div class='localNav'> <h4>" + Localizaçao + "</h4></div>"

    }
}
export default navComponente