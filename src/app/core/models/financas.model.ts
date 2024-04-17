export interface Financas {
    _id: string,
    idUsuario: string,
    transacaoId: string,
    periodoMes: string,
    periodoAno: string,
    objetivo: string,
    totalGanhos: string,
    totalDespesas: string,
    ganhos: Ganhos,
    despesas: Despesas
}

export interface Ganhos {
    _id?: string,
    origemValor: string,
    valorGanhos: string
}

export interface Despesas {
    _id?: string,
    categoriaDespesa: string,
    descricaoDespesa: string,
    valorDespesa: string
}