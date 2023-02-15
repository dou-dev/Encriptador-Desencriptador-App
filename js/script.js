const input = document.querySelector('.input');
const btnEncript = document.querySelector('#button-encrypt');
const btnDecrypt = document.querySelector('#button-decrypt');
const aside = document.querySelector('.aside');
const asideImage = document.querySelector('.no-text');
const containerForm = document.querySelector('.form');



let message;
// encryptText
const encryptText = (text)=>{
    
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

// decryptText
const decryptText = (text)=>{
    
    text = text.toLowerCase();
    
    if (text.includes('ai')) text = text.replaceAll("ai", "a");   
    if (text.includes('enter')) text = text.replaceAll("enter", "e");    
    if (text.includes('imes')) text = text.replaceAll("imes", "i");
    if (text.includes('ober')) text = text.replaceAll("ober", "o");
    if (text.includes('ufat')) text = text.replaceAll("ufat", "u");
    
    return text;
} 
//
const mostrarAlerta = () =>{
    
    const alerta = `
        <p>la cadena esta vacia<p>
    `;
    const div = document.createElement('div');
    div.classList.add('alerta');
    div.innerHTML = alerta;
    containerForm.prepend(div);
    const divAlerta = document.querySelector('.alerta');

    setTimeout(() => {
        divAlerta.remove();
    }, 2000);

}

//crear mensaje html

const mostrarMessage= (message)=>{
    const textAside = document.querySelector('.text-aside');
    if(textAside){
        textAside.remove();
    }
    const html = `
        <div class="text-aside">
                <p class="message">${message}</p>
            <button id="btnCopy" class="btn btn-light">copiar</button>
        </div>
        `;
    const div = document.createElement('div');
    div.innerHTML = html;
    aside.append(div.firstElementChild);
    input.value ='';
}

btnEncript.addEventListener('click', () =>{
    message = encryptText(input.value);
    if (!message) {
        mostrarAlerta();
        return;
    } 
    asideImage.style.display = 'none';
    aside.style.display = 'block';

    mostrarMessage(message)
    const btnCopy = document.querySelector('#btnCopy');
    copyToClipBoard(message,btnCopy);

});

const copyToClipBoard = (content, btn) => {
    btn.addEventListener('click', () =>{
        navigator.clipboard.writeText(content)
        .then(() => {
        alert("Text copied to clipboard...")
    })
        .catch(err => {
        console.log('Something went wrong', err);
    })
    })

}


btnDecrypt.addEventListener('click', () => {
    message = decryptText(input.value);
    console.log(message);
    if (!message) {
        mostrarAlerta();
        return;
    } 
    aside.style.display = 'block';
    asideImage.style.display = 'none';
    mostrarMessage(message);
    const btnCopy = document.querySelector('#btnCopy');
    copyToClipBoard(message,btnCopy);

})

