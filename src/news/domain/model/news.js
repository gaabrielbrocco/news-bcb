class News {
  constructor({
    idProjeto = "",
    tituloProjeto = "",
    objetivoProjeto = "",
    duracaoAtual = "",
    unidadeResponsavel = "",
    percentualConclusao = "",
  }) {
    this.idProjeto = idProjeto;
    this.tituloProjeto = tituloProjeto;
    this.objetivoProjeto = objetivoProjeto;
    this.duracaoAtual = duracaoAtual;
    this.unidadeResponsavel = unidadeResponsavel;
    this.percentualConclusao = percentualConclusao;
  }
}

export default News;
