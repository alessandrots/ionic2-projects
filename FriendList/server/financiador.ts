export class FinanciadorPessoaFisica {
    constructor(
        public id: number,
        public nome: string,
        public cpf: string
    ) { }
}

export class FinanciadorPessoaJuridica {
    constructor(
        public id: number,
        public nome: string,
        public cnpj: string
    ) { }
}

export class ProgramaFomento {
    constructor(
        public id: number,
        public nome: string
    ) { }
}

export class DetalheFinanciador {
    constructor(
        public id: number,
        public nome: string,
        public tipo: number,
        public cpfCnpj: string,
        public status: string,
        public pais: string,
        public site: string,
        public programasFomento: Array<ProgramaFomento>
    ) { }
}

let financiadoresPessoaFisica = [{
    "id": 1,
    "nome": "DINAH DOS SANTOS TINOCO",
    "cpf": "111.111.111-11"
}, {
    "id": 2,
    "nome": "HIRONOBU SANO",
    "cpf": "222.222.222-22"
}];

let financiadoresPessoaJuridica = [{
    "id": 1,
    "nome": "EMPRESA 1 LTDA",
    "cnpj": "111.111.111/0001-11"
}, {
    "id": 2,
    "nome": "EMPRESA 2 LTDA",
    "cnpj": "222.222.222/0001-22"
}];

let detalheFinanciador = {
    "id": 1,
    "nome": "EMPRESA 1 LTDA",
    "categoria": "ARTÍSTICA",
    "tipo": 2,
    "cpfCnpj": "222.222.222/0001-22",
    "status": "Federal",
    "pais": "Brasil",
    "site": "www.empresa.com.br",
    "programasFomento": [{
        "id": 1,
        "nome": "BOLSA DE MESTRADO GM"
    }, {
        "id": 2,
        "nome": "Bolsa de Mestrado GM e Doutorado GM"
    }, {
        "id": 3,
        "nome": "Programa Institucional de Bolsas e Iniciação Científica"
    }]
};

export function getFinanciadoresPessoaFisica(params = <any>{}): FinanciadorPessoaFisica[] {
    return financiadoresPessoaFisica;
}

export function getFinanciadoresPessoaJuridica(params = <any>{}): FinanciadorPessoaJuridica[] {
    return financiadoresPessoaJuridica;
}

export function getDetalheFinanciador(params = <any>{}): DetalheFinanciador {
    return detalheFinanciador;
}
