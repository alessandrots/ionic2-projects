"use strict";
var FinanciadorPessoaFisica = (function () {
    function FinanciadorPessoaFisica(id, nome, cpf) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
    }
    return FinanciadorPessoaFisica;
}());
exports.FinanciadorPessoaFisica = FinanciadorPessoaFisica;
var FinanciadorPessoaJuridica = (function () {
    function FinanciadorPessoaJuridica(id, nome, cnpj) {
        this.id = id;
        this.nome = nome;
        this.cnpj = cnpj;
    }
    return FinanciadorPessoaJuridica;
}());
exports.FinanciadorPessoaJuridica = FinanciadorPessoaJuridica;
var ProgramaFomento = (function () {
    function ProgramaFomento(id, nome) {
        this.id = id;
        this.nome = nome;
    }
    return ProgramaFomento;
}());
exports.ProgramaFomento = ProgramaFomento;
var DetalheFinanciador = (function () {
    function DetalheFinanciador(id, nome, tipo, cpfCnpj, status, pais, site, programasFomento) {
        this.id = id;
        this.nome = nome;
        this.tipo = tipo;
        this.cpfCnpj = cpfCnpj;
        this.status = status;
        this.pais = pais;
        this.site = site;
        this.programasFomento = programasFomento;
    }
    return DetalheFinanciador;
}());
exports.DetalheFinanciador = DetalheFinanciador;
var financiadoresPessoaFisica = [{
        "id": 1,
        "nome": "DINAH DOS SANTOS TINOCO",
        "cpf": "111.111.111-11"
    }, {
        "id": 2,
        "nome": "HIRONOBU SANO",
        "cpf": "222.222.222-22"
    }];
var financiadoresPessoaJuridica = [{
        "id": 1,
        "nome": "EMPRESA 1 LTDA",
        "cnpj": "111.111.111/0001-11"
    }, {
        "id": 2,
        "nome": "EMPRESA 2 LTDA",
        "cnpj": "222.222.222/0001-22"
    }];
var detalheFinanciador = {
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
function getFinanciadoresPessoaFisica(params) {
    if (params === void 0) { params = {}; }
    return financiadoresPessoaFisica;
}
exports.getFinanciadoresPessoaFisica = getFinanciadoresPessoaFisica;
function getFinanciadoresPessoaJuridica(params) {
    if (params === void 0) { params = {}; }
    return financiadoresPessoaJuridica;
}
exports.getFinanciadoresPessoaJuridica = getFinanciadoresPessoaJuridica;
function getDetalheFinanciador(params) {
    if (params === void 0) { params = {}; }
    return detalheFinanciador;
}
exports.getDetalheFinanciador = getDetalheFinanciador;
//# sourceMappingURL=financiador.js.map