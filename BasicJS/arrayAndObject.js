function createObjectPilotos(){
    return pilotos = [
        {
            ident: 1,
            nome: 'Vettel',
            equipe: 'Ferrari',
        },
        {
            ident: 2,
            nome: 'Verstappen',
            equipe: 'Red Bull'
        },
        {
            ident: 3,
            nome: 'Hamilton',
            equipe: 'Mercedes Benz'
        }
    ];
}

let piloto = {
    ident: 4,
    nome : 'Leclerc',
    equipe: 'Ferrari'
};

let pilotosPop = createObjectPilotos();

pilotosPop.pop(); // remove a ultima posição do array/object
console.log('Example Pop:');
console.log(pilotosPop);

let pilotosPush = createObjectPilotos();

pilotosPush.push(piloto); // adciona um novo array/object na ultima posição
console.log('Example Push:');
console.log(pilotosPush);

let pilotosShift = createObjectPilotos();
pilotosShift.shift(); // remove o primeiro elemento de um array/ objeto;
console.log('Example Shift:');
console.log(pilotosShift);

let pilotosUnShift = createObjectPilotos();
pilotosUnShift.unshift(piloto); // adiciona um novo array/object na primeira posição
console.log('Example UnShift:');
console.log(pilotosUnShift);

let pilotosSplice = createObjectPilotos();
pilotosSplice.splice(0, 0, piloto); // primeiro parametro adiciona na posição, segundo é para remover quantos obj, terceiro é o qual obj deseja adicionar;
console.log('Example Splice:');
console.log(pilotosSplice);
