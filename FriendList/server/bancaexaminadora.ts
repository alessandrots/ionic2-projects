export class MembroBanca { 
	constructor (public idMembro: number,
	public nome: string,
	public tipo: string,
	public email: string,
	public celular: number) { }
}

export class BancaExaminadora {
	constructor (public id: number,
				 public orientador: string,
				 public participaDaBanca: boolean
				 ,public membrosBanca: MembroBanca[]
				 ) { }
	
}

let banca = [{
	"id": 100,
	"orientador": "DINAH DOS SANTOS TINOCO",
	"participaDaBanca": true,
	"membrosBanca": [
		{
			"idMembro":1001,
			"nome":"Adriana da Fonte Porto Carreiro",
			"tipo":"Participante Externo",
			"email":"adriana.fonte@mail.com",
			"celular":61999991234
		}, {
			"idMembro":1002,
			"nome":"Carlos Nakashoji",
			"tipo":"Docente",
			"email":"carlos.nakashoji@mail.com",
			"celular":61999991235
		}
	]
}]

export function getBancaExaminadora(params = <any>{}): BancaExaminadora {
	return banca[0];
}