let botao = document.querySelector("#add");
let input = document.querySelector("#input");
let lista = document.querySelector("#lista");
let y = 0;


botao.addEventListener("click",criarItem);

function criarItem(){

    //Variaveis//
    let item = document.createElement("li");
    y = y + 1;
    item.setAttribute("id",y);
    let removeButton = document.createElement("button")

    //Eventlistener//
    removeButton.addEventListener("click",remover)
    

    //TextContent//
    item.textContent = input.value;
    removeButton.textContent = "X";

    //appendChields//
    item.appendChild(removeButton)
    lista.appendChild(item);
}


function remover(){
    let item = this.parentNode
    lista.removeChild(item)
}






