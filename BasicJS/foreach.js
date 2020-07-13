function createObjectPilotos(){
    return listPilotos = [
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

let pilotos = createObjectPilotos();

let resultCallBack = undefined;

pilotos.forEach(function(element){
    if(element.ident == 1){
        resultCallBack = element;
    }
});
console.log('callback:');
console.log(resultCallBack);


let resultArrow = undefined;

pilotos.forEach(obj => {
    if(obj.ident == 3){
        resultArrow = obj;
    }
});
console.log('arrow:');
console.log(resultArrow);


