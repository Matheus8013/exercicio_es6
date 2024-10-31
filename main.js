const listaDeAlunaosENotas = [
    Aluno1 = {
        nome : 'Ana',
        nota : 8
    },
    Aluno2 = {
        nome : 'Bruno',
        nota : 9
    },
    Aluno3 = {
        nome : 'Beatriz',
        nota : 6
    },
    Aluno4 = {
        nome : 'Nicolas',
        nota : 3
    },
    Aluno5 = {
        nome : 'Jorge',
        nota : 5
    },
    Aluno6 = {
        nome : 'Amanda',
        nota : 6
    },
    Aluno7 = {
        nome : 'Ricardo',
        nota : 4
    },
    Aluno8 = {
        nome : 'Bruna',
        nota : 7
    },
    
]

const alunosAprovados = listaDeAlunaosENotas.filter((item) => {
    return item.nota >= 6
})

console.log(alunosAprovados)

