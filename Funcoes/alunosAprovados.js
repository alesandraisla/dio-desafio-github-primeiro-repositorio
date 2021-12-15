/*
1. Criar uma função que recebe o array alunos e um número que irá representar a média final
2. Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à media final
3. Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.
*/


const alunos = [
    {
        nome: 'Lara',
        nota: 9,
        disciplina: 'Lógica de Programação'
    },
    {
        nome:'Nick',
        nota: 8.8,
        disciplina: 'Lógica de Programação'
    },
    {
        nome: 'Suzy',
        nota: 4,
        disciplina: 'Orientação a Objeto'
    },
];
function calculoAlunosAprovados(notas, media) {
    let alunosAprovados = [];

    // for (let index = 0; index < notas.length; index++) {
    //     if(notas[i].nota >= media) {
    //         alunosAprovados.push(notas[i].nome);
    //     } 
    // }
    // return alunosAprovados;
    for (let index = 0; index < notas.length; index++) {
        const {nota, nome} = notas[index];

        if(nota >= media) {
            alunosAprovados.push(nome);
        }
    }
    return alunosAprovados;
}

console.log(calculoAlunosAprovados(alunos, 7))