export default {
  name: 'relatorioContas',
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
    name: 'data',
    type: 'date',
    validation: Rule => Rule.required()
  }]
} 
