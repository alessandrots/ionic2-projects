"use strict";
var ResumoDocente = (function () {
    function ResumoDocente(categoria, total) {
        this.categoria = categoria;
        this.total = total;
    }
    return ResumoDocente;
}());
exports.ResumoDocente = ResumoDocente;
var Docente = (function () {
    function Docente(id, nome, categoria) {
        this.id = id;
        this.nome = nome;
        this.categoria = categoria;
    }
    return Docente;
}());
exports.Docente = Docente;
var DetalheDocente = (function () {
    function DetalheDocente(id, nome, email, telefone, nomeIes, nomePrograma, abreviaturas, nacionalidade, nivel, anoTitulacao, areaConhecimento, nomeIesTitulacao, idCategoria, nomeCategoria) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.nomeIes = nomeIes;
        this.nomePrograma = nomePrograma;
        this.abreviaturas = abreviaturas;
        this.nacionalidade = nacionalidade;
        this.nivel = nivel;
        this.anoTitulacao = anoTitulacao;
        this.areaConhecimento = areaConhecimento;
        this.nomeIesTitulacao = nomeIesTitulacao;
        this.idCategoria = idCategoria;
        this.nomeCategoria = nomeCategoria;
    }
    return DetalheDocente;
}());
exports.DetalheDocente = DetalheDocente;
var DocentePorProjeto = (function () {
    function DocentePorProjeto(id, nome, email, telefone) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }
    return DocentePorProjeto;
}());
exports.DocentePorProjeto = DocentePorProjeto;
var resumoDocentes = [{
        "categoria": "Permanente",
        "total": 80
    }, {
        "categoria": "Visitante",
        "total": 16
    }, {
        "categoria": "Colaborador",
        "total": 30
    }];
var docentes = [{
        "id": 28270,
        "nome": "AFRANIO GALDINO DE ARAUJO",
        "categoria": "PERMANENTE"
    }, {
        "id": 28255,
        "nome": "ANATALIA SARAIVA MARTINS RAMOS",
        "categoria": "COLABORADOR"
    }, {
        "id": 28266,
        "nome": "ANDERSON LUIZ REZENDE MOL",
        "categoria": "PERMANENTE"
    }, {
        "id": 28265,
        "nome": "ANTONIO SERGIO ARAUJO FERNANDES",
        "categoria": "PERMANENTE"
    }, {
        "id": 28256,
        "nome": "DINAH DOS SANTOS TINOCO",
        "categoria": "PERMANENTE"
    }, {
        "id": 28268,
        "nome": "HIRONOBU SANO",
        "categoria": "PERMANENTE"
    }, {
        "id": 28261,
        "nome": "JOMARIA MATA DE LIMA ALLOUFA",
        "categoria": "COLABORADOR"
    }, {
        "id": 95913,
        "nome": "LUCIANO FERREIRA",
        "categoria": "COLABORADOR"
    }, {
        "id": 28267,
        "nome": "LUCIANO MENEZES BEZERRA SAMPAIO",
        "categoria": "PERMANENTE"
    }, {
        "id": 28263,
        "nome": "MANOEL VERAS DE SOUSA NETO",
        "categoria": "PERMANENTE"
    }, {
        "id": 28259,
        "nome": "MARIA ARLETE DUARTE DE ARAUJO",
        "categoria": "PERMANENTE"
    }, {
        "id": 28264,
        "nome": "MAURO LEMUEL DE OLIVEIRA ALEXANDRE",
        "categoria": "PERMANENTE"
    }, {
        "id": 28260,
        "nome": "MIGUEL EDUARDO MORENO ANEZ",
        "categoria": "COLABORADOR"
    }, {
        "id": 28269,
        "nome": "VINICIO DE SOUZA E ALMEIDA",
        "categoria": "COLABORADOR"
    }, {
        "id": 28262,
        "nome": "WASHINGTON JOSE DE SOUSA",
        "categoria": "COLABORADOR"
    }];
var detalheDocente = [{
        "id": 28270,
        "nome": "AFRANIO GALDINO DE ARAUJO",
        "email": "EMAIL@CAPES.GOV.BR",
        "telefone": "(61) 3333-3333",
        "nomeIes": "UNIVERSIDADE FEDERAL DO RIO GRANDE DO NORTE (UFRN)",
        "nomePrograma": "ADMINISTRAÇÃO (23001011007P0)",
        "abreviaturas": "ARAÚJO, Afrânio G. de",
        "nacionalidade": "Brasileiro",
        "nivel": "Doutorado",
        "anoTitulacao": "2009",
        "areaConhecimento": "ENGENHARIA DE PRODUÇÃO",
        "nomeIesTitulacao": "UNIVERSIDADE FEDERAL DE PERNAMBUCO",
        "idCategoria": 1,
        "nomeCategoria": "PERMANENTE"
    }, {
        "id": 28271,
        "nome": "MARIANO COUSINI DE LOYOLA",
        "email": "EMAIL@CAPES.GOV.BR",
        "telefone": "(61) 3333-3333",
        "nomeIes": "UNIVERSIDADE FEDERAL DO RIO DE JANEIRO(UFRJ)",
        "nomePrograma": "ENGENHARIA MECATRONICA (2300101100888)",
        "abreviaturas": "ARAUJO, A. G.",
        "nacionalidade": "Brasileiro",
        "nivel": "Doutorado",
        "anoTitulacao": "2009",
        "areaConhecimento": "ENGENHARIA DE PRODUÇÃO",
        "nomeIesTitulacao": "UNIVERSIDADE FEDERAL DE PERNAMBUCO",
        "idCategoria": 1,
        "nomeCategoria": "COLABORADOR"
    }];
var docentesPorProjeto = [{
        "id": 28270,
        "nome": "AFRANIO GALDINO DE ARAUJO",
        "email": "EMAIL@CAPES.GOV.BR",
        "telefone": "(61) 3333-3333"
    }, {
        "id": 28271,
        "nome": "MARIANO COUSINI DE LOYOLA",
        "email": "EMAIL@CAPES.GOV.BR",
        "telefone": "(61) 3333-3333"
    }];
function getResumoDocentes(params) {
    if (params === void 0) { params = {}; }
    return resumoDocentes;
}
exports.getResumoDocentes = getResumoDocentes;
function getDocentes(params) {
    if (params === void 0) { params = {}; }
    return docentes;
}
exports.getDocentes = getDocentes;
function getDetalheDocentes(params) {
    if (params === void 0) { params = {}; }
    return detalheDocente[0];
}
exports.getDetalheDocentes = getDetalheDocentes;
function getDocentesPorProjeto(params) {
    if (params === void 0) { params = {}; }
    return docentesPorProjeto;
}
exports.getDocentesPorProjeto = getDocentesPorProjeto;
//# sourceMappingURL=docente.js.map