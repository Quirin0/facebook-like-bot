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






// PC

async function apagarPub(){  
var listaBotoesMenu = 
document.querySelectorAll("div.xqcrz7y.x78zum5.x1qx5ct2.x1y1aw1k.x1sxyh0.xwib8y2.xurb0ha.xw4jnvo > div > div");

console.log("Publicações: "+ listaBotoesMenu.length);
        for(let i = 0; i < listaBotoesMenu.length; i++){
        
            var menu = document.querySelectorAll("div.xqcrz7y.x78zum5.x1qx5ct2.x1y1aw1k.x1sxyh0.xwib8y2.xurb0ha.xw4jnvo > div > div")[i];
            await sleep(1000);
            menu.click();
            await sleep(500);
            var botao = document.querySelector("div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div > div > div > div.x78zum5.x1iyjqo2.x1n2onr6.xdt5ytf > div > div:nth-child(11)");
            await sleep(1000);
            botao.click();
            await sleep(500);
            var confirmacao = document.querySelector("div.x1n2onr6.x1ja2u2z.x9f619.x78zum5.xdt5ytf.x2lah0s.x193iq5w.x1hlgzme.xvcs8rp.x1bpvpm7.xefnots.x13xjmei.xv7j57z > div > div > div > div:nth-child(1) > div > div");
            await sleep(1500);
            confirmacao.click();
            console.log("Apagando " + i + "/" + listaBotoesMenu.length);
            
        }
}

setInterval(apagarPub(), 12000);


// arquivar publicacao pc

function sleep (milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}


async function arquivarPub(){  
var listaBotoesMenu = 
document.querySelectorAll("div.xqcrz7y.x78zum5.x1qx5ct2.x1y1aw1k.x1sxyh0.xwib8y2.xurb0ha.xw4jnvo > div > div");

console.log("Publicações: "+ listaBotoesMenu.length);
        for(let i = 0; i <= listaBotoesMenu.length; i++){
        
            var menu = document.querySelectorAll("div.xqcrz7y.x78zum5.x1qx5ct2.x1y1aw1k.x1sxyh0.xwib8y2.xurb0ha.xw4jnvo > div > div")[i];
            await sleep(1000);
            menu.click();
            await sleep(500);
            var botao = document.querySelector("div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div > div > div > div.x78zum5.x1iyjqo2.x1n2onr6.xdt5ytf > div > div:nth-child(10)");
            await sleep(1000);
            botao.click();
            console.log("Arquivando " + i + "/" + listaBotoesMenu.length);
            
        }
   
}

setInterval(arquivarPub(), 15000);
