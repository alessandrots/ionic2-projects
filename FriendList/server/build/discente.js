"use strict";
var ResumoDiscente = (function () {
    function ResumoDiscente(categoria, total) {
        this.categoria = categoria;
        this.total = total;
    }
    return ResumoDiscente;
}());
exports.ResumoDiscente = ResumoDiscente;
var Discente = (function () {
    function Discente(idDiscente, nomeDiscente, nomeSituacaoDiscente) {
        this.idDiscente = idDiscente;
        this.nomeDiscente = nomeDiscente;
        this.nomeSituacaoDiscente = nomeSituacaoDiscente;
    }
    return Discente;
}());
exports.Discente = Discente;
var DetalheDiscente = (function () {
    function DetalheDiscente(idDiscente, nomeDiscente, nomeIes, nomePrograma, abreviaturas, nacionalidade, nomeCurso, idNivel, nomeNivel, idSituacao, nomeSituacao, dataMatricula, nomeOrientador, nomeCategoriaOrientador, dataInicioOrientacao, dataFimOrientacao, principal) {
        this.idDiscente = idDiscente;
        this.nomeDiscente = nomeDiscente;
        this.nomeIes = nomeIes;
        this.nomePrograma = nomePrograma;
        this.abreviaturas = abreviaturas;
        this.nacionalidade = nacionalidade;
        this.nomeCurso = nomeCurso;
        this.idNivel = idNivel;
        this.nomeNivel = nomeNivel;
        this.idSituacao = idSituacao;
        this.nomeSituacao = nomeSituacao;
        this.dataMatricula = dataMatricula;
        this.nomeOrientador = nomeOrientador;
        this.nomeCategoriaOrientador = nomeCategoriaOrientador;
        this.dataInicioOrientacao = dataInicioOrientacao;
        this.dataFimOrientacao = dataFimOrientacao;
        this.principal = principal;
    }
    return DetalheDiscente;
}());
exports.DetalheDiscente = DetalheDiscente;
var DiscentePorProjeto = (function () {
    function DiscentePorProjeto(id, nome, email, telefone) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }
    return DiscentePorProjeto;
}());
exports.DiscentePorProjeto = DiscentePorProjeto;
var discentes = [{
        "idDiscente": 650774,
        "nomeDiscente": "ABDON SILVA RIBEIRO DA CUNHA",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 561883,
        "nomeDiscente": "ADRIANNE PAULA VIEIRA DE ANDRADE",
        "nomeSituacaoDiscente": "TITULADO",
        "grauAcademico": "Doutorado"
    }, {
        "idDiscente": 561678,
        "nomeDiscente": "ADRIANO ALMEIDA RODRIGUES",
        "nomeSituacaoDiscente": "ABANDONOU",
        "grauAcademico": "Doutorado"
    }, {
        "idDiscente": 650785,
        "nomeDiscente": "ALETHEIA JANUARIA ZANOW DE GOUVEA",
        "nomeSituacaoDiscente": "TITULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 205034,
        "nomeDiscente": "ALEX ESCALE MARQUES",
        "nomeSituacaoDiscente": "TITULADO",
        "grauAcademico": "Doutorado"
    }, {
        "idDiscente": 205035,
        "nomeDiscente": "ALINNE PRISCILLA DANTAS SILVA",
        "nomeSituacaoDiscente": "ABANDONOU",
        "grauAcademico": "Doutorado"
    }, {
        "idDiscente": 650789,
        "nomeDiscente": "ALISSON ARAUJO ANDRADE SILVA",
        "nomeSituacaoDiscente": "TITULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 561531,
        "nomeDiscente": "AMANDA BORGES DE ALBUQUERQUE ASSUNCAO",
        "nomeSituacaoDiscente": "TITULADO",
        "grauAcademico": "Doutorado"
    }, {
        "idDiscente": 205036,
        "nomeDiscente": "ANA CLAUDIA CARVALHO DE MIRANDA",
        "nomeSituacaoDiscente": "ABANDONOU",
        "grauAcademico": "Graduacao"
    }, {
        "idDiscente": 498661,
        "nomeDiscente": "ANA ELIZA GALVAO CORTEZ",
        "nomeSituacaoDiscente": "TITULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 650788,
        "nomeDiscente": "ANDRE DIAS COSTA",
        "nomeSituacaoDiscente": "TITULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 766017,
        "nomeDiscente": "ANNA CECILIA CHAVES GOMES",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 675560,
        "nomeDiscente": "ANNA KARENINA CHAVES DELGADO",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 534172,
        "nomeDiscente": "ANNE EMILIA COSTA CARVALHO",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 650790,
        "nomeDiscente": "ANTONIA WIGNA DE ALMEIDA RIBEIRO",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 767428,
        "nomeDiscente": "ANTONIO OLIVEIRA DO NASCIMENTO JUNIOR",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 650786,
        "nomeDiscente": "BEN ELIEL MATIAS DE ALMEIDA",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 650770,
        "nomeDiscente": "BRUNO CAMPELO MEDEIROS",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 561657,
        "nomeDiscente": "BRUNO LUAN DANTAS CARDOSO",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 702866,
        "nomeDiscente": "BRUNO RABELO DE MEDEIROS",
        "nomeSituacaoDiscente": "TITULADO",
        "grauAcademico": "Doutorado"
    }, {
        "idDiscente": 498653,
        "nomeDiscente": "CAMILA CRISTINA RODRIGUES SALGADO",
        "nomeSituacaoDiscente": "TITULADO",
        "grauAcademico": "Doutorado"
    }, {
        "idDiscente": 561544,
        "nomeDiscente": "CARLA MARIA RODRIGUES MUNIZ",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 205032,
        "nomeDiscente": "CARLOS DAVID CEQUEIRA FEITOR",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 498656,
        "nomeDiscente": "CAROLINA DE SOUSA MARTINS MELO",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 561643,
        "nomeDiscente": "CLARISSE LORENA CORTEZ BARRETO",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 205020,
        "nomeDiscente": "CLAUDIO MARCIO CAMPOS DE MENDONCA",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 205023,
        "nomeDiscente": "DINARA LESLYE MACEDO E SILVA CALAZANS",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 498659,
        "nomeDiscente": "EVANGELINA DE MELLO BASTOS",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 753211,
        "nomeDiscente": "FABIO RESENDE DE ARAUJO",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 650783,
        "nomeDiscente": "FABIO SANTOS NASCIMENTO",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 561525,
        "nomeDiscente": "FABRICIA ABRANTES FIGUEIREDO DA ROCHA",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 650772,
        "nomeDiscente": "FELIPE LUIZ NEVES BEZERRA DE MELO",
        "nomeSituacaoDiscente": "TITULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 205039,
        "nomeDiscente": "FELIPE LUIZ NEVES BEZERRA DE MELO",
        "nomeSituacaoDiscente": "TITULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 650771,
        "nomeDiscente": "FERNANDA JULYANNA SILVA DOS SANTOS",
        "nomeSituacaoDiscente": "TITULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 205040,
        "nomeDiscente": "FERNANDA JULYANNA SILVA DOS SANTOS",
        "nomeSituacaoDiscente": "TITULADO",
        "grauAcademico": "Doutorado"
    }, {
        "idDiscente": 681961,
        "nomeDiscente": "FERNANDO PORFIRIO SOARES DE OLIVEIRA",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 675539,
        "nomeDiscente": "FRANKLIN MEDEIROS GALVAO JUNIOR",
        "nomeSituacaoDiscente": "DESLIGADO",
        "grauAcademico": "Outro"
    }, {
        "idDiscente": 205024,
        "nomeDiscente": "GABRIEL MARTINS DE ARAUJO FILHO",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 561587,
        "nomeDiscente": "GABRIELA FIGUEIREDO DIAS",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 561577,
        "nomeDiscente": "GEORGIA CRISTIANE RODRIGUES",
        "nomeSituacaoDiscente": "TITULADO",
        "grauAcademico": "Doutorado"
    }, {
        "idDiscente": 700059,
        "nomeDiscente": "GERALDO BEZERRA CAMPOS JUNIOR",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 205021,
        "nomeDiscente": "GIOVANI RODRIGUES JUNIOR",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 650778,
        "nomeDiscente": "HUGO AZEVEDO RANGEL DE MORAIS",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 205025,
        "nomeDiscente": "IEDA ISABELLA DE LIRA SOUZA",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 205016,
        "nomeDiscente": "INGRID WILZA LEAL BEZERRA",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 562266,
        "nomeDiscente": "IRIS LINHARES PIMENTA",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 561512,
        "nomeDiscente": "JEANNE CHRISTINE MENDES TEIXEIRA",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 205041,
        "nomeDiscente": "JOAO PAULO COSTA DE MEDEIROS",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 650773,
        "nomeDiscente": "JOAO PAULO COSTA DE MEDEIROS",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 498658,
        "nomeDiscente": "JOAO PAULO PAIVA DA SILVA",
        "nomeSituacaoDiscente": "TITULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 498657,
        "nomeDiscente": "JOELSON MEDEIROS DE AQUINO",
        "nomeSituacaoDiscente": "TITULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 561501,
        "nomeDiscente": "JOHNATAN RAFAEL SANTANA DE BRITO",
        "nomeSituacaoDiscente": "TITULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 205042,
        "nomeDiscente": "JOSE AGUIAR DO NASCIMENTO",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 205043,
        "nomeDiscente": "JOSE CAMELO SILVEIRA NETO",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 204989,
        "nomeDiscente": "JOSUE VITOR DE MEDEIROS JUNIOR",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 561924,
        "nomeDiscente": "JOYCE ALVES DE MORAES",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 205044,
        "nomeDiscente": "JOYCE MARIELLA MEDEIROS CAVALCANTI",
        "nomeSituacaoDiscente": "ABANDONOU",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 498654,
        "nomeDiscente": "JUAREZ AZEVEDO DE PAIVA",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 205045,
        "nomeDiscente": "JULIANA PEREZ RUGGIRO JACOBINI",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 205046,
        "nomeDiscente": "LANA VIVIANE LINHARES DA COSTA SILVA",
        "nomeSituacaoDiscente": "TITULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 205047,
        "nomeDiscente": "LARISSA MAYARA DA SILVA DAMASCENO",
        "nomeSituacaoDiscente": "TITULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 205048,
        "nomeDiscente": "LEANDRO TRIGUEIRO FERNANDES",
        "nomeSituacaoDiscente": "TITULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 204997,
        "nomeDiscente": "LENIN CAVALCANTI BRITO GUERRA",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 205049,
        "nomeDiscente": "LEONARDO GEVEZIER BRAGA",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 205018,
        "nomeDiscente": "LILIA ASUCA SUMIYA",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 205017,
        "nomeDiscente": "LUCIA DE FATIMA LUCIO GOMES DA COSTA",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 498660,
        "nomeDiscente": "LUIS MANUEL ESTEVES DA ROCHA VIEIRA",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 561995,
        "nomeDiscente": "MARCELO VICTOR ALVES BILA QUEIROZ",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 650776,
        "nomeDiscente": "MARCIA FERNANDA SILVA MACEDO",
        "nomeSituacaoDiscente": "TITULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 205019,
        "nomeDiscente": "MARCIO MARREIRO DAS CHAGAS",
        "nomeSituacaoDiscente": "TITULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 562273,
        "nomeDiscente": "MARCOS ADLLER DE ALMEIDA NASCIMENTO",
        "nomeSituacaoDiscente": "TITULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 650780,
        "nomeDiscente": "MARCOS ARAUJO SILVA",
        "nomeSituacaoDiscente": "ABANDONOU",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 701377,
        "nomeDiscente": "MARCOS FERNANDO MACHADO DE MEDEIROS",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 205026,
        "nomeDiscente": "MARCOS PAULO DA SILVA",
        "nomeSituacaoDiscente": "ABANDONOU",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 498655,
        "nomeDiscente": "MARIA LUIZA AZEVEDO DE CARVALHO",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 650779,
        "nomeDiscente": "MARLENE MEDEIROS",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 205027,
        "nomeDiscente": "MELQUIADES PEREIRA DE LIMA JUNIOR",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 641299,
        "nomeDiscente": "MICHELLE YUMI FELIPE OKINO",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 650777,
        "nomeDiscente": "MILER FRANCO D ANJOUR",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 205051,
        "nomeDiscente": "MONIKELY DE OLIVEIRA SILVA",
        "nomeSituacaoDiscente": "TITULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 204984,
        "nomeDiscente": "MONIQUE FONSECA CARDOSO",
        "nomeSituacaoDiscente": "TITULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 205028,
        "nomeDiscente": "MURILO BARRETO SANTANA",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 561955,
        "nomeDiscente": "PATRICIA RIBEIRO ROMANO",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 561483,
        "nomeDiscente": "PATRICK REINECKE DE ALVERGA",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 204985,
        "nomeDiscente": "PAULO CESAR MEDEIROS DE OLIVEIRA JUNIOR",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 650782,
        "nomeDiscente": "PAULO RICARDO MATOS CAMARA",
        "nomeSituacaoDiscente": "TITULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 650733,
        "nomeDiscente": "PETRUSKA DE ARAUJO MACHADO",
        "nomeSituacaoDiscente": "TITULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 205054,
        "nomeDiscente": "RAMIRO JORGE ALDATZ",
        "nomeSituacaoDiscente": "TITULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 205055,
        "nomeDiscente": "RENAN FELINTO DE FARIAS AIRES",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 498652,
        "nomeDiscente": "RENAN FELINTO DE FARIAS AIRES",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 204986,
        "nomeDiscente": "RENATA LAISE REIS DE SOUZA",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 205029,
        "nomeDiscente": "RENATA LISSA SOARES DA SILVA GUIDI",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 650787,
        "nomeDiscente": "RICARDO LUIZ DE MEDEIROS LIMA",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 561870,
        "nomeDiscente": "ROMULO ANDRADE DE SOUZA NETO",
        "nomeSituacaoDiscente": "TITULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 205030,
        "nomeDiscente": "ROOSEVELT BEZERRA DA SILVA FILHO",
        "nomeSituacaoDiscente": "TITULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 561975,
        "nomeDiscente": "RUAN RODRIGO ARAUJO DA COSTA",
        "nomeSituacaoDiscente": "TITULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 701378,
        "nomeDiscente": "SILVIA PIRES BASTOS COSTA",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 205015,
        "nomeDiscente": "TAMARA PATRICIA FILGUEIRA DE MELO MOURA",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 205031,
        "nomeDiscente": "TICIANO MACIEL DAMORE",
        "nomeSituacaoDiscente": "TITULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 650781,
        "nomeDiscente": "VINICIUS MAGNATA PINO",
        "nomeSituacaoDiscente": "TITULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 205056,
        "nomeDiscente": "YURI DE LIMA PADILHA",
        "nomeSituacaoDiscente": "MATRICULADO",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 780774,
        "nomeDiscente": "ABDON SILVA RIBEIRO DA CUNHA",
        "nomeSituacaoDiscente": "Alunos ao final do ano base anterior",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 780883,
        "nomeDiscente": "ADRIANNE PAULA VIEIRA DE ANDRADE",
        "nomeSituacaoDiscente": "Alunos ao final do ano base anterior",
        "grauAcademico": "Doutorado"
    }, {
        "idDiscente": 780678,
        "nomeDiscente": "ADRIANO ALMEIDA RODRIGUES",
        "nomeSituacaoDiscente": "Alunos ao final do ano base anterior",
        "grauAcademico": "Doutorado"
    }, {
        "idDiscente": 780785,
        "nomeDiscente": "ALETHEIA JANUARIA ZANOW DE GOUVEA",
        "nomeSituacaoDiscente": "Alunos ao final do ano base anterior",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 780034,
        "nomeDiscente": "ALEX ESCALE MARQUES",
        "nomeSituacaoDiscente": "Alunos ao final do ano base anterior",
        "grauAcademico": "Doutorado"
    }, {
        "idDiscente": 780035,
        "nomeDiscente": "ALINNE PRISCILLA DANTAS SILVA",
        "nomeSituacaoDiscente": "Alunos ao final do ano base anterior",
        "grauAcademico": "Doutorado"
    }, {
        "idDiscente": 780789,
        "nomeDiscente": "ALISSON ARAUJO ANDRADE SILVA",
        "nomeSituacaoDiscente": "Alunos ao final do ano base anterior",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 780531,
        "nomeDiscente": "AMANDA BORGES DE ALBUQUERQUE ASSUNCAO",
        "nomeSituacaoDiscente": "Alunos ao final do ano base anterior",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 780036,
        "nomeDiscente": "ANA CLAUDIA CARVALHO DE MIRANDA",
        "nomeSituacaoDiscente": "Alunos ao final do ano base anterior",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 780661,
        "nomeDiscente": "ANA ELIZA GALVAO CORTEZ",
        "nomeSituacaoDiscente": "Alunos ao final do ano base anterior",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 780788,
        "nomeDiscente": "ANDRE DIAS COSTA",
        "nomeSituacaoDiscente": "Alunos ao final do ano base anterior",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 780017,
        "nomeDiscente": "ANNA CECILIA CHAVES GOMES",
        "nomeSituacaoDiscente": "Alunos ao final do ano base anterior",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 780560,
        "nomeDiscente": "ANNA KARENINA CHAVES DELGADO",
        "nomeSituacaoDiscente": "Alunos ao final do ano base anterior",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 780172,
        "nomeDiscente": "ANNE EMILIA COSTA CARVALHO",
        "nomeSituacaoDiscente": "Alunos ao final do ano base anterior",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 780790,
        "nomeDiscente": "ANTONIA WIGNA DE ALMEIDA RIBEIRO",
        "nomeSituacaoDiscente": "Alunos ao final do ano base anterior",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 780428,
        "nomeDiscente": "ANTONIO OLIVEIRA DO NASCIMENTO JUNIOR",
        "nomeSituacaoDiscente": "Alunos ao final do ano base anterior",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 780786,
        "nomeDiscente": "BEN ELIEL MATIAS DE ALMEIDA",
        "nomeSituacaoDiscente": "Alunos ao final do ano base anterior",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 780770,
        "nomeDiscente": "BRUNO CAMPELO MEDEIROS",
        "nomeSituacaoDiscente": "Alunos ao final do ano base anterior",
        "grauAcademico": "Doutorado"
    }, {
        "idDiscente": 980774,
        "nomeDiscente": "ABDON SILVA RIBEIRO DA CUNHA",
        "nomeSituacaoDiscente": "Alunos novos matriculados",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 980883,
        "nomeDiscente": "ADRIANNE PAULA VIEIRA DE ANDRADE",
        "nomeSituacaoDiscente": "Alunos novos matriculados",
        "grauAcademico": "Doutorado"
    }, {
        "idDiscente": 980678,
        "nomeDiscente": "ADRIANO ALMEIDA RODRIGUES",
        "nomeSituacaoDiscente": "Alunos novos matriculados",
        "grauAcademico": "Doutorado"
    }, {
        "idDiscente": 980785,
        "nomeDiscente": "ALETHEIA JANUARIA ZANOW DE GOUVEA",
        "nomeSituacaoDiscente": "Alunos novos matriculados",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 980034,
        "nomeDiscente": "ALEX ESCALE MARQUES",
        "nomeSituacaoDiscente": "Alunos novos matriculados",
        "grauAcademico": "Doutorado"
    }, {
        "idDiscente": 980035,
        "nomeDiscente": "ALINNE PRISCILLA DANTAS SILVA",
        "nomeSituacaoDiscente": "Alunos novos matriculados",
        "grauAcademico": "Doutorado"
    }, {
        "idDiscente": 980789,
        "nomeDiscente": "ALISSON ARAUJO ANDRADE SILVA",
        "nomeSituacaoDiscente": "Alunos novos matriculados",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 980531,
        "nomeDiscente": "AMANDA BORGES DE ALBUQUERQUE ASSUNCAO",
        "nomeSituacaoDiscente": "Alunos novos matriculados",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 980036,
        "nomeDiscente": "ANA CLAUDIA CARVALHO DE MIRANDA",
        "nomeSituacaoDiscente": "Alunos novos matriculados",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 980661,
        "nomeDiscente": "ANA ELIZA GALVAO CORTEZ",
        "nomeSituacaoDiscente": "Alunos novos matriculados",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 980788,
        "nomeDiscente": "ANDRE DIAS COSTA",
        "nomeSituacaoDiscente": "Alunos novos matriculados",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 980017,
        "nomeDiscente": "ANNA CECILIA CHAVES GOMES",
        "nomeSituacaoDiscente": "Alunos novos matriculados",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 980560,
        "nomeDiscente": "ANNA KARENINA CHAVES DELGADO",
        "nomeSituacaoDiscente": "Alunos novos matriculados",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 980172,
        "nomeDiscente": "ANNE EMILIA COSTA CARVALHO",
        "nomeSituacaoDiscente": "Alunos novos matriculados",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 980790,
        "nomeDiscente": "ANTONIA WIGNA DE ALMEIDA RIBEIRO",
        "nomeSituacaoDiscente": "Alunos novos matriculados",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 980428,
        "nomeDiscente": "ANTONIO OLIVEIRA DO NASCIMENTO JUNIOR",
        "nomeSituacaoDiscente": "Alunos novos matriculados",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 980786,
        "nomeDiscente": "BEN ELIEL MATIAS DE ALMEIDA",
        "nomeSituacaoDiscente": "Alunos novos matriculados",
        "grauAcademico": "Mestrado"
    }, {
        "idDiscente": 980770,
        "nomeDiscente": "BRUNO CAMPELO MEDEIROS",
        "nomeSituacaoDiscente": "Alunos novos matriculados",
        "grauAcademico": "Doutorado"
    }];
var detalheDiscente = [{
        "idDiscente": 650774,
        "nomeDiscente": "ABDON SILVA RIBEIRO DA CUNHA",
        "nomeIes": "UNIVERSIDADE FEDERAL DO RIO GRANDE DO NORTE (UFRN)",
        "nomePrograma": "ADMINISTRAÇÃO (23001011007P0)",
        "abreviaturas": "CUNHA, A. S. R.",
        "nacionalidade": "Brasileiro",
        "nomeCurso": "ADMINISTRAÇÃO",
        "idNivel": 4,
        "nomeNivel": "Doutorado",
        "idSituacao": 1,
        "nomeSituacao": "MATRICULADO",
        "dataMatricula": 1392343200000,
        "nomeOrientador": "WASHINGTON JOSE DE SOUSA",
        "nomeCategoriaOrientador": "DOCENTE",
        "dataInicioOrientacao": 1392343200000,
        "dataFimOrientacao": 1452477600000,
        "principal": true,
        "email": "aluno1@mail.com.br",
        "telefone": "(61) 99999-8888"
    }, {
        "idDiscente": 650875,
        "nomeDiscente": "JUAN TRISTON FELIX",
        "nomeIes": "UNIVERSIDADE FEDERAL DO MARANHAO (UFMA)",
        "nomePrograma": "COMUNICAÇÃO (23001011007P0)",
        "abreviaturas": "CUNHA, A. S. R.",
        "nacionalidade": "Espanhol",
        "nomeCurso": "COMUNICAÇÃO E PUBLICIDADE",
        "idNivel": 4,
        "nomeNivel": "MESTRADO",
        "idSituacao": 1,
        "nomeSituacao": "TITULADO",
        "dataMatricula": 1392343200000,
        "nomeOrientador": "WASHINGTON JOSE DE SOUSA",
        "nomeCategoriaOrientador": "DOCENTE",
        "dataInicioOrientacao": 1392343200000,
        "dataFimOrientacao": 1452477600000,
        "principal": true,
        "email": "aluno2@mail.com.br",
        "telefone": "(61) 99999-8888"
    }];
var discentesPorProjeto = [{
        "id": 650774,
        "nome": "ABDON SILVA RIBEIRO DA CUNHA",
        "email": "aluno1@mail.com.br",
        "telefone": "(61) 99999-8888"
    }, {
        "id": 650875,
        "nome": "JUAN TRISTON FELIX",
        "email": "aluno2@mail.com.br",
        "telefone": "(61) 99999-8888"
    }];
var resumoEntradaDiscentes = [{
        "categoria": "Alunos ao final do ano base anterior",
        "total": 28
    }, {
        "categoria": "Alunos novos matriculados",
        "total": 8
    }];
var resumoSaidaDiscentes = [{
        "categoria": "Titulado",
        "total": 9
    }, {
        "categoria": "Matriculado",
        "total": 4
    }, {
        "categoria": "Desligado",
        "total": 4
    }, {
        "categoria": "Abandonou",
        "total": 1
    }, {
        "categoria": "Alunos ao final do ano base corrente",
        "total": 15
    }];
function getDiscentes(params) {
    if (params === void 0) { params = {}; }
    return discentes;
}
exports.getDiscentes = getDiscentes;
function getDiscentesPorGrauAcademico(params) {
    if (params === void 0) { params = {}; }
    var grau = params.grauAcademico;
    var mestrados;
    if (grau) {
        mestrados = discentes.filter(function (v) {
            // console.log('this.listaOriginal v = ', v);
            if (v.grauAcademico.toUpperCase() == grau.toUpperCase()) {
                return true;
            }
            return false;
        });
    }
    return mestrados;
}
exports.getDiscentesPorGrauAcademico = getDiscentesPorGrauAcademico;
function getDetalheDiscente(params) {
    if (params === void 0) { params = {}; }
    return detalheDiscente[0];
}
exports.getDetalheDiscente = getDetalheDiscente;
function getResumoEntradaDiscentes(params) {
    if (params === void 0) { params = {}; }
    return resumoEntradaDiscentes;
}
exports.getResumoEntradaDiscentes = getResumoEntradaDiscentes;
function getResumoSaidaDiscentes(params) {
    if (params === void 0) { params = {}; }
    return resumoSaidaDiscentes;
}
exports.getResumoSaidaDiscentes = getResumoSaidaDiscentes;
function getDiscentesPorProjeto(params) {
    if (params === void 0) { params = {}; }
    return discentesPorProjeto;
}
exports.getDiscentesPorProjeto = getDiscentesPorProjeto;
//# sourceMappingURL=discente.js.map