export default {
  name: 'marco',
  title: 'Marco da História',
  type: 'document',
  fields: [
    { name: 'ano', title: 'Ano (texto, ex: "2011" ou "1994–96")', type: 'string', validation: Rule => Rule.required() },
    {
      name: 'ordem',
      title: 'Ordem cronológica',
      description: 'Número sequencial. Se houver dois marcos no mesmo ano, o de ordem menor aparece primeiro.',
      type: 'number',
      validation: Rule => Rule.required().integer(),
    },
    { name: 'texto', title: 'Descrição', type: 'text', validation: Rule => Rule.required() },
  ],
  orderings: [
    { title: 'Ordem cronológica', name: 'ordemAsc', by: [{ field: 'ordem', direction: 'asc' }] },
  ],
  preview: { select: { title: 'ano', subtitle: 'texto' } },
}