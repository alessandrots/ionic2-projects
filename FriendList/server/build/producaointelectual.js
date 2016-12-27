"use strict";
var ResumoProducaoIntelectual = (function () {
    function ResumoProducaoIntelectual(categoria, total) {
        this.categoria = categoria;
        this.total = total;
    }
    return ResumoProducaoIntelectual;
}());
exports.ResumoProducaoIntelectual = ResumoProducaoIntelectual;
var ProducaoIntelectual = (function () {
    function ProducaoIntelectual(id, nome, categoria, autor, dataPublicacao, inconsistente) {
        this.id = id;
        this.nome = nome;
        this.categoria = categoria;
        this.autor = autor;
        this.dataPublicacao = dataPublicacao;
        this.inconsistente = inconsistente;
    }
    return ProducaoIntelectual;
}());
exports.ProducaoIntelectual = ProducaoIntelectual;
var DetalheProducaoIntelectual = (function () {
    function DetalheProducaoIntelectual(id, nome, categoria, autor, dataPublicacao, subtipo, tituloJornalRevista, issn, doi, numeroPaginaInicial, numeroPaginaFinal, idioma, divulgacao, cidade, estado, url, observacao, idAreaConcentracao, idLinhaPesquisa, idProjetoPesquisa) {
        this.id = id;
        this.nome = nome;
        this.categoria = categoria;
        this.autor = autor;
        this.dataPublicacao = dataPublicacao;
        this.subtipo = subtipo;
        this.tituloJornalRevista = tituloJornalRevista;
        this.issn = issn;
        this.doi = doi;
        this.numeroPaginaInicial = numeroPaginaInicial;
        this.numeroPaginaFinal = numeroPaginaFinal;
        this.idioma = idioma;
        this.divulgacao = divulgacao;
        this.cidade = cidade;
        this.estado = estado;
        this.url = url;
        this.observacao = observacao;
        this.idAreaConcentracao = idAreaConcentracao;
        this.idLinhaPesquisa = idLinhaPesquisa;
        this.idProjetoPesquisa = idProjetoPesquisa;
    }
    return DetalheProducaoIntelectual;
}());
exports.DetalheProducaoIntelectual = DetalheProducaoIntelectual;
var resumoProducoesIntelectuais = [{
        "categoria": "Artística",
        "total": 80
    }, {
        "categoria": "Bibliográfica",
        "total": 16
    }, {
        "categoria": "Técnica",
        "total": 30
    }];
var producoesIntelectuais = [{
        "id": 1,
        "nome": "GOVERNANÇA DE PROJETOS DE SEGURANÇA",
        "categoria": "ARTÍSTICA",
        "autor": "DINAH DOS SANTOS TINOCO",
        "dataPublicacao": 1437503424350,
        "inconsistente": false
    }, {
        "id": 2,
        "nome": "ESTRUTURA DE GOVERNANÇA DE MPEs",
        "categoria": "BIBLIOGRÁFICA",
        "autor": "HIRONOBU SANO",
        "dataPublicacao": 1437503424350,
        "inconsistente": false
    }, {
        "id": 3,
        "nome": "A LÓGICA EFFECTUAL DE DECISÃO",
        "categoria": "TÉCNICA",
        "autor": "JOMARIA MATA DE LIMA ALLOUFA",
        "dataPublicacao": 1437503424350,
        "inconsistente": true
    }, {
        "id": 4,
        "nome": "VANTAGEM COMPETITIVA ATRAVÉS",
        "categoria": "ARTÍSTICA",
        "autor": "LUCIANO FERREIRA",
        "dataPublicacao": 1437503424350,
        "inconsistente": false
    }];
var detalheProducaoIntelectual = {
    "id": 1,
    "nome": "GOVERNANÇA DE PROJETOS DE SEGURANÇA",
    "categoria": "ARTÍSTICA",
    "autor": "DINAH DOS SANTOS TINOCO",
    "dataPublicacao": 1437503424350,
    "subtipo": "DESENVOLVIMENTO DE MATERIAL DIDÁTICO E INSTITUCIONAL",
    "tituloJornalRevista": "Idéias & Negócios",
    "issn": "298378942035359",
    "doi": null,
    "numeroPaginaInicial": 12,
    "numeroPaginaFinal": 45,
    "idioma": "Português",
    "divulgacao": "IMPRESSO",
    "cidade": "Natal",
    "estado": "RN",
    "url": null,
    "observacao": null,
    "idAreaConcentracao": 10001,
    "idLinhaPesquisa": 110001,
    "idProjetoPesquisa": 2
};
function getResumoProducoesIntelectuais(params) {
    if (params === void 0) { params = {}; }
    return resumoProducoesIntelectuais;
}
exports.getResumoProducoesIntelectuais = getResumoProducoesIntelectuais;
function getProducoesIntelectuais(params) {
    if (params === void 0) { params = {}; }
    return producoesIntelectuais;
}
exports.getProducoesIntelectuais = getProducoesIntelectuais;
function getDetalheProducaoIntelectual(params) {
    if (params === void 0) { params = {}; }
    return detalheProducaoIntelectual;
}
exports.getDetalheProducaoIntelectual = getDetalheProducaoIntelectual;
//# sourceMappingURL=producaointelectual.js.map