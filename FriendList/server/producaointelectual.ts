export class ResumoProducaoIntelectual {
    constructor(
        public categoria: string,
        public total: number
    ) { }
}

export class ProducaoIntelectual {
    constructor(
        public id: number,
        public nome: string,
        public categoria: string,
        public autor: string,
        public dataPublicacao: number,
        public inconsistente: boolean
    ) { }
}

export class DetalheProducaoIntelectual {
    constructor(
        public id: number,
        public nome: string,
        public categoria: string,
        public autor: string,
        public dataPublicacao: number,
        public subtipo: string,
        public tituloJornalRevista: string,
        public issn: string,
        public doi: string,
        public numeroPaginaInicial: number,
        public numeroPaginaFinal: number,
        public idioma: string,
        public divulgacao: string,
        public cidade: string,
        public estado: string,
        public url: string,
        public observacao: string,
        public idAreaConcentracao: number,
        public idLinhaPesquisa: number,
        public idProjetoPesquisa: number
    ) { }
}

let resumoProducoesIntelectuais = [{
    "categoria": "Artística",
    "total": 80
}, {
    "categoria": "Bibliográfica",
    "total": 16
}, {
    "categoria": "Técnica",
    "total": 30
}];

let producoesIntelectuais = [{
    "id": 1,
    "nome": "GOVERNANÇA DE PROJETOS DE SEGURANÇA",
    "categoria": "ARTÍSTICA",
    "autor": "DINAH DOS SANTOS TINOCO",
    "dataPublicacao": 1437503424350,
    "inconsistente": false
}, {
    "id": 2,
    "nome": "ESTRUTURA DE GOVERNANÇA DE MPEs",
    "categoria": "BIBLIOGRÁFICA",
    "autor": "HIRONOBU SANO",
    "dataPublicacao": 1437503424350,
    "inconsistente": false
}, {
    "id": 3,
    "nome": "A LÓGICA EFFECTUAL DE DECISÃO",
    "categoria": "TÉCNICA",
    "autor": "JOMARIA MATA DE LIMA ALLOUFA",
    "dataPublicacao": 1437503424350,
    "inconsistente": true
}, {
    "id": 4,
    "nome": "VANTAGEM COMPETITIVA ATRAVÉS",
    "categoria": "ARTÍSTICA",
    "autor": "LUCIANO FERREIRA",
    "dataPublicacao": 1437503424350,
    "inconsistente": false
}];

let detalheProducaoIntelectual = {
    "id": 1,
    "nome": "GOVERNANÇA DE PROJETOS DE SEGURANÇA",
    "categoria": "ARTÍSTICA",
    "autor": "DINAH DOS SANTOS TINOCO",
    "dataPublicacao": 1437503424350,
    "subtipo": "DESENVOLVIMENTO DE MATERIAL DIDÁTICO E INSTITUCIONAL",
    "tituloJornalRevista": "Idéias & Negócios",
    "issn": "298378942035359",
    "doi": null,
    "numeroPaginaInicial": 12,
    "numeroPaginaFinal": 45,
    "idioma": "Português",
    "divulgacao": "IMPRESSO",
    "cidade": "Natal",
    "estado": "RN",
    "url": null,
    "observacao": null,
    "idAreaConcentracao": 10001,
    "idLinhaPesquisa": 110001,
    "idProjetoPesquisa": 2
};

export function getResumoProducoesIntelectuais(params = <any>{}): ResumoProducaoIntelectual[] {
    return resumoProducoesIntelectuais;
}

export function getProducoesIntelectuais(params = <any>{}): ProducaoIntelectual[] {
    return producoesIntelectuais;
}

export function getDetalheProducaoIntelectual(params = <any>{}): DetalheProducaoIntelectual {
    return detalheProducaoIntelectual;
}
