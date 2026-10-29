export default {
  name: 'orgaoSocial',
  type: 'document',
  fields: [
    {
      name: 'corpo',
      title: 'Corpo Social',
      type: 'string',
      options: {
        list: [
          { title: 'Direção', value: 'direcao' },
          { title: 'Conselho Fiscal', value: 'conselhoFiscal' },
          { title: 'Assembleia Geral', value: 'assembleiaGeral' },
        ],
        layout: 'radio',
      },
      validation: Rule => Rule.required(),
    },

    // Cargo — Direção
    {
      name: 'cargoDirecao',
      title: 'Cargo (Direção)',
      type: 'string',
      hidden: ({ parent }) => parent?.corpo !== 'direcao',
      options: {
        list: [
          { title: 'Presidente', value: 'presidente' },
          { title: 'Vice-Presidente', value: 'vicePresidente' },
          { title: 'Secretário Geral', value: 'secretarioGeral' },
          { title: 'Tesoureiro(a)', value: 'tesoureiro' },
          { title: 'Vogal', value: 'vogal' },
        ],
      },
      validation: Rule =>
        Rule.custom((value, context) =>
          context.parent?.corpo === 'direcao' && !value ? 'Obrigatório' : true
        ),
    },

    // Cargo — Conselho Fiscal
    {
      name: 'cargoConselhoFiscal',
      title: 'Cargo (Conselho Fiscal)',
      type: 'string',
      hidden: ({ parent }) => parent?.corpo !== 'conselhoFiscal',
      options: {
        list: [
          { title: 'Presidente', value: 'presidente' },
          { title: 'Vogal', value: 'vogal' },
          { title: 'Suplente', value: 'suplente' },
        ],
      },
      validation: Rule =>
        Rule.custom((value, context) =>
          context.parent?.corpo === 'conselhoFiscal' && !value ? 'Obrigatório' : true
        ),
    },

    // Cargo — Assembleia Geral
    {
      name: 'cargoAssembleia',
      title: 'Cargo (Assembleia Geral)',
      type: 'string',
      hidden: ({ parent }) => parent?.corpo !== 'assembleiaGeral',
      options: {
        list: [
          { title: 'Presidente', value: 'presidente' },
          { title: 'Vice-Presidente', value: 'vicePresidente' },
          { title: 'Secretário', value: 'secretario' },
          { title: 'Suplente', value: 'suplente' },
        ],
      },
      validation: Rule =>
        Rule.custom((value, context) =>
          context.parent?.corpo === 'assembleiaGeral' && !value ? 'Obrigatório' : true
        ),
    },

    { name: 'nome', type: 'string', validation: Rule => Rule.required() },
    {
      name: 'ordem',
      title: 'Ordem dentro do corpo social',
      description: 'Presidente = 1, e por aí em diante.',
      type: 'number',
      validation: Rule => Rule.required().integer().min(1),
    },
    { name: 'foto', type: 'image' },
    { name: 'mandatoInicio', type: 'date', validation: Rule => Rule.required() },
    { name: 'mandatoFim', type: 'date', validation: Rule => Rule.required() },
  ],
}