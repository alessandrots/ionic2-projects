export class DetalhePrograma {
    constructor(
        public id: number,
        public nome: string,
        public nomeIngles: string,
        public situacao: string,
        public codigo: string,
        public areaBasica: string,
        public areaAvaliacao: string,
        public notaCursoMestrado: number,
        public notaCursoDoutorado: number,
        public regimeLetivo: string
    ) { }
}

let detalhePrograma = [{
    "id": 1,
    "nome": "Ciência e Engenharia de Materiais",
    "nomeIngles": "Materials Science and Enginnering",
    "situacao": "ACADÊMICO",
    "codigo": "23001011026P4",
    "areaBasica": "MATERIAIS (90300009)",
    "areaAvaliacao": "MATERIAIS",
    "notaCursoMestrado": 6,
    "notaCursoDoutorado": 6,
    "regimeLetivo": "SEMESTRAL"
}];

export function getDetalhePrograma(params = <any>{}): DetalhePrograma {
    return detalhePrograma[0];
}
