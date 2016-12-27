export class Friend {
	constructor(public id:number,
				public name:string,
				public email:string,
				public numero:number) {}
}

let friends= [
	{"id":1,
	"name":"Teste1",
	"email":"teste1@mail.com",
	"numero":2
	},
	{"id":2,
	"name":"Teste2",
	"email":"teste2@mail.com",
	"numero":4
	},
	{"id":3,
	"name":"Teste3",
	"email":"teste3@mail.com",
	"numero":6
	},
	{"id":4,
	"name":"Teste4",
	"email":"teste4@mail.com",
	"numero":8
	},
	{"id":5,
	"name":"Teste5",
	"email":"teste5@mail.com",
	"numero":10
	}
]

export function getFriends(params = <any>{}): Friend[] {
	return friends;
}