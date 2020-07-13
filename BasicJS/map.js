function createObjectPilotos(){
    return pilotos = [
        {
            ident: 1,
            nome: 'Vettel',
            equipe: 'Ferrari',
            tempoVolta: 90.3
        },
        {
            ident: 2,
            nome: 'Verstappen',
            equipe: 'Red Bull',
            tempoVolta: 90.4,
        },
        {
            ident: 3,
            nome: 'Hamilton',
            equipe: 'Mercedes Benz',
            tempoVolta: 90.0
        }
    ];
}

let pilotosCallBack = createObjectPilotos();

let result = pilotosCallBack.map(function(e){ // mapea um objeto para outro, a regra eh se no 1º objeto contem x tamanho, o segundo ira conter a mesma quantidade,
    // o que muda é o valor, ali no exemplo foi adotado para retornar o dobro da volta dos pilotos.
    return e.tempoVolta * 2;
});
console.log('Callback:');
console.log(result);