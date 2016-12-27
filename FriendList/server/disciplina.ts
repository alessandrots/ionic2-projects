export class DisciplinasDoutorado {
    constructor(
        public id: number,
        public nome: string,
        public inicioVigencia: number,
        public fimVigencia: number
    ) { }
}

export class DisciplinasMestrado {
    constructor(
        public id: number,
        public nome: string,
        public inicioVigencia: number,
        public fimVigencia: number
    ) { }
}

export class Disciplina {
    constructor(
        public id: number,
        public nome: string,
        public inicioVigencia: number,
        public fimVigencia: number,
        public ementa: string,
        public sigla: string,
        public numero: string,
        public creditos: string,
        public curso: string
    ) { }
}

let disciplinasDoutorado = [{
    "id": 1,
    "nome": "Análise organizacional",
    "inicioVigencia": 1437503424350,
    "fimVigencia": 1437503424350
}, {
    "id": 2,
    "nome": "Análise qualitativa de dados I",
    "inicioVigencia": 1437503424350,
    "fimVigencia": 1437503424350
}, {
    "id": 3,
    "nome": "Análise qualitativa de dados II",
    "inicioVigencia": 1437503424350,
    "fimVigencia": null
}, {
    "id": 4,
    "nome": "Apreçamento de ativos",
    "inicioVigencia": 1437503424350,
    "fimVigencia": 1437503424350
}, {
    "id": 5,
    "nome": "Comportamento organizacional",
    "inicioVigencia": 1437503424350,
    "fimVigencia": 1437503424350
}, {
    "id": 6,
    "nome": "Economia de estratégia",
    "inicioVigencia": 1437503424350,
    "fimVigencia": null
}];

let disciplinasMestrado = [{
    "id": 1,
    "nome": "Análise organizacional",
    "inicioVigencia": 1437503424350,
    "fimVigencia": 1437503424350
}, {
    "id": 2,
    "nome": "Análise qualitativa de dados I",
    "inicioVigencia": 1437503424350,
    "fimVigencia": 1437503424350
}, {
    "id": 3,
    "nome": "Análise qualitativa de dados II",
    "inicioVigencia": 1437503424350,
    "fimVigencia": null
}, {
    "id": 4,
    "nome": "Apreçamento de ativos",
    "inicioVigencia": 1437503424350,
    "fimVigencia": 1437503424350
}, {
    "id": 5,
    "nome": "Comportamento organizacional",
    "inicioVigencia": 1437503424350,
    "fimVigencia": 1437503424350
}, {
    "id": 6,
    "nome": "Economia de estratégia",
    "inicioVigencia": 1437503424350,
    "fimVigencia": null
}];

let disciplinas = [{
    "id": 1,
    "nome": "Análise qualitativa de dados II",
    "inicioVigencia": 1437503424350,
    "fimVigencia": 1437503424350,
    "ementa": "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
    "sigla": "PGA",
    "numero": "3224",
    "creditos": "2",
    "curso": "Administração (30 horas)"
}];

export function getDisciplinasDoutorado(params = <any>{}): DisciplinasDoutorado[] {
    return disciplinasDoutorado;
}

export function getDisciplinasMestrado(params = <any>{}): DisciplinasDoutorado[] {
    return disciplinasMestrado;
}

export function getDisciplina(params = <any>{}): Disciplina {
    return disciplinas[0];
}
