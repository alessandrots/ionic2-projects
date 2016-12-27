"use strict";
var AreaConcentracao = (function () {
    function AreaConcentracao(idAreaConcentracao, descricao, dataInicio, dataFim) {
        this.idAreaConcentracao = idAreaConcentracao;
        this.descricao = descricao;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
    }
    return AreaConcentracao;
}());
exports.AreaConcentracao = AreaConcentracao;
var areaConcentracaoJson = [
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
var areaConcentracaoPorProjeto = [{
        "idAreaConcentracao": 10001,
        "descricao": "GESTÃO ORGANIZACIONAL",
        "dataInicio": 1392343200000,
        "dataFim": 1469997604070
    }];
var areaConcentracaoPorDisciplina = [{
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
function getListaAreasDeConcentracao(params) {
    if (params === void 0) { params = {}; }
    return areaConcentracaoJson;
}
exports.getListaAreasDeConcentracao = getListaAreasDeConcentracao;
function getAreasDeConcentracaoPorProjeto(params) {
    if (params === void 0) { params = {}; }
    return areaConcentracaoPorProjeto;
}
exports.getAreasDeConcentracaoPorProjeto = getAreasDeConcentracaoPorProjeto;
function getAreasDeConcentracaoPorDisciplina(params) {
    if (params === void 0) { params = {}; }
    return areaConcentracaoPorDisciplina;
}
exports.getAreasDeConcentracaoPorDisciplina = getAreasDeConcentracaoPorDisciplina;
function getAreaDeConcentracaoPorId(params) {
    if (params === void 0) { params = {}; }
    return areaConcentracaoJson[0];
}
exports.getAreaDeConcentracaoPorId = getAreaDeConcentracaoPorId;
//# sourceMappingURL=areaconcentracao.js.map