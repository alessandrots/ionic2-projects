export class TrabalhoConclusao {
    constructor(
        public id: number,
        public titulo: string,
        public autor: string,
        public dataDefesa: number,
        public inconsistencia: boolean,
        public tipoTrabalhoConclusao: number
    ) { }
}

export class DetalheTrabalhoConclusao {
    constructor(
        public id: number,
        public titulo: string,
        // public descricao: string,
        public status: string,
        public dataInicio: number,
        public dataFim: number,
        public resumo: string,
        public abstract: string,
        public autor: string,
        public abreviatura: string,
        public dataDefesa: number,
        public palavrasChaves: string[],
        public idioma: string,
        public volume: number,
        public paginas: number,
        public bibliotecaDepositada: string,
        public inconsistencia: boolean,
        public idAreaConcentracao: number,
        public idLinhaDePesquisa: number,
        public idProjetoPesquisa: number,
        public idBanca: number,
        public idFinanciador: number
    ) { }
}

//0 - Tese
//1 - Dissertacao
let trabalhoConclusao = [
	{
	    "id": 10011,
	    "titulo": "Teste1",
	    "autor": "ABDON SILVA RIBEIRO DA CUNHA",
	    "dataDefesa": 1392343200000,
	    "inconsistencia": false,
	    "tipoTrabalhoConclusao":0
	},
	{
	    "id": 10012,
	    "titulo": "Teste2",
	    "autor": "ABDON SILVA RIBEIRO DA CUNHA",
	    "dataDefesa": 1392343200000,
	    "inconsistencia": false,
	    "tipoTrabalhoConclusao":0
	},
	{
	    "id": 10013,
	    "titulo": "Teste3",
	    "autor": "ABDON SILVA RIBEIRO DA CUNHA",
	    "dataDefesa": 1392343200000,
	    "inconsistencia": false,
	    "tipoTrabalhoConclusao":1
	},
	{
	    "id": 10014,
	    "titulo": "Teste4",
	    "autor": "ABDON SILVA RIBEIRO DA CUNHA",
	    "dataDefesa": 1392343200000,
	    "inconsistencia": true,
	    "tipoTrabalhoConclusao":1
	},
	{
	    "id": 10015,
	    "titulo": "Teste5",
	    "autor": "ABDON SILVA RIBEIRO DA CUNHA",
	    "dataDefesa": 1392343200000,
	    "inconsistencia": false,
	    "tipoTrabalhoConclusao":0
	},
	{
	    "id": 10016,
	    "titulo": "Teste6",
	    "autor": "ABDON SILVA RIBEIRO DA CUNHA",
	    "dataDefesa": 1392343200000,
	    "inconsistencia": false,
	    "tipoTrabalhoConclusao":1
	}
]

let trabalhoConclusaoDetalhe = [
	{
	    "id": 10011,
		"titulo": "A Lei 123/06 como Instrumento de Economia de Fortalecimento da Economia Local:xlslslslss",
		// "descricao": 1452477600000,
		"status": "Consistente",
		"dataInicio": 1392343200000,
		"dataFim": 1452477600000,
		"resumo": "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
		"abstract": "Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de 45 AC. Richard McClintock, um professor de latim do Hampden-Sydney College na Virginia, pesquisou uma das mais obscuras palavras em latim, consectetur, oriunda de uma passagem de Lorem Ipsum, e, procurando por entre citações da palavra na literatura clássica, descobriu a sua indubitável origem. Lorem Ipsum vem das seções 1.10.32 e 1.10.33 do de Finibus Bonorum et Malorum (Os Extremos do Bem e do Mal), de Cícero, escrito em 45 AC. Este livro é um tratado de teoria da ética muito popular na época da Renascença. A primeira linha de Lorem Ipsum, Lorem Ipsum dolor sit amet... vem de uma linha na seção 1.10.32 O trecho padrão original de Lorem Ipsum, usado desde o século XVI, está reproduzido abaixo para os interessados. Seções 1.10.32 e 1.10.33 de de Finibus Bonorum et Malorum de Cicero também foram reproduzidas abaixo em sua forma exata original, acompanhada das versões para o inglês da tradução feita por H. Rackham em 1914.",
		"autor": "Carlos Nakashoji",
		"abreviatura": "NAKSHOJI CARLOS",
		"dataDefesa": 1452477600000,
		"palavrasChaves": ["Economia Local", "Licitacoes", "Compras Governamentais"],
		"idioma": "PORTUGUÊS",
		"volume": 2,
		"paginas": 532,
		"bibliotecaDepositada": "Biblioteca Setorial do Núcleo de Estudos e Pesquisas em Ciências Sociais Aplicadas",
		"inconsistencia": true,
	    "tipoTrabalhoConclusao":0,
	    "idAreaConcentracao":10001,
	    "idLinhaDePesquisa":110001,
	    "idProjetoPesquisa":1,
	    "idBanca":1,
	    "idFinanciador":1
	}, {
	    "id": 10012,
		"titulo": "A Lei 444/12 como Instrumento de Economia de Fortalecimento da Economia Local:xlslslslss",
		// "descricao": 1452477600000,
		"status": "Consistente",
		"dataInicio": 1392343200000,
		"dataFim": 1452477600000,
		"resumo": "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
		"abstract": "Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de 45 AC. Richard McClintock, um professor de latim do Hampden-Sydney College na Virginia, pesquisou uma das mais obscuras palavras em latim, consectetur, oriunda de uma passagem de Lorem Ipsum, e, procurando por entre citações da palavra na literatura clássica, descobriu a sua indubitável origem. Lorem Ipsum vem das seções 1.10.32 e 1.10.33 do de Finibus Bonorum et Malorum (Os Extremos do Bem e do Mal), de Cícero, escrito em 45 AC. Este livro é um tratado de teoria da ética muito popular na época da Renascença. A primeira linha de Lorem Ipsum, Lorem Ipsum dolor sit amet... vem de uma linha na seção 1.10.32 O trecho padrão original de Lorem Ipsum, usado desde o século XVI, está reproduzido abaixo para os interessados. Seções 1.10.32 e 1.10.33 de de Finibus Bonorum et Malorum de Cicero também foram reproduzidas abaixo em sua forma exata original, acompanhada das versões para o inglês da tradução feita por H. Rackham em 1914.",
		"autor": "Carlos Nakashoji",
		"abreviatura": "NAKSHOJI CARLOS",
		"dataDefesa": 1452477600000,
		"palavrasChaves": ["Economia Local", "Licitacoes", "Compras Governamentais"],
		"idioma": "PORTUGUÊS",
		"volume": 2,
		"paginas": 532,
		"bibliotecaDepositada": "Biblioteca Setorial do Núcleo de Estudos e Pesquisas em Ciências Sociais Aplicadas",
		"inconsistencia": true,
	    "tipoTrabalhoConclusao":1,
	    "idAreaConcentracao":10002,
	    "idLinhaDePesquisa":110002,
	    "idProjetoPesquisa":1,
	    "idBanca":1,
	    "idFinanciador":1
	}
]	

export function getListaTrabalhoConclusao(params = <any>{}): TrabalhoConclusao[] {
    return trabalhoConclusao;
}

export function getListaTrabalhoConclusaoPorTipo(params = <any>{}): TrabalhoConclusao[] {
    let tipo = params.tipoTrabalhoConclusao;
    let lista;

    // console.log('tipoTrabalhoConclusao = ', tipo);
    if (tipo) {
        lista = trabalhoConclusao.filter((v) => {
            // console.log('trabalhoConclusao v = ', v.tipoTrabalhoConclusao);
            if (v.tipoTrabalhoConclusao == tipo) {
            	// console.log('v = ', v);
                return true;
            }
            return false;
        });
    }

    return lista;
}

export function getDetalheTrabalhoConclusao(params = <any>{}): DetalheTrabalhoConclusao {
	let tipo = params.tipoTrabalhoConclusao;
	let objeto;

	if (tipo) {
        objeto = trabalhoConclusaoDetalhe.filter((v) => {
            // console.log('this.listaOriginal v = ', v);
            if (v.tipoTrabalhoConclusao == tipo) {
                return true;
            }
            return false;
        });
    }
    return objeto;
}