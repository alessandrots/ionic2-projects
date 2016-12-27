export class QuantitativoSolicitacoes {
    constructor(
        public id: number,
        public quantidade: number
    ) {

    }
}

export class Solicitacao {
    constructor(public id: number,
                public numero: number,
                public ano: number,
                public instituicaoEnsino: string,
                public programa: string,
                public data: number,
                public idSituacao: number,
                public descricaoSituacao: string) {

    }
}

let quantitativoSolicitacoes = [{
    "id": 1,
    "quantidade": 1
}, {
    "id": 3,
    "quantidade": 4
}, {
    "id": 7,
    "quantidade": 8
}, {
    "id": 11,
    "quantidade": 3
}];

let solicitacoes = [{
    "id": 3320,
    "numero": 991,
    "ano": 2015,
    "instituicaoEnsino": "UNIVERSIDADE FEDERAL DO RIO GRANDE NORTE (UFRJ)",
    "programa": "TESTE1",
    "data": 1437503424350,
    "idSituacao": 1,
    "descricaoSituacao": "Enviada para a Pró-Reitoria"
}, {
    "id": 3321,
    "numero": 992,
    "ano": 2015,
    "instituicaoEnsino": "UNIVERSIDADE FEDERAL DO RIO GRANDE NORTE (UFMA)",
    "programa": "TESTE2",
    "data": 1437503424350,
    "idSituacao": 1,
    "descricaoSituacao": "Enviada para a Pró-Reitoria"
}, {
    "id": 3322,
    "numero": 993,
    "ano": 2015,
    "instituicaoEnsino": "UNIVERSIDADE FEDERAL DO RIO GRANDE NORTE (UFRN)",
    "programa": "TESTE3",
    "data": 1437503424350,
    "idSituacao": 1,
    "descricaoSituacao": "Enviada para a Pró-Reitoria"
}]

export function getQuantitativoSolicitacoes(params = <any>{}): QuantitativoSolicitacoes[] {
    return quantitativoSolicitacoes;
}

export function getSolicitacoes(params = <any>{}): Solicitacao[] {
    return solicitacoes;
}
