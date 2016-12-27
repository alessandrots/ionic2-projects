"use strict";
var DisciplinasDoutorado = (function () {
    function DisciplinasDoutorado(id, nome, inicioVigencia, fimVigencia) {
        this.id = id;
        this.nome = nome;
        this.inicioVigencia = inicioVigencia;
        this.fimVigencia = fimVigencia;
    }
    return DisciplinasDoutorado;
}());
exports.DisciplinasDoutorado = DisciplinasDoutorado;
var DisciplinasMestrado = (function () {
    function DisciplinasMestrado(id, nome, inicioVigencia, fimVigencia) {
        this.id = id;
        this.nome = nome;
        this.inicioVigencia = inicioVigencia;
        this.fimVigencia = fimVigencia;
    }
    return DisciplinasMestrado;
}());
exports.DisciplinasMestrado = DisciplinasMestrado;
var Disciplina = (function () {
    function Disciplina(id, nome, inicioVigencia, fimVigencia, ementa, sigla, numero, creditos, curso) {
        this.id = id;
        this.nome = nome;
        this.inicioVigencia = inicioVigencia;
        this.fimVigencia = fimVigencia;
        this.ementa = ementa;
        this.sigla = sigla;
        this.numero = numero;
        this.creditos = creditos;
        this.curso = curso;
    }
    return Disciplina;
}());
exports.Disciplina = Disciplina;
var disciplinasDoutorado = [{
        "id": 1,
        "nome": "Análise organizacional",
        "inicioVigencia": 1437503424350,
        "fimVigencia": 1437503424350
    }, {
        "id": 2,
        "nome": "Análise qualitativa de dados I",
        "inicioVigencia": 1437503424350,
        "fimVigencia": 1437503424350
    }, {
        "id": 3,
        "nome": "Análise qualitativa de dados II",
        "inicioVigencia": 1437503424350,
        "fimVigencia": null
    }, {
        "id": 4,
        "nome": "Apreçamento de ativos",
        "inicioVigencia": 1437503424350,
        "fimVigencia": 1437503424350
    }, {
        "id": 5,
        "nome": "Comportamento organizacional",
        "inicioVigencia": 1437503424350,
        "fimVigencia": 1437503424350
    }, {
        "id": 6,
        "nome": "Economia de estratégia",
        "inicioVigencia": 1437503424350,
        "fimVigencia": null
    }];
var disciplinasMestrado = [{
        "id": 1,
        "nome": "Análise organizacional",
        "inicioVigencia": 1437503424350,
        "fimVigencia": 1437503424350
    }, {
        "id": 2,
        "nome": "Análise qualitativa de dados I",
        "inicioVigencia": 1437503424350,
        "fimVigencia": 1437503424350
    }, {
        "id": 3,
        "nome": "Análise qualitativa de dados II",
        "inicioVigencia": 1437503424350,
        "fimVigencia": null
    }, {
        "id": 4,
        "nome": "Apreçamento de ativos",
        "inicioVigencia": 1437503424350,
        "fimVigencia": 1437503424350
    }, {
        "id": 5,
        "nome": "Comportamento organizacional",
        "inicioVigencia": 1437503424350,
        "fimVigencia": 1437503424350
    }, {
        "id": 6,
        "nome": "Economia de estratégia",
        "inicioVigencia": 1437503424350,
        "fimVigencia": null
    }];
var disciplinas = [{
        "id": 1,
        "nome": "Análise qualitativa de dados II",
        "inicioVigencia": 1437503424350,
        "fimVigencia": 1437503424350,
        "ementa": "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
        "sigla": "PGA",
        "numero": "3224",
        "creditos": "2",
        "curso": "Administração (30 horas)"
    }];
function getDisciplinasDoutorado(params) {
    if (params === void 0) { params = {}; }
    return disciplinasDoutorado;
}
exports.getDisciplinasDoutorado = getDisciplinasDoutorado;
function getDisciplinasMestrado(params) {
    if (params === void 0) { params = {}; }
    return disciplinasMestrado;
}
exports.getDisciplinasMestrado = getDisciplinasMestrado;
function getDisciplina(params) {
    if (params === void 0) { params = {}; }
    return disciplinas[0];
}
exports.getDisciplina = getDisciplina;
//# sourceMappingURL=disciplina.js.map