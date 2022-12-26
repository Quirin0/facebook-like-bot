function sleep (milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}
const listaBotoesMenu = document.querySelectorAll("._4s19.sec");
console.log("Publicações: "+ listaBotoesMenu.length);
async function apagarPub(){  
    for(let i = 0; i < listaBotoesMenu.length; i++){
        
        var menu = document.querySelectorAll("._4s19.sec")[i];
        menu.click();
        await sleep(500);
        var botao = document.querySelectorAll("._5c0f > a:nth-child(23)")[i];
        botao.click();
        await sleep(500);
        
    }
    excluirPub();
}
async function excluirPub(){
    for(let i = 0; i < listaBotoesMenu.length; i++){
        var excluir = document.querySelectorAll("._4g34 > a[aria-label='Excluir']")[i];
            excluir.click();
            console.log("Apagando " + i + "/" + listaBotoesMenu.length);
    }
}
apagarPub();
