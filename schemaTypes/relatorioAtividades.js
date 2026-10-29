export default {
  name: 'relatorioAtividades',
  type: 'document',
  fields: [{
    name: 'ano',
    type: 'number',
    validation: Rule => Rule.required()
  }, {
    name: 'ficheiro',
    type: 'file',
    validation: Rule => Rule.required()
  }, {
    name: 'resumo',
    type: 'string'
  }]
}