jest.mock('../../../api/rotas/fornecedores/TabelaFornecedor')
const TabelaFornecedor = require('../../../api/rotas/fornecedores/TabelaFornecedor')
const Fornecedor = require('../../../api/rotas/fornecedores/Fornecedor')
const CampoInvalido = require('../../../api/erros/CampoInvalido')

describe('class Fornecedor', () => {
  it('validar() emite erro para "empresa"', async () => {
    const fornecedor = new Fornecedor({
      email: 'rodrigo@teste.com',
      categoria: 'brinquedos'
    })

    try {
      await fornecedor.validar()
    } catch (e) {
      expect(e).toBeInstanceOf(CampoInvalido)
      expect(e.message).toEqual(expect.stringContaining('empresa'))
    }
  })

  it('criar() persiste os dados no banco', async () => {
    const inserir = jest.fn(() => ({
      id: 5,
      dataCriacao: new Date(),
      dataAtualizacao: new Date(),
      versao: 0
    }))

    TabelaFornecedor.definirResultado('inserir', inserir)
    const fornecedor = new Fornecedor({
      empresa: 'Brinquedos para cães',
      email: 'rodrigo@teste.com',
      categoria: 'brinquedos'
    })

    await fornecedor.criar()
    expect(inserir).toHaveBeenCalled()
    expect(fornecedor.id).toEqual(5)
  })
})
