export class Contador {
    constructor(
        public docentes: number,
        public discentes: number,
        public turmas: number,
        public producaoIntelectual: number,
        public projetoPesquisa: number,
        public participanteExterno: number,
        public areasConcentracao: number,
        public linhasPesquisa: number,
        public disciplinas: number,
        public teseDissertacoes: number
    ) {

    }
}

let contador = {
    "docentes": 1,
    "discentes": 1,
    "turmas": 1,
    "producaoIntelectual": 1,
    "projetoPesquisa": 1,
    "participanteExterno": 1,
    "areasConcentracao": 1,
    "linhasPesquisa": 1,
    "disciplinas": 1,
    "teseDissertacoes": 1
};

export function getContador(params = <any>{}): Contador {
    return contador;
}
