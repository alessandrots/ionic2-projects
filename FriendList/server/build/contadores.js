"use strict";
var Contador = (function () {
    function Contador(docentes, discentes, turmas, producaoIntelectual, projetoPesquisa, participanteExterno, areasConcentracao, linhasPesquisa, disciplinas, teseDissertacoes) {
        this.docentes = docentes;
        this.discentes = discentes;
        this.turmas = turmas;
        this.producaoIntelectual = producaoIntelectual;
        this.projetoPesquisa = projetoPesquisa;
        this.participanteExterno = participanteExterno;
        this.areasConcentracao = areasConcentracao;
        this.linhasPesquisa = linhasPesquisa;
        this.disciplinas = disciplinas;
        this.teseDissertacoes = teseDissertacoes;
    }
    return Contador;
}());
exports.Contador = Contador;
var contador = {
    "docentes": 1,
    "discentes": 1,
    "turmas": 1,
    "producaoIntelectual": 1,
    "projetoPesquisa": 1,
    "participanteExterno": 1,
    "areasConcentracao": 1,
    "linhasPesquisa": 1,
    "disciplinas": 1,
    "teseDissertacoes": 1
};
function getContador(params) {
    if (params === void 0) { params = {}; }
    return contador;
}
exports.getContador = getContador;
//# sourceMappingURL=contadores.js.map