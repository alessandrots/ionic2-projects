"use strict";
var MembroBanca = (function () {
    function MembroBanca(idMembro, nome, tipo, email, celular) {
        this.idMembro = idMembro;
        this.nome = nome;
        this.tipo = tipo;
        this.email = email;
        this.celular = celular;
    }
    return MembroBanca;
}());
exports.MembroBanca = MembroBanca;
var BancaExaminadora = (function () {
    function BancaExaminadora(id, orientador, participaDaBanca, membrosBanca) {
        this.id = id;
        this.orientador = orientador;
        this.participaDaBanca = participaDaBanca;
        this.membrosBanca = membrosBanca;
    }
    return BancaExaminadora;
}());
exports.BancaExaminadora = BancaExaminadora;
var banca = [{
        "id": 100,
        "orientador": "DINAH DOS SANTOS TINOCO",
        "participaDaBanca": true,
        "membrosBanca": [
            {
                "idMembro": 1001,
                "nome": "Adriana da Fonte Porto Carreiro",
                "tipo": "Participante Externo",
                "email": "adriana.fonte@mail.com",
                "celular": 61999991234
            }, {
                "idMembro": 1002,
                "nome": "Carlos Nakashoji",
                "tipo": "Docente",
                "email": "carlos.nakashoji@mail.com",
                "celular": 61999991235
            }
        ]
    }];
function getBancaExaminadora(params) {
    if (params === void 0) { params = {}; }
    return banca[0];
}
exports.getBancaExaminadora = getBancaExaminadora;
//# sourceMappingURL=bancaexaminadora.js.map