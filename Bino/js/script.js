function EsMultiplo2(x) {
    let date = false
    if ((x % 2) == 0) {
        date = true;
    }
    return date;
}

function EsMultiplo3(x) {
    let date = false
    if ((x % 3) == 0) {
        date = true;
    }
    return date;
}

function EsMultiplo4(x) {
    let date = false
    if ((x % 4) == 0) {
        date = true;
    }
    return date;
}

function EsMultiplo5(x) {
    let date = false
    if ((x % 5) == 0) {
        date = true;
    }
    return date;
}

function detectMultiplo(arr, amount, n) {

    for( i = 0; i<n; i++ ){
        if(EsMultiplo2(arr[i]) == true){
            amount[0]++;
        }
        if(EsMultiplo3(arr[i]) == true){
            amount[1]++;
        }
        if(EsMultiplo4(arr[i]) == true){
            amount[2]++;
        }
        if(EsMultiplo5(arr[i]) == true){
            amount[3]++;
        }
    }
    
    return amount;
}

function print(amount, arr, n) {
    document.write('<table><tr><td><p>Entrada</p></td><td><p>Salida</p></td></tr>');
    document.write('<tr><td><p style="color: red;">' + n + '</p></br><p style="color: springgreen;">');
    for (i = 0; i < n; i++) {
        document.write(' ' + arr[i] + ' ');
    }
    document.write('</p></td><td>');
    for (i = 2; i <= 5; i++) {
        document.write('<p>La cantidad de multiplos de ' + i + ': ' + amount[i - 2] + '</p>');
    }
    document.write('</td></tr></table>');
}