export class ResumoDocente {
    constructor(
        public categoria: string,
        public total: number
    ) { }
}

export class Docente {
    constructor(
        public id: number,
        public nome: string,
        public categoria: string
    ) { }
}

export class DetalheDocente {
    constructor(
        public id: number,
        public nome: string,
        public email: string,
        public telefone: string,
        public nomeIes: string,
        public nomePrograma: string,
        public abreviaturas: string,
        public nacionalidade: string,
        public nivel: string,
        public anoTitulacao: string,
        public areaConhecimento: string,
        public nomeIesTitulacao: string,
        public idCategoria: number,
        public nomeCategoria: string
    ) { }
}

export class DocentePorProjeto {
    constructor(
        public id: number,
        public nome: string,
        public email: string,
        public telefone: string
    ) { }
}

let resumoDocentes = [{
    "categoria": "Permanente",
    "total": 80
}, {
    "categoria": "Visitante",
    "total": 16
}, {
    "categoria": "Colaborador",
    "total": 30
}];

let docentes = [{
    "id": 28270,
    "nome": "AFRANIO GALDINO DE ARAUJO",
    "categoria": "PERMANENTE"
}, {
    "id": 28255,
    "nome": "ANATALIA SARAIVA MARTINS RAMOS",
    "categoria": "COLABORADOR"
}, {
    "id": 28266,
    "nome": "ANDERSON LUIZ REZENDE MOL",
    "categoria": "PERMANENTE"
}, {
    "id": 28265,
    "nome": "ANTONIO SERGIO ARAUJO FERNANDES",
    "categoria": "PERMANENTE"
}, {
    "id": 28256,
    "nome": "DINAH DOS SANTOS TINOCO",
    "categoria": "PERMANENTE"
}, {
    "id": 28268,
    "nome": "HIRONOBU SANO",
    "categoria": "PERMANENTE"
}, {
    "id": 28261,
    "nome": "JOMARIA MATA DE LIMA ALLOUFA",
    "categoria": "COLABORADOR"
}, {
    "id": 95913,
    "nome": "LUCIANO FERREIRA",
    "categoria": "COLABORADOR"
}, {
    "id": 28267,
    "nome": "LUCIANO MENEZES BEZERRA SAMPAIO",
    "categoria": "PERMANENTE"
}, {
    "id": 28263,
    "nome": "MANOEL VERAS DE SOUSA NETO",
    "categoria": "PERMANENTE"
}, {
    "id": 28259,
    "nome": "MARIA ARLETE DUARTE DE ARAUJO",
    "categoria": "PERMANENTE"
}, {
    "id": 28264,
    "nome": "MAURO LEMUEL DE OLIVEIRA ALEXANDRE",
    "categoria": "PERMANENTE"
}, {
    "id": 28260,
    "nome": "MIGUEL EDUARDO MORENO ANEZ",
    "categoria": "COLABORADOR"
}, {
    "id": 28269,
    "nome": "VINICIO DE SOUZA E ALMEIDA",
    "categoria": "COLABORADOR"
}, {
    "id": 28262,
    "nome": "WASHINGTON JOSE DE SOUSA",
    "categoria": "COLABORADOR"
}];

let detalheDocente = [{
    "id": 28270,
    "nome": "AFRANIO GALDINO DE ARAUJO",
    "email": "EMAIL@CAPES.GOV.BR",
    "telefone": "(61) 3333-3333",
    "nomeIes": "UNIVERSIDADE FEDERAL DO RIO GRANDE DO NORTE (UFRN)",
    "nomePrograma": "ADMINISTRAÇÃO (23001011007P0)",
    "abreviaturas": "ARAÚJO, Afrânio G. de",//["ARAUJO, A. G.", "ARAÚJO, A. G.", "ARAÚJO, Afrânio G. de"],
    "nacionalidade": "Brasileiro",
    "nivel": "Doutorado",
    "anoTitulacao": "2009",
    "areaConhecimento": "ENGENHARIA DE PRODUÇÃO",
    "nomeIesTitulacao": "UNIVERSIDADE FEDERAL DE PERNAMBUCO",
    "idCategoria": 1,
    "nomeCategoria": "PERMANENTE"
}, {
    "id": 28271,
    "nome": "MARIANO COUSINI DE LOYOLA",
    "email": "EMAIL@CAPES.GOV.BR",
    "telefone": "(61) 3333-3333",
    "nomeIes": "UNIVERSIDADE FEDERAL DO RIO DE JANEIRO(UFRJ)",
    "nomePrograma": "ENGENHARIA MECATRONICA (2300101100888)",
    "abreviaturas": "ARAUJO, A. G.",//["ARAUJO, A. G.", "ARAÚJO, A. G.", "ARAÚJO, Afrânio G. de"],
    "nacionalidade": "Brasileiro",
    "nivel": "Doutorado",
    "anoTitulacao": "2009",
    "areaConhecimento": "ENGENHARIA DE PRODUÇÃO",
    "nomeIesTitulacao": "UNIVERSIDADE FEDERAL DE PERNAMBUCO",
    "idCategoria": 1,
    "nomeCategoria": "COLABORADOR"
}];

let docentesPorProjeto = [{
    "id": 28270,
    "nome": "AFRANIO GALDINO DE ARAUJO",
    "email": "EMAIL@CAPES.GOV.BR",
    "telefone": "(61) 3333-3333"
}, {
    "id": 28271,
    "nome": "MARIANO COUSINI DE LOYOLA",
    "email": "EMAIL@CAPES.GOV.BR",
    "telefone": "(61) 3333-3333"
}];

export function getResumoDocentes(params = <any>{}): ResumoDocente[] {
    return resumoDocentes;
}

export function getDocentes(params = <any>{}): Docente[] {
    return docentes;
}

export function getDetalheDocentes(params = <any>{}): DetalheDocente {
    return detalheDocente[0];
}

export function getDocentesPorProjeto(params = <any>{}): DocentePorProjeto[] {
    return docentesPorProjeto;
}
