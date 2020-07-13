// transforma um array em um elemento.

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
        },
        {
            ident: 4,
            nome: 'Lando Norris',
            equipe: 'McLaren',
            tempoVolta: 91.5
        },
        {
            ident: 5,
            nome: 'Pierre Gasly',
            equipe: 'Toro Rosso',
            tempoVolta: 92.9
        },
    ];
}

let result = createObjectPilotos().map(p => p.tempoVolta).reduce(function(acumulador, atual){ // transformado tempo volta em um array simples, e somado os tempoVolta dos pilotos com reduce
    return acumulador + atual;
})

console.log(result);