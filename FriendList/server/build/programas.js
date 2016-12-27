"use strict";
var DetalhePrograma = (function () {
    function DetalhePrograma(id, nome, nomeIngles, situacao, codigo, areaBasica, areaAvaliacao, notaCursoMestrado, notaCursoDoutorado, regimeLetivo) {
        this.id = id;
        this.nome = nome;
        this.nomeIngles = nomeIngles;
        this.situacao = situacao;
        this.codigo = codigo;
        this.areaBasica = areaBasica;
        this.areaAvaliacao = areaAvaliacao;
        this.notaCursoMestrado = notaCursoMestrado;
        this.notaCursoDoutorado = notaCursoDoutorado;
        this.regimeLetivo = regimeLetivo;
    }
    return DetalhePrograma;
}());
exports.DetalhePrograma = DetalhePrograma;
var detalhePrograma = [{
        "id": 1,
        "nome": "Ciência e Engenharia de Materiais",
        "nomeIngles": "Materials Science and Enginnering",
        "situacao": "ACADÊMICO",
        "codigo": "23001011026P4",
        "areaBasica": "MATERIAIS (90300009)",
        "areaAvaliacao": "MATERIAIS",
        "notaCursoMestrado": 6,
        "notaCursoDoutorado": 6,
        "regimeLetivo": "SEMESTRAL"
    }];
function getDetalhePrograma(params) {
    if (params === void 0) { params = {}; }
    return detalhePrograma[0];
}
exports.getDetalhePrograma = getDetalhePrograma;
//# sourceMappingURL=programas.js.map