const resultadosPorFuncao = {
  listar: () => [],
  inserir: () => ({}),
  pegarPorId: () => ({}),
  atualizar: () => ({}),
  remover: () => ({})
}

module.exports = {
  definirResultado (nomeFuncao, valor) {
    resultadosPorFuncao[nomeFuncao] = valor
  },
  listar () {
    return resultadosPorFuncao.listar()
  },
  inserir (fornecedor) {
    return resultadosPorFuncao.inserir()
  },
  async pegarPorId (id) {
    return resultadosPorFuncao.pegarPorId()
  },
  atualizar (id, dadosParaAtualizar) {
    return resultadosPorFuncao.atualizar()
  },
  remover (id) {
    return resultadosPorFuncao.remover()
  }
}
