export default {
  name: 'paginaInicial',
  title: 'Página Inicial',
  type: 'document',
  fields: [
    {
      name: 'heroEyebrow',
      title: 'Etiqueta do Hero (época atual)',
      description: 'Ex: "Época 2026/2027 · Regresso ao Campeonato PLACARD"',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'estatisticas',
      title: 'Faixa de Números',
      description: 'Até 4 estatísticas em destaque na homepage.',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'valor', title: 'Valor (ex: "14", "Único")', type: 'string', validation: Rule => Rule.required() },
          { name: 'legenda', title: 'Legenda', type: 'string', validation: Rule => Rule.required() },
        ],
        preview: { select: { title: 'valor', subtitle: 'legenda' } },
      }],
      validation: Rule => Rule.max(4).min(1),
    },
  ],
  preview: { prepare: () => ({ title: 'Página Inicial (configurações)' }) },
}