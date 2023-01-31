
const decryptText = (text)=>{
    
    if (!text){
        alert('La cadena esta vacia');
    }
    text = text.toLowerCase();
    
    if (text.includes('ai')) text = text.replaceAll("ai", "a");   
    if (text.includes('enter')) text = text.replaceAll("enter", "e");    
    if (text.includes('imes')) text = text.replaceAll("imes", "i");
    if (text.includes('ober')) text = text.replaceAll("ober", "o");
    if (text.includes('ufat')) text = text.replaceAll("ufat", "u");
    
    return text;
} 
