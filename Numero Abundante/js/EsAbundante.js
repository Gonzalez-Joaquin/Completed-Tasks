function EsAbundante(n) {
    let aux = 0;
    let flag = false;
    for (i = 0; i <= (n / 2); i++) {
        if ((n % i) == 0) {
            aux += i;
        }
    }
    if (aux > n) {
        flag = true;
    }
    return flag;
}