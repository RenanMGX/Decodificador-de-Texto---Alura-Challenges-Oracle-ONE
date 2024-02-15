function response(mod){
    let text = document.getElementById('text_area').value
    if (text == ''){
        document.getElementById('msg_notfound').innerHTML = "Nenhuma mensagem encontrada";
        document.getElementById('content__secondary').style = "display: flex";
        document.getElementById('content__tertiary').style = "display: none";
        return
    } else {
        document.getElementById('msg_notfound').innerHTML = "";
        document.getElementById('content__secondary').style = "display: none";
        document.getElementById('content__tertiary').style = "display: flex";

    }

    document.getElementById('text_area').value = ''
    if (mod == 'cripto'){
        cripto(text)
    }
    else if (mod == 'descripto'){
        descripto(text)
    }
}

function cripto(text){
    text = text.replace('e', 'enter')
    text = text.replace('i', 'imes')
    text = text.replace('a', 'ai')
    text = text.replace('o', 'ober')
    text = text. replace('u', 'ufat')
    document.getElementById('response').innerHTML = text
}

function descripto(text){
    text = text.replace('enter', 'e')
    text = text.replace('imes', 'i')
    text = text.replace('ai', 'a')
    text = text.replace('ober', 'o')
    text = text.replace('ufat', 'u')
    document.getElementById('response').innerHTML = text
}

function copiar(){
    let textCopia = document.getElementById('response').innerHTML
    navigator.clipboard.writeText(textCopia)
    console.log("texto copiado")
    alert("texto copiado")
}
