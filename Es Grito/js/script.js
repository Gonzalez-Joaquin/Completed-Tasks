function EsGrito(text){
    let replace = document.getElementById('replaceText');
    if(text.charAt(text.length-1) == '!'){
        replace.innerHTML = 'Es Grito';
    }if(text.charAt(text.length-1) != '!'){
        replace.innerHTML = 'No es grito';
    }
}