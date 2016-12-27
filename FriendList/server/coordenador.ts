import * as express from 'express';
import * as path from 'path';
import { Server as HttpServer } from 'http';
// import { getResumoDocentes, getDocentes, getDetalheDocentes, getDocentesPorProjeto } from './docente';
// import { getDiscentes, getDetalheDiscente, getDiscentesPorGrauAcademico, getResumoEntradaDiscentes, getResumoSaidaDiscentes, getDiscentesPorProjeto } from './discente';
// import { getResumoParticipanteExternos, getParticipanteExternos, getDetalheParticipanteExternos, getParticipantesExternosPorProjeto } from './participanteexterno';
// import { getListaAreasDeConcentracao, getAreasDeConcentracaoPorProjeto, getAreasDeConcentracaoPorDisciplina, getAreaDeConcentracaoPorId } from './areaconcentracao';
// import { getContador } from './contadores';
// import { getQuantitativoSolicitacoes, getSolicitacoes } from './solicitacoes';
// import { getLinhasPesquisaPorAreaDeConcentracao, getLinhasPesquisaPorProjeto, getDetalheLinhaPesquisa, getLinhasDePesquisa}  from './linhapesquisa';
// import { getResumoProjetosPesquisa, getProjetosPesquisa, getDetalheProjetoPesquisa, getProjetosPesquisaPorFinanciador }  from './projetopesquisa';
// import { getDetalhePrograma }  from './programas';
// import { getDisciplinasDoutorado, getDisciplinasMestrado, getDisciplina }  from './disciplina';
// import { getListaTrabalhoConclusao, getListaTrabalhoConclusaoPorTipo, getDetalheTrabalhoConclusao } from './tesedissertacao';
// import { getResumoProducoesIntelectuais, getProducoesIntelectuais, getDetalheProducaoIntelectual }  from './producaointelectual';
// import { getFinanciadoresPessoaFisica, getFinanciadoresPessoaJuridica, getDetalheFinanciador } from './financiador';
// import { getBancaExaminadora }  from './bancaexaminadora';
// import { getTurmas, getDetalheTurma} from './turma';
import { getFriends} from './friend';

// HTTP API

const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(function(req, res, next) {
  // console.log('\n\n *** ACCESS  *** \n ')
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  next();
});

let posAlternandArray = 0;
//app.use(compression());
app.use('/', express.static(path.join(__dirname, 'public')));

// app.get('/rest/docentes/resumo/:idPrograma/:anoBase', function(req, res, next) {
//     responder(res, getResumoDocentes(req.params));
// });

// app.get('/rest/docentes/:idPrograma/:anoBase', function(req, res, next) {
//     responder(res, getDocentes(req.params));
// });

// app.get('/rest/docentes/detalhe/:idPrograma/:anoBase/:idDocente', function(req, res, next) {
//     responder(res, getDetalheDocentes(req.params));
// });

// app.get('/rest/docentes/projeto/:idPrograma/:anoBase/:idProjeto', function(req, res, next) {
//     responder(res, getDocentesPorProjeto(req.params));
// });

// app.all('/rest/discentes/:idPrograma/:anoBase', function(req, res, next) {
//     responder(res, getDiscentes(req.params));
// });

// app.get('/rest/discentes/:idPrograma/:anoBase/:grauAcademico', function(req, res, next) {
//     responder(res, getDiscentesPorGrauAcademico(req.params));
// });

// app.get('/rest/discentes/detalheDiscente/:idPrograma/:anoBase/:idDiscente', function(req, res, next) {
//     responder(res, getDetalheDiscente(req.params));
// });

// app.get('/rest/resumoEntradaDiscentes/:idPrograma/:anoBase', function(req, res, next) {
//     responder(res, getResumoEntradaDiscentes(req.params));
// });

// app.get('/rest/resumoSaidaDiscentes/:idPrograma/:anoBase', function(req, res, next) {
//     responder(res, getResumoSaidaDiscentes(req.params));
// });

// app.get('/rest/discentes/projeto/:idPrograma/:anoBase/:idProjeto', function(req, res, next) {
//     responder(res, getDiscentesPorProjeto(req.params));
// });

// app.get('/rest/resumoParticipanteExternos/:idPrograma/:anoBase', function(req, res, next) {
//     responder(res, getResumoParticipanteExternos(req.params));
// });

// app.get('/rest/participanteExternos/:idPrograma/:anoBase', function(req, res, next) {
//     responder(res, getParticipanteExternos(req.params));
// });

// app.get('/rest/participanteExternos/detalheParticipanteExterno/:idPrograma/:anoBase/:idParticipanteExterno', function(req, res, next) {
//     responder(res, getDetalheParticipanteExternos(req.params));
// });

// app.get('/rest/participanteExternos/projeto/:idPrograma/:anoBase/:idProjeto', function(req, res, next) {
//     responder(res, getParticipantesExternosPorProjeto(req.params));
// });

// app.get('/rest/contadores/:idPrograma/:anoBase', function(req, res, next) {
//     responder(res, getContador(req.params));
// });

// app.get('/rest/solicitacoes/quantidade/:idPrograma/:anoBase', function(req, res, next) {
//     responder(res, getQuantitativoSolicitacoes(req.params));
// });

// app.get('/rest/solicitacoes/:idPrograma/:anoBase/:idTipo', function(req, res, next) {
//     responder(res, getSolicitacoes(req.params));
// });

// app.get('/rest/areasConcentracao/:idPrograma/:anoBase', function(req, res, next) {
//     responder(res, getListaAreasDeConcentracao(req.params));
// });

// app.get('/rest/areasConcentracao/projeto/:idPrograma/:anoBase/:idProjeto', function(req, res, next) {
//     responder(res, getAreasDeConcentracaoPorProjeto(req.params));
// });

// app.get('/rest/areasConcentracao/disciplina/:idPrograma/:anoBase/:idDisciplina', function(req, res, next) {
//     responder(res, getAreasDeConcentracaoPorDisciplina(req.params));
// });

// app.get('/rest/linhaDePesquisa/:idPrograma/:anoBase/:idAreaConcentracao', function(req, res, next) {
//     responder(res, getLinhasPesquisaPorAreaDeConcentracao(req.params));
// });

// app.get('/rest/linhaDePesquisa/detalhe/:idPrograma/:anoBase/:id', function(req, res, next) {
//     responder(res, getDetalheLinhaPesquisa(req.params));
// });

// app.get('/rest/linhaDePesquisa/projeto/:idPrograma/:anoBase/:idProjeto', function(req, res, next) {
//     responder(res, getLinhasPesquisaPorProjeto(req.params));
// });

// app.get('/rest/projetosPesquisa/resumo/:idPrograma/:anoBase', function(req, res, next) {
//     responder(res, getResumoProjetosPesquisa(req.params));
// });

// app.get('/rest/projetosPesquisa/:idPrograma/:anoBase', function(req, res, next) {
//     responder(res, getProjetosPesquisa(req.params));
// });

// app.get('/rest/projetosPesquisa/detalhe/:idPrograma/:anoBase/:id', function(req, res, next) {
//     responder(res, getDetalheProjetoPesquisa(req.params));
// });

// app.get('/rest/projetosPesquisa/financiador/:idPrograma/:anoBase/:id', function(req, res, next) {
//     responder(res, getProjetosPesquisaPorFinanciador(req.params));
// });

// app.get('/rest/programas/detalhe/:idPrograma/:anoBase', function(req, res, next) {
//     responder(res, getDetalhePrograma(req.params));
// });

// app.get('/rest/linhasDePesquisa/:idPrograma/:anoBase', function(req, res, next) {
//     responder(res, getLinhasDePesquisa(req.params));
// });

// app.get('/rest/disciplinas/doutorado/:idPrograma/:anoBase', function(req, res, next) {
//     responder(res, getDisciplinasDoutorado(req.params));
// });

// app.get('/rest/disciplinas/mestrado/:idPrograma/:anoBase', function(req, res, next) {
//     responder(res, getDisciplinasMestrado(req.params));
// });

// app.get('/rest/disciplinas/detalhe/:idPrograma/:anoBase/:id', function(req, res, next) {
//     responder(res, getDisciplina(req.params));
// });

// app.get('/rest/producaoIntelectual/resumo/:idPrograma/:anoBase', function(req, res, next) {
//     responder(res, getResumoProducoesIntelectuais(req.params));
// });

// app.all('/rest/trabalhosDeConclusao/:idPrograma/:anoBase', function(req, res, next) {
//     responder(res, getListaTrabalhoConclusao(req.params));
// });

// app.get('/rest/trabalhosDeConclusao/:idPrograma/:anoBase/:tipoTrabalhoConclusao', function(req, res, next) {
//     responder(res, getListaTrabalhoConclusaoPorTipo(req.params));
// });

// app.get('/rest/trabalhosDeConclusao/detalheTrabalhoDeConclusao/:idPrograma/:anoBase/:tipoTrabalhoConclusao', function(req, res, next) {
//     responder(res, getDetalheTrabalhoConclusao(req.params));
// });

// app.get('/rest/producaoIntelectual/:idPrograma/:anoBase', function(req, res, next) {
//     responder(res, getProducoesIntelectuais(req.params));
// });

// app.get('/rest/producaoIntelectual/detalhe/:idPrograma/:anoBase/:id', function(req, res, next) {
//     responder(res, getDetalheProducaoIntelectual(req.params));
// });

// app.get('/rest/areasConcentracao/:idPrograma/:anoBase/:id', function(req, res, next) {
//     responder(res, getAreaDeConcentracaoPorId(req.params));
// });

// app.get('/rest/financiadores/pessoaFisica/:idPrograma/:anoBase', function(req, res, next) {
//     responder(res, getFinanciadoresPessoaFisica(req.params));
// });

// app.get('/rest/financiadores/pessoaJuridica/:idPrograma/:anoBase', function(req, res, next) {
//     responder(res, getFinanciadoresPessoaJuridica(req.params));
// });

// app.get('/rest/financiadores/detalhe/:idPrograma/:anoBase/:id', function(req, res, next) {
//     responder(res, getDetalheFinanciador(req.params));
// });

// app.get('/rest/bancaexaminadora/:idPrograma/:anoBase/:id', function(req, res, next) {
//     responder(res, getBancaExaminadora(req.params));
// });

// app.get('/rest/turmas/:idPrograma/:anoBase', function(req, res, next) {
//     responder(res, getTurmas(req.params));
// });

// app.get('/rest/detalheTurma/:idPrograma/:anoBase/:id', function(req, res, next) {
//     responder(res, getDetalheTurma(req.params));
// });

// app.get('/rest/login', function(req, res, next) {
//     console.log('params = ', req.params);
//     console.log('query = ', req.query);
//     var username = req.params.username;
//     var email = req.params.email;
//     console.log(' username = ' + username + ' email = ' + email);
//     res.send(' username = ' + username + ' email = ' + email);
// });

app.get('/rest/login', function(req, res, next) {
    console.log('query = ', req.query);
    var username = req.query.username;
    var password = req.query.password;
    console.log(' username = ' + username + ' password = ' + password);
    res.send(' username = ' + username + ' password = ' + password);
});

app.post('/rest/users', function(req, res, next) {
    console.log('body = ', req.body);
    var name = req.body.name;
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;

    console.log(name + ' ' + username + ' ' + email + ' ' + password);
    res.send(name + ' ' + username + ' ' + email + ' ' + password);
});

app.post('/rest/saveData', function(req, res, next) {
    console.log('body = ', req.body);
    var name = req.body.name;
    var email = req.body.email;
    var number = req.body.number;

    console.log(name + ' ' + email + ' ' + number);
    res.send(name + ' ' + email + ' ' + number);
});

app.get('/rest/friends', function(req, res, next) {
    responder(res, getFriends(req.params));
});

// app.post('/rest/users2', function(req, res, next) {

//     var name = req.params.name;
//     var username = req.params.username;
//     var email = req.params.email;
//     var password = req.params.password;

//     console.log(name + ' ' + username + ' ' + email + ' ' + password)

//     res.send(name + ' ' + username + ' ' + email + ' ' + password);
// });

let ip = 'localhost';
// let ip = '192.168.10.178';

const httpServer: HttpServer = app.listen(8000, ip, () => {
    const {address, port} = httpServer.address();
    console.log('Listening on %s:%s', address, port);
});

function responder(res, dados) {
    // console.log(' dados = ', dados);

    let random = Math.floor(Math.random() * 10);
    if (random > 7) {
        setTimeout(() => res.status(404).send('Not found'), 1000 + (100 * (Math.floor(Math.random() * 10) + 1)));
    } else {
        setTimeout(() => res.json({dataAtualizacao: new Date(), data: dados}), 1000 + (100 * (Math.floor(Math.random() * 10) + 1)));
    }
}
