"use strict";
var ResumoParticipanteExterno = (function () {
    function ResumoParticipanteExterno(categoria, total) {
        this.categoria = categoria;
        this.total = total;
    }
    return ResumoParticipanteExterno;
}());
exports.ResumoParticipanteExterno = ResumoParticipanteExterno;
var ParticipanteExterno = (function () {
    function ParticipanteExterno(id, nome, categoria) {
        this.id = id;
        this.nome = nome;
        this.categoria = categoria;
    }
    return ParticipanteExterno;
}());
exports.ParticipanteExterno = ParticipanteExterno;
var DetalheParticipanteExterno = (function () {
    function DetalheParticipanteExterno(id, nome, email, telefone, nomeIes, nomePrograma, abreviaturas, nacionalidade, nivel, anoTitulacao, areaConhecimento, nomeIesTitulacao, nomePaisTitulacao, nomeTipoVinculo, nomeRegimeTrabalho, inicioVinculoPrograma, idCategoria, nomeCategoria, anoBase, mestradoAcademico, mestradoProfissional, doutorado, monografiaEmGraduacao, disciplinasGraduacao, iniciacaoCientifica, tutoria, chAnualGraduacao) {
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
        this.nomePaisTitulacao = nomePaisTitulacao;
        this.nomeTipoVinculo = nomeTipoVinculo;
        this.nomeRegimeTrabalho = nomeRegimeTrabalho;
        this.inicioVinculoPrograma = inicioVinculoPrograma;
        this.idCategoria = idCategoria;
        this.nomeCategoria = nomeCategoria;
        this.anoBase = anoBase;
        this.mestradoAcademico = mestradoAcademico;
        this.mestradoProfissional = mestradoProfissional;
        this.doutorado = doutorado;
        this.monografiaEmGraduacao = monografiaEmGraduacao;
        this.disciplinasGraduacao = disciplinasGraduacao;
        this.iniciacaoCientifica = iniciacaoCientifica;
        this.tutoria = tutoria;
        this.chAnualGraduacao = chAnualGraduacao;
    }
    return DetalheParticipanteExterno;
}());
exports.DetalheParticipanteExterno = DetalheParticipanteExterno;
var ParticipanteExternoPorProjeto = (function () {
    function ParticipanteExternoPorProjeto(id, nome, email, telefone) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }
    return ParticipanteExternoPorProjeto;
}());
exports.ParticipanteExternoPorProjeto = ParticipanteExternoPorProjeto;
var resumoParticipanteExternos = [{
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
var detalheParticipanteExterno = [{
        "id": 28270,
        "nome": "AFRANIO GALDINO DE ARAUJO",
        "email": "EMAIL@CAPES.GOV.BR",
        "telefone": "(61) 3333-3333",
        "nomeIes": "UNIVERSIDADE FEDERAL DO RIO GRANDE DO NORTE (UFRN)",
        "nomePrograma": "ADMINISTRAÇÃO (23001011007P0)",
        "abreviaturas": [{ "nome": "ARAUJO, A. G." }, { "nome": "ARAÚJO, A. G." }, { "nome": "ARAÚJO, Afrânio G. de" }],
        "nacionalidade": "Brasileiro",
        "nivel": "Doutorado",
        "anoTitulacao": "2009",
        "areaConhecimento": "ENGENHARIA DE PRODUÇÃO",
        "nomeIesTitulacao": "UNIVERSIDADE FEDERAL DE PERNAMBUCO",
        "nomePaisTitulacao": "Brasil",
        "nomeTipoVinculo": "Servidor Público",
        "nomeRegimeTrabalho": "Dedicação Exclusiva",
        "inicioVinculoPrograma": 444538740000,
        "idCategoria": 1,
        "nomeCategoria": "PERMANENTE",
        "anoBase": 2014,
        "mestradoAcademico": 6,
        "mestradoProfissional": 0,
        "doutorado": 1,
        "monografiaEmGraduacao": 4,
        "disciplinasGraduacao": 2,
        "iniciacaoCientifica": 0,
        "tutoria": 0,
        "chAnualGraduacao": 150
    }, {
        "id": 28271,
        "nome": "MARIANO COUSINI DE LOYOLA",
        "email": "EMAIL@CAPES.GOV.BR",
        "telefone": "(61) 3333-3333",
        "nomeIes": "UNIVERSIDADE FEDERAL DO RIO DE JANEIRO(UFRJ)",
        "nomePrograma": "ENGENHARIA MECATRONICA (2300101100888)",
        "abreviaturas": [{ "nome": "ARAUJO, A. G." }, { "nome": "ARAÚJO, A. G." }, { "nome": "ARAÚJO, Afrânio G. de" }],
        "nacionalidade": "Brasileiro",
        "nivel": "Doutorado",
        "anoTitulacao": "2009",
        "areaConhecimento": "ENGENHARIA DE PRODUÇÃO",
        "nomeIesTitulacao": "UNIVERSIDADE FEDERAL DE PERNAMBUCO",
        "nomePaisTitulacao": "Brasil",
        "nomeTipoVinculo": "Servidor Público",
        "nomeRegimeTrabalho": "Dedicação Exclusiva",
        "inicioVinculoPrograma": 444538740000,
        "idCategoria": 1,
        "anoBase": 2014,
        "nomeCategoria": "COLABORADOR",
        "mestradoAcademico": 6,
        "mestradoProfissional": 0,
        "doutorado": 1,
        "monografiaEmGraduacao": 4,
        "disciplinasGraduacao": 2,
        "iniciacaoCientifica": 0,
        "tutoria": 0,
        "chAnualGraduacao": 150
    }];
var participantesExternosPorProjeto = [{
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
function getResumoParticipanteExternos(params) {
    if (params === void 0) { params = {}; }
    return resumoParticipanteExternos;
}
exports.getResumoParticipanteExternos = getResumoParticipanteExternos;
function getParticipanteExternos(params) {
    if (params === void 0) { params = {}; }
    return docentes;
}
exports.getParticipanteExternos = getParticipanteExternos;
function getDetalheParticipanteExternos(params) {
    if (params === void 0) { params = {}; }
    return detalheParticipanteExterno[0];
}
exports.getDetalheParticipanteExternos = getDetalheParticipanteExternos;
function getParticipantesExternosPorProjeto(params) {
    if (params === void 0) { params = {}; }
    return participantesExternosPorProjeto;
}
exports.getParticipantesExternosPorProjeto = getParticipantesExternosPorProjeto;
//# sourceMappingURL=participanteexterno.js.map