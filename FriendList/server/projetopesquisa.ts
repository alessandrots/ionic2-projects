export class ResumoProjetoPesquisa {
    constructor(public status: string, public total: number) {

    }
}

export class ProjetoPesquisa {
    constructor(public id: number, public nome: string, public status: string) {

    }
}

export class DetalheProjetoPesquisa {
    constructor(
        public id: number,
        public nome: string,
        public dataInicio: number,
        public status: string,
        public descricao: string,
        public natureza: string
    ) {

    }
}

let resumoProjetoPesquisa = [{
    "status": "Em andamento",
    "total": 80
}, {
    "status": "Desativado",
    "total": 16
}, {
    "status": "Concluído",
    "total": 30
}];

let projetosPesquisa = [{
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

let detalheProjetoPesquisa = [{
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

let projetosPesquisaPorFinanciador = [{
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

export function getResumoProjetosPesquisa(params = <any>{}): ResumoProjetoPesquisa[] {
    return resumoProjetoPesquisa;
}

export function getProjetosPesquisa(params = <any>{}): ProjetoPesquisa[] {
    return projetosPesquisa;
}

export function getDetalheProjetoPesquisa(params = <any>{}): DetalheProjetoPesquisa {
    let id = parseInt(params.id);
    let ano = parseInt(params.anoBase);

    for (let i = 0; i < detalheProjetoPesquisa.length; i++) {
        if (detalheProjetoPesquisa[i].id == id) {
            return detalheProjetoPesquisa[i];
        }
    }

    return detalheProjetoPesquisa[0];
}

export function getProjetosPesquisaPorFinanciador(params = <any>{}): ProjetoPesquisa[] {
    return projetosPesquisaPorFinanciador;
}
