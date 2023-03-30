function EsDefectivo(x) {
    let num = 0;
    for (i = 1; i <= x / 2; i++) {
        if ( (x % i) == 0){
            num += i;
        }
    }
    if(num < x){
        return true;
    }
}