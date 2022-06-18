console.log("%c@author "+"https://github.com/Quirin0","font-size:24px;background:grey;color:red;");
function sleep (milliseconds) {
return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const collection = document.querySelectorAll('[aria-label="Like"]');
async function likePost(){  
    for(let n = 0; n < collection.length; n++){
        if(collection[n].attributes['aria-label']="Like"){
        await sleep(5000);
        collection[n].click();
            }
        }
}
likePost();
