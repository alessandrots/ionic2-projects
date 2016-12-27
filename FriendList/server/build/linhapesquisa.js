"use strict";
var LinhaPesquisa = (function () {
    function LinhaPesquisa(id, nome) {
        this.id = id;
        this.nome = nome;
    }
    return LinhaPesquisa;
}());
exports.LinhaPesquisa = LinhaPesquisa;
var ProjetoPesquisa = (function () {
    function ProjetoPesquisa(id, nome) {
        this.id = id;
        this.nome = nome;
    }
    return ProjetoPesquisa;
}());
exports.ProjetoPesquisa = ProjetoPesquisa;
var LinhaPesquisaDetalhe = (function () {
    function LinhaPesquisaDetalhe(id, nome, descricao, dataInicio, dataFim, areaConcentracao, producoesIntelectuaisAssociadas, trabalhosConclusãoAssociados, projetoPesquisaAssociados) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
        this.areaConcentracao = areaConcentracao;
        this.producoesIntelectuaisAssociadas = producoesIntelectuaisAssociadas;
        this.trabalhosConclusãoAssociados = trabalhosConclusãoAssociados;
        this.projetoPesquisaAssociados = projetoPesquisaAssociados;
    }
    return LinhaPesquisaDetalhe;
}());
exports.LinhaPesquisaDetalhe = LinhaPesquisaDetalhe;
var linhasPesquisaAreasDeConcentracao = [{
        "id": 110001,
        "nome": "ESTRATÉGIA, GESTÃO E TECNOLOGIA DA INFORMAÇÃO"
    }, {
        "id": 110002,
        "nome": "ORGANIZAÇÕES E COMPORTAMENTO ORGANIZACIONAL"
    }, {
        "id": 110003,
        "nome": "POLÍTICAS PÚBLICAS E GOVERNANÇA"
    }, {
        "id": 110004,
        "nome": "Teste1...."
    }, {
        "id": 110005,
        "nome": "Teste2"
    }];
var detalheLinhaPesquisa = [{
        "id": 110001,
        "nome": "ESTRATÉGIA, GESTÃO E TECNOLOGIA DA INFORMAÇÃO",
        "descricao": "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
        "dataInicio": 1392343200000,
        "dataFim": 1469997604070,
        "areaConcentracao": "GESTÃO ORGANIZACIONAL",
        "producoesIntelectuaisAssociadas": "A linha de pesquisa não possui produção intelectual associada.",
        "trabalhosConclusãoAssociados": "A linha de pesquisa não possui trabalho de conclusão associado.",
        "projetoPesquisaAssociados": [{
                "id": 110001,
                "nome": "ESTRATÉGIA, GESTÃO E TECNOLOGIA DA INFORMAÇÃO"
            }, {
                "id": 110002,
                "nome": "ORGANIZAÇÕES E COMPORTAMENTO ORGANIZACIONAL"
            }]
    }, {
        "id": 110002,
        "nome": "ORGANIZAÇÕES E COMPORTAMENTO ORGANIZACIONAL",
        "descricao": "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
        "dataInicio": 1392343200000,
        "dataFim": 1469997604070,
        "areaConcentracaoo": "GESTÃO ORGANIZACIONAL",
        "producoesIntelectuaisAssociadas": "A linha de pesquisa não possui produção intelectual associada.",
        "trabalhosConclusãoAssociados": "A linha de pesquisa não possui trabalho de conclusão associado.",
        "projetoPesquisaAssociados": [{
                "id": 110001,
                "nome": "ESTRATÉGIA, GESTÃO E TECNOLOGIA DA INFORMAÇÃO"
            }, {
                "id": 110002,
                "nome": "ORGANIZAÇÕES E COMPORTAMENTO ORGANIZACIONAL"
            }]
    }, {
        "id": 110003,
        "nome": "POLÍTICAS PÚBLICAS E GOVERNANÇA",
        "descricao": "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
        "dataInicio": 1392343200000,
        "dataFim": 1469997604070,
        "areaConcentracaoo": "POLÍTICAS E GESTÃO PÚBLICAS",
        "producoesIntelectuaisAssociadas": "A linha de pesquisa não possui produção intelectual associada.",
        "trabalhosConclusãoAssociados": "A linha de pesquisa não possui trabalho de conclusão associado.",
        "projetoPesquisaAssociados": [{
                "id": 110001,
                "nome": "ESTRATÉGIA, GESTÃO E TECNOLOGIA DA INFORMAÇÃO"
            }, {
                "id": 110002,
                "nome": "ORGANIZAÇÕES E COMPORTAMENTO ORGANIZACIONAL"
            }]
    }, {
        "id": 110004,
        "nome": "Teste1",
        "descricao": "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
        "dataInicio": 1392343200000,
        "dataFim": 1469997604070,
        "areaConcentracaoo": "POLÍTICAS E GESTÃO PÚBLICAS",
        "producoesIntelectuaisAssociadas": "A linha de pesquisa não possui produção intelectual associada.",
        "trabalhosConclusãoAssociados": "A linha de pesquisa não possui trabalho de conclusão associado.",
        "projetoPesquisaAssociados": [{
                "id": 110001,
                "nome": "ESTRATÉGIA, GESTÃO E TECNOLOGIA DA INFORMAÇÃO"
            }, {
                "id": 110002,
                "nome": "ORGANIZAÇÕES E COMPORTAMENTO ORGANIZACIONAL"
            }]
    }, {
        "id": 110005,
        "nome": "Teste2",
        "descricao": "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
        "dataInicio": 1392343200000,
        "dataFim": 1469997604070,
        "areaConcentracaoo": "POLÍTICAS E GESTÃO PÚBLICAS",
        "producoesIntelectuaisAssociadas": "A linha de pesquisa não possui produção intelectual associada.",
        "trabalhosConclusãoAssociados": "A linha de pesquisa não possui trabalho de conclusão associado.",
        "projetoPesquisaAssociados": [{
                "id": 110001,
                "nome": "ESTRATÉGIA, GESTÃO E TECNOLOGIA DA INFORMAÇÃO"
            }, {
                "id": 110002,
                "nome": "ORGANIZAÇÕES E COMPORTAMENTO ORGANIZACIONAL"
            }]
    }];
var projetoPesquisaAssociados = [{
        "id": 110001,
        "nome": "ESTRATÉGIA, GESTÃO E TECNOLOGIA DA INFORMAÇÃO"
    }, {
        "id": 110002,
        "nome": "ORGANIZAÇÕES E COMPORTAMENTO ORGANIZACIONAL"
    }, {
        "id": 110003,
        "nome": "POLÍTICAS PÚBLICAS E GOVERNANÇA"
    }, {
        "id": 110004,
        "nome": "Teste1...."
    }, {
        "id": 110005,
        "nome": "Teste2"
    }];
function getLinhasPesquisaPorAreaDeConcentracao(params) {
    if (params === void 0) { params = {}; }
    return linhasPesquisaAreasDeConcentracao;
}
exports.getLinhasPesquisaPorAreaDeConcentracao = getLinhasPesquisaPorAreaDeConcentracao;
function getDetalheLinhaPesquisa(params) {
    if (params === void 0) { params = {}; }
    var id = params.id;
    var retorno;
    console.log('idLinhaPesquisa = ', id);
    if (id) {
        retorno = detalheLinhaPesquisa.filter(function (v) {
            if (v.id == id) {
                return true;
            }
            return false;
        });
    }
    return retorno[0];
}
exports.getDetalheLinhaPesquisa = getDetalheLinhaPesquisa;
function getLinhasPesquisaPorProjeto(params) {
    if (params === void 0) { params = {}; }
    return projetoPesquisaAssociados;
}
exports.getLinhasPesquisaPorProjeto = getLinhasPesquisaPorProjeto;
function getLinhasDePesquisa(params) {
    if (params === void 0) { params = {}; }
    return linhasPesquisaAreasDeConcentracao;
}
exports.getLinhasDePesquisa = getLinhasDePesquisa;
//# sourceMappingURL=linhapesquisa.js.map