let senquencia = {
    _valor: 1, // convenção
    get valor(){ return this._valor ++},
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor;
        }
    }
}

console.log(senquencia.valor, senquencia.valor);

senquencia.valor = 1000;

console.log(senquencia.valor, senquencia.valor);