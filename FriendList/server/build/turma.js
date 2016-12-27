"use strict";
var Turma = (function () {
    function Turma(id, descricao, periodo) {
    }
    return Turma;
}());
exports.Turma = Turma;
var DetalheTurma = (function () {
    function DetalheTurma(id, programa, periodo, nomeTurma, disciplina, creditos, cargaHoraria, cursos, docentes) {
    }
    return DetalheTurma;
}());
exports.DetalheTurma = DetalheTurma;
var turmas = [{
        "id": 1,
        "descricao": "Apreçamento de Ativos",
        "periodo": "1/2016"
    }, {
        "id": 2,
        "descricao": "Avanços em estratégia empresarial",
        "periodo": "1/2016"
    }, {
        "id": 1,
        "descricao": "Fundamentos de Gestão social",
        "periodo": "1/2016"
    }];
var turma = {
    "id": 1,
    "descricao": "Apreçamento de Ativos",
    "periodo": "1/2016"
};
var detalheTurma = {
    "id": 1,
    "programa": "ADMINISTRAÇÃO (23001011007P0)",
    "periodo": "1/2016",
    "nomeTurma": "teste",
    "proposta": "(DINTER) 195401/2014 - FUNDAÇÃO UNIVERSIDADE DE PERNAMBUCO",
    "disciplina": "ANÁLISE ORGANIZACIONAL (PGA3224)",
    "creditos": 2,
    "cargaHoraria": 250,
    "cursos": [{
            "cursoNivel": "ADMINISTRAÇÃO - Doutorado",
            "cargaHoraria": 360
        }, {
            "cursoNivel": "ADMINISTRAÇÃO - Mestrado",
            "cargaHoraria": 720
        }],
    "docentes": [{
            "nome": "ABDON SILVA RIBEIRO DA CUNHA",
            "categoria": "Discente - Doutorado",
            "ies": "UNIVERSIDADE FEDERAL DO RIO GRANDE DO NORTE",
            "cargaHoraria": 30,
            "responsavel": true
        }, {
            "nome": "ADRIANE ARAUJO DE OLIVEIRA",
            "categoria": "Participante Externo",
            "ies": "UNIVERSIDADE DE BRASÍLIA",
            "cargaHoraria": 45,
            "responsavel": false
        }, {
            "nome": "ADRIANA ISABEL BACKES STEPPAN",
            "categoria": "Docente",
            "ies": "UNIVERSIDADE SÃO PAULO",
            "cargaHoraria": 60,
            "responsavel": false
        }]
};
function getTurmas(params) {
    if (params === void 0) { params = {}; }
    return turmas;
}
exports.getTurmas = getTurmas;
function getDetalheTurma(params) {
    if (params === void 0) { params = {}; }
    return detalheTurma;
}
exports.getDetalheTurma = getDetalheTurma;
//# sourceMappingURL=turma.js.map