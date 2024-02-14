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

    if (mod == 'cripto'){
        cripto(text)
    }
    else if (mod == 'descripto'){
        alert('Descriptografar')
    }
}

function cripto(text){
    document.getElementById('content__tertiary__text').innerHTML = text
}
