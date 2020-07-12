let pessoa = {
    nome : 'Rebeca',
    idade: 12,
    peso: 25.5,
};

let keys = Object.keys(pessoa); // pega toda a keys de um objeto;
let values = Object.values(pessoa); // pega todos os valores dentro do obj
let entries = Object.entries(pessoa); // pega todo os arrays de um sub array
console.log(keys);

console.log(values);

console.log(entries);

Object.defineProperty(pessoa, 'dataNascimento', { // define propriedades de um object
    enumerable: true, // para ser listado
    writable: false, // para modificar, se falso não podera atribuir valor
    value: '01/01/2019'
})

console.log(pessoa.dataNascimento);

let dest = {a: 1};
let obj1 = {b: 2, t:5};
let obj2 = {c: 3, a:4}

let assing = Object.assign(dest, obj1, obj2) // primeiro parametro é o objeto que recebera os proximos obj, dest recebera obj1 e obj2, caso dest tenha alguma propriedade
// que se repete em obj1 e obj2, ele sobreescreve o obj de dest., 

console.log(assing);
