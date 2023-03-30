function print(ident) {
    let verify = document.getElementById('verify');
    console.log(ident);
    if (ident == true) {
        verify.innerHTML = 'Es feliz';
    } if (ident == false) {
        verify.innerHTML = 'Es Infeliz';
    }
}

function EsFeliz(x) {
    let flag;
    if (x < 10) {
        flag = false;
        if (x == 1 || x == 7) {
            flag = true;
        }
        print(flag);
    }

    if (x > 9) {
        let result = 0;
        let aux = x + "";
        for (let i = 0; i < aux.length; i++) {
            result += Math.pow(aux[i], 2);
        }
        return EsFeliz(result);
    }
}