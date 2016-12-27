export class AreaConcentracao {
    constructor(public idAreaConcentracao:number, public descricao: string, public dataInicio:number, public dataFim:number) {
    }
}

let areaConcentracaoJson= [
    {
      "idAreaConcentracao": 10001,
      "descricao": "GESTÃO ORGANIZACIONAL",
      "dataInicio": 1392343200000,
      "dataFim": 1469997604070
    }, {
      "idAreaConcentracao": 10002,
      "descricao": "POLÍTICAS E GESTÃO PÚBLICAS",
      "dataInicio": 1392343200000,
      "dataFim": 1469997604070
    }, {
      "idAreaConcentracao": 10003,
      "descricao": "TESTE...",
      "dataInicio": 1392343200000,
      "dataFim": 1469997604070
    }
];

let areaConcentracaoPorProjeto= [{
    "idAreaConcentracao": 10001,
    "descricao": "GESTÃO ORGANIZACIONAL",
    "dataInicio": 1392343200000,
    "dataFim": 1469997604070
}];

let areaConcentracaoPorDisciplina= [{
    "idAreaConcentracao": 10001,
    "descricao": "GESTÃO ORGANIZACIONAL",
    "dataInicio": 1392343200000,
    "dataFim": 1469997604070
}, {
    "idAreaConcentracao": 10002,
    "descricao": "POLÍTICAS E GESTÃO PÚBLICAS",
    "dataInicio": 1392343200000,
    "dataFim": 1469997604070
}];

export function getListaAreasDeConcentracao(params = <any>{}): AreaConcentracao [] {
    return areaConcentracaoJson;
}

export function getAreasDeConcentracaoPorProjeto(params = <any>{}): AreaConcentracao[] {
    return areaConcentracaoPorProjeto;
}

export function getAreasDeConcentracaoPorDisciplina(params = <any>{}): AreaConcentracao[] {
    return areaConcentracaoPorDisciplina;
}

export function getAreaDeConcentracaoPorId(params = <any>{}): AreaConcentracao {
    return areaConcentracaoJson[0];
}