function EsNarciso(x) {
    let num = x.toString();
    let aux = new Array(num.length);
    let result = 0;
    let flag = false;

    for (i = 0; i < num.length; i++) {
        aux[i] = num[i];
        aux[i] = Math.pow(aux[i], 3);
        result += aux[i];
    }

    if (result == x) {
        flag = true;
    }

    return flag;
}