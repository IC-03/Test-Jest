function power(a,b){
    potencia = 1;
    base = a;
    exponente = b;
    for (let i = 0; i < b; i++ ){
        potencia = base*potencia;
    }
    return potencia;
}

module.exports = power;