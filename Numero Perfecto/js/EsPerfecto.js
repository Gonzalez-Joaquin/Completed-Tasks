function EsPerfecto(x) {
    let aux = 0;
    let flag = false;
    for (i = 1; i <= (x / 2); i++) {
        if ((x % i) == 0) {
            aux += i;
            if (aux == x) {
                flag = true;
            }
        }
    }
    return flag;
}