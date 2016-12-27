export class LinhaPesquisa {
    constructor(public id: number, public nome: string) {
    }
}

export class ProjetoPesquisa {
    constructor(public id: number, public nome: string) {
    }
}

export class LinhaPesquisaDetalhe {
    constructor(public id: number, 
                public nome: string,
                public descricao: string,
                public dataInicio:number, 
                public dataFim:number,
                public areaConcentracao: string, 
                public producoesIntelectuaisAssociadas: string,
                public trabalhosConclusãoAssociados: string,
                public projetoPesquisaAssociados: ProjetoPesquisa[]) {
    }
}

let linhasPesquisaAreasDeConcentracao = [{
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

let detalheLinhaPesquisa = [{
    "id": 110001,
    "nome": "ESTRATÉGIA, GESTÃO E TECNOLOGIA DA INFORMAÇÃO",
    "descricao": "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
    "dataInicio": 1392343200000,
    "dataFim": 1469997604070,
    "areaConcentracao": "GESTÃO ORGANIZACIONAL",
    "producoesIntelectuaisAssociadas": "A linha de pesquisa não possui produção intelectual associada.",
    "trabalhosConclusãoAssociados": "A linha de pesquisa não possui trabalho de conclusão associado.",
    "projetoPesquisaAssociados":[{
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
    "projetoPesquisaAssociados":[{
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
    "projetoPesquisaAssociados":[{
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
    "projetoPesquisaAssociados":[{
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
    "projetoPesquisaAssociados":[{
        "id": 110001,
        "nome": "ESTRATÉGIA, GESTÃO E TECNOLOGIA DA INFORMAÇÃO"
    }, {
        "id": 110002,
        "nome": "ORGANIZAÇÕES E COMPORTAMENTO ORGANIZACIONAL"
    }]
}];

let projetoPesquisaAssociados = [{
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

export function getLinhasPesquisaPorAreaDeConcentracao(params = <any>{}): LinhaPesquisa[] {
    return linhasPesquisaAreasDeConcentracao;
}

export function getDetalheLinhaPesquisa(params = <any>{}): LinhaPesquisaDetalhe {
  let id = params.id;
  let retorno ;
  console.log('idLinhaPesquisa = ', id);

  if (id) {
      retorno = detalheLinhaPesquisa.filter((v) => {
          if (v.id == id) {
              return true;
          }
          return false;
      });
  }
  return retorno[0];
}

export function getLinhasPesquisaPorProjeto(params = <any>{}): LinhaPesquisa[] {
    return projetoPesquisaAssociados;
}


export function getLinhasDePesquisa (params = <any>{}): LinhaPesquisa[] {
    return linhasPesquisaAreasDeConcentracao;
}
