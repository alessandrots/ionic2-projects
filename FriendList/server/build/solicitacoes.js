"use strict";
var QuantitativoSolicitacoes = (function () {
    function QuantitativoSolicitacoes(id, quantidade) {
        this.id = id;
        this.quantidade = quantidade;
    }
    return QuantitativoSolicitacoes;
}());
exports.QuantitativoSolicitacoes = QuantitativoSolicitacoes;
var Solicitacao = (function () {
    function Solicitacao(id, numero, ano, instituicaoEnsino, programa, data, idSituacao, descricaoSituacao) {
        this.id = id;
        this.numero = numero;
        this.ano = ano;
        this.instituicaoEnsino = instituicaoEnsino;
        this.programa = programa;
        this.data = data;
        this.idSituacao = idSituacao;
        this.descricaoSituacao = descricaoSituacao;
    }
    return Solicitacao;
}());
exports.Solicitacao = Solicitacao;
var quantitativoSolicitacoes = [{
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
var solicitacoes = [{
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
    }];
function getQuantitativoSolicitacoes(params) {
    if (params === void 0) { params = {}; }
    return quantitativoSolicitacoes;
}
exports.getQuantitativoSolicitacoes = getQuantitativoSolicitacoes;
function getSolicitacoes(params) {
    if (params === void 0) { params = {}; }
    return solicitacoes;
}
exports.getSolicitacoes = getSolicitacoes;
//# sourceMappingURL=solicitacoes.js.map