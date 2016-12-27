export class ResumoParticipanteExterno {
    constructor(
        public categoria: string,
        public total: number
    ) { }
}

export class ParticipanteExterno {
    constructor(
        public id: number,
        public nome: string,
        public categoria: string
    ) { }
}

export class DetalheParticipanteExterno {
    constructor(
        public id: number,
        public nome: string,
        public email: string,
        public telefone: string,
        public nomeIes: string,
        public nomePrograma: string,
        public abreviaturas: { nome: string }[],
        public nacionalidade: string,
        public nivel: string,
        public anoTitulacao: string,
        public areaConhecimento: string,
        public nomeIesTitulacao: string,
        public nomePaisTitulacao: string,
        public nomeTipoVinculo: string,
        public nomeRegimeTrabalho: string,
        public inicioVinculoPrograma: number,
        public idCategoria: number,
        public nomeCategoria: string,
        public anoBase: number,
        public mestradoAcademico: number,
        public mestradoProfissional: number,
        public doutorado: number,
        public monografiaEmGraduacao: number,
        public disciplinasGraduacao: number,
        public iniciacaoCientifica: number,
        public tutoria: number,
        public chAnualGraduacao: number
    ) { }
}

export class ParticipanteExternoPorProjeto {
    constructor(
        public id: number,
        public nome: string,
        public email: string,
        public telefone: string
    ) { }
}

let resumoParticipanteExternos = [{
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

let detalheParticipanteExterno = [{
    "id": 28270,
    "nome": "AFRANIO GALDINO DE ARAUJO",
    "email": "EMAIL@CAPES.GOV.BR",
    "telefone": "(61) 3333-3333",
    "nomeIes": "UNIVERSIDADE FEDERAL DO RIO GRANDE DO NORTE (UFRN)",
    "nomePrograma": "ADMINISTRAÇÃO (23001011007P0)",
    "abreviaturas": [{"nome":"ARAUJO, A. G."}, {"nome":"ARAÚJO, A. G."}, {"nome":"ARAÚJO, Afrânio G. de"}],
    "nacionalidade": "Brasileiro",
    "nivel": "Doutorado",
    "anoTitulacao": "2009",
    "areaConhecimento": "ENGENHARIA DE PRODUÇÃO",
    "nomeIesTitulacao": "UNIVERSIDADE FEDERAL DE PERNAMBUCO",
    "nomePaisTitulacao": "Brasil",
    "nomeTipoVinculo": "Servidor Público",
    "nomeRegimeTrabalho": "Dedicação Exclusiva",
    "inicioVinculoPrograma": 444538740000,
    "idCategoria": 1,
    "nomeCategoria": "PERMANENTE",
    "anoBase": 2014,
    "mestradoAcademico": 6,
    "mestradoProfissional": 0,
    "doutorado": 1,
    "monografiaEmGraduacao": 4,
    "disciplinasGraduacao": 2,
    "iniciacaoCientifica": 0,
    "tutoria": 0,
    "chAnualGraduacao": 150
}, {
    "id": 28271,
    "nome": "MARIANO COUSINI DE LOYOLA",
    "email": "EMAIL@CAPES.GOV.BR",
    "telefone": "(61) 3333-3333",
    "nomeIes": "UNIVERSIDADE FEDERAL DO RIO DE JANEIRO(UFRJ)",
    "nomePrograma": "ENGENHARIA MECATRONICA (2300101100888)",
    "abreviaturas": [{"nome":"ARAUJO, A. G."}, {"nome":"ARAÚJO, A. G."}, {"nome":"ARAÚJO, Afrânio G. de"}],
    "nacionalidade": "Brasileiro",
    "nivel": "Doutorado",
    "anoTitulacao": "2009",
    "areaConhecimento": "ENGENHARIA DE PRODUÇÃO",
    "nomeIesTitulacao": "UNIVERSIDADE FEDERAL DE PERNAMBUCO",
    "nomePaisTitulacao": "Brasil",
    "nomeTipoVinculo": "Servidor Público",
    "nomeRegimeTrabalho": "Dedicação Exclusiva",
    "inicioVinculoPrograma": 444538740000,
    "idCategoria": 1,
    "anoBase": 2014,
    "nomeCategoria": "COLABORADOR",
    "mestradoAcademico": 6,
    "mestradoProfissional": 0,
    "doutorado": 1,
    "monografiaEmGraduacao": 4,
    "disciplinasGraduacao": 2,
    "iniciacaoCientifica": 0,
    "tutoria": 0,
    "chAnualGraduacao": 150
}];

let participantesExternosPorProjeto = [{
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

export function getResumoParticipanteExternos(params = <any>{}): ResumoParticipanteExterno[] {
    return resumoParticipanteExternos;
}

export function getParticipanteExternos(params = <any>{}): ParticipanteExterno[] {
    return docentes;
}

export function getDetalheParticipanteExternos(params = <any>{}): DetalheParticipanteExterno {
    return detalheParticipanteExterno[0];
}

export function getParticipantesExternosPorProjeto(params = <any>{}): ParticipanteExternoPorProjeto[] {
    return participantesExternosPorProjeto;
}
