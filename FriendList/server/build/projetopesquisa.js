"use strict";
var ResumoProjetoPesquisa = (function () {
    function ResumoProjetoPesquisa(status, total) {
        this.status = status;
        this.total = total;
    }
    return ResumoProjetoPesquisa;
}());
exports.ResumoProjetoPesquisa = ResumoProjetoPesquisa;
var ProjetoPesquisa = (function () {
    function ProjetoPesquisa(id, nome, status) {
        this.id = id;
        this.nome = nome;
        this.status = status;
    }
    return ProjetoPesquisa;
}());
exports.ProjetoPesquisa = ProjetoPesquisa;
var DetalheProjetoPesquisa = (function () {
    function DetalheProjetoPesquisa(id, nome, dataInicio, status, descricao, natureza) {
        this.id = id;
        this.nome = nome;
        this.dataInicio = dataInicio;
        this.status = status;
        this.descricao = descricao;
        this.natureza = natureza;
    }
    return DetalheProjetoPesquisa;
}());
exports.DetalheProjetoPesquisa = DetalheProjetoPesquisa;
var resumoProjetoPesquisa = [{
        "status": "Em andamento",
        "total": 80
    }, {
        "status": "Desativado",
        "total": 16
    }, {
        "status": "Concluído",
        "total": 30
    }];
var projetosPesquisa = [{
        "id": 1,
        "nome": "Avaliação de comportamento mecânico de aços de alto carbono submetidos",
        "status": "EM ANDAMENTO"
    }, {
        "id": 2,
        "nome": "Programa multidisciplinar em petróleo e gás",
        "status": "EM ANDAMENTO"
    }, {
        "id": 3,
        "nome": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "status": "DESATIVADO"
    }, {
        "id": 4,
        "nome": "Pellentesque efficitur arcu ac tortor scelerisque convallis",
        "status": "DESATIVADO"
    }, {
        "id": 5,
        "nome": "Pellentesque eget neque est",
        "status": "CONCLUÍDO"
    }];
var detalheProjetoPesquisa = [{
        "id": 1,
        "nome": "Avaliação de comportamento mecânico de aços de alto carbono submetidos",
        "dataInicio": 1437503424350,
        "status": "EM ANDAMENTO",
        "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero enim, convallis a tincidunt non, egestas id nisl. Donec ac lectus ac nisl elementum euismod dapibus tempor est. Sed feugiat pretium felis ut euismod. Curabitur sit amet elit urna. Aliquam laoreet consectetur sapien, non faucibus enim eleifend ac. Praesent tincidunt, dui et condimentum posuere, neque dolor dapibus tortor, in tempor nisi purus sit amet diam. Pellentesque et sodales elit. Mauris metus mi, dictum sit amet mollis nec, ultrices at odio.",
        "natureza": "Pesquisa"
    }, {
        "id": 2,
        "nome": "Programa multidisciplinar em petróleo e gás",
        "dataInicio": 1437503424350,
        "status": "EM ANDAMENTO",
        "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero enim, convallis a tincidunt non, egestas id nisl. Donec ac lectus ac nisl elementum euismod dapibus tempor est. Sed feugiat pretium felis ut euismod. Curabitur sit amet elit urna. Aliquam laoreet consectetur sapien, non faucibus enim eleifend ac. Praesent tincidunt, dui et condimentum posuere, neque dolor dapibus tortor, in tempor nisi purus sit amet diam. Pellentesque et sodales elit. Mauris metus mi, dictum sit amet mollis nec, ultrices at odio.",
        "natureza": "Pesquisa"
    }, {
        "id": 3,
        "nome": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "dataInicio": 1437503424350,
        "status": "DESATIVADO",
        "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero enim, convallis a tincidunt non, egestas id nisl. Donec ac lectus ac nisl elementum euismod dapibus tempor est. Sed feugiat pretium felis ut euismod. Curabitur sit amet elit urna. Aliquam laoreet consectetur sapien, non faucibus enim eleifend ac. Praesent tincidunt, dui et condimentum posuere, neque dolor dapibus tortor, in tempor nisi purus sit amet diam. Pellentesque et sodales elit. Mauris metus mi, dictum sit amet mollis nec, ultrices at odio.",
        "natureza": "Pesquisa"
    }, {
        "id": 4,
        "nome": "Pellentesque efficitur arcu ac tortor scelerisque convallis",
        "dataInicio": 1437503424350,
        "status": "DESATIVADO",
        "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero enim, convallis a tincidunt non, egestas id nisl. Donec ac lectus ac nisl elementum euismod dapibus tempor est. Sed feugiat pretium felis ut euismod. Curabitur sit amet elit urna. Aliquam laoreet consectetur sapien, non faucibus enim eleifend ac. Praesent tincidunt, dui et condimentum posuere, neque dolor dapibus tortor, in tempor nisi purus sit amet diam. Pellentesque et sodales elit. Mauris metus mi, dictum sit amet mollis nec, ultrices at odio.",
        "natureza": "Pesquisa"
    }, {
        "id": 5,
        "nome": "Pellentesque eget neque est",
        "dataInicio": 1437503424350,
        "status": "CONCLUÍDO",
        "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero enim, convallis a tincidunt non, egestas id nisl. Donec ac lectus ac nisl elementum euismod dapibus tempor est. Sed feugiat pretium felis ut euismod. Curabitur sit amet elit urna. Aliquam laoreet consectetur sapien, non faucibus enim eleifend ac. Praesent tincidunt, dui et condimentum posuere, neque dolor dapibus tortor, in tempor nisi purus sit amet diam. Pellentesque et sodales elit. Mauris metus mi, dictum sit amet mollis nec, ultrices at odio.",
        "natureza": "Pesquisa"
    }];
var projetosPesquisaPorFinanciador = [{
        "id": 1,
        "nome": "Avaliação de comportamento mecânico de aços de alto carbono submetidos",
        "status": "EM ANDAMENTO"
    }, {
        "id": 3,
        "nome": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "status": "DESATIVADO"
    }, {
        "id": 5,
        "nome": "Pellentesque eget neque est",
        "status": "CONCLUÍDO"
    }];
function getResumoProjetosPesquisa(params) {
    if (params === void 0) { params = {}; }
    return resumoProjetoPesquisa;
}
exports.getResumoProjetosPesquisa = getResumoProjetosPesquisa;
function getProjetosPesquisa(params) {
    if (params === void 0) { params = {}; }
    return projetosPesquisa;
}
exports.getProjetosPesquisa = getProjetosPesquisa;
function getDetalheProjetoPesquisa(params) {
    if (params === void 0) { params = {}; }
    var id = parseInt(params.id);
    var ano = parseInt(params.anoBase);
    for (var i = 0; i < detalheProjetoPesquisa.length; i++) {
        if (detalheProjetoPesquisa[i].id == id) {
            return detalheProjetoPesquisa[i];
        }
    }
    return detalheProjetoPesquisa[0];
}
exports.getDetalheProjetoPesquisa = getDetalheProjetoPesquisa;
function getProjetosPesquisaPorFinanciador(params) {
    if (params === void 0) { params = {}; }
    return projetosPesquisaPorFinanciador;
}
exports.getProjetosPesquisaPorFinanciador = getProjetosPesquisaPorFinanciador;
//# sourceMappingURL=projetopesquisa.js.map