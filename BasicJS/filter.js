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

let result = createObjectPilotos().filter(function(piloto){ // filtra um objeto .
    if(piloto.tempoVolta > 91.0){
        return piloto;
    }
})

console.log(result);