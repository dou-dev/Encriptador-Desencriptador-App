const encryptText = (text)=>{
    if (!text){
        alert('La cadena esta vacia');
    }
    text = text.toLowerCase();
    let newChain = '';
    
    for (let i in text){
        if(text[i] === 'a' ){
            newChain =  newChain.concat('ai');
            continue;
        }
        if(text[i] === 'e' ){
            newChain = newChain.concat('enter')
            continue;
        }
        if(text[i] === 'i' ){
            newChain = newChain.concat('imes')
            continue;
        }
        if(text[i] === 'o' ){
            newChain = newChain.concat('ober')
            continue;
        }
        if(text[i] === 'u' ){
            newChain = newChain.concat('ufat')
            continue;
        }
        newChain = newChain.concat(text[i])
    }
    return newChain;
}


export {encryptText}