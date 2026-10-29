export default {
  name: 'jogador',
  title: 'Jogador',
  type: 'document',
  fields: [
    { name: 'nome', title: 'Nome', type: 'string', validation: Rule => Rule.required() },
    { name: 'numero', title: 'Número', type: 'number', validation: Rule => Rule.required().integer().min(0) },
    {
      name: 'posicao',
      title: 'Posição',
      type: 'string',
      options: { list: ['Guarda-Redes', 'Defesa', 'Avançado'] },
      validation: Rule => Rule.required(),
    },
    { name: 'foto', title: 'Fotografia', type: 'image', validation: Rule => Rule.required() },
    { name: 'nacionalidade', title: 'Nacionalidade', type: 'string' },
    { name: 'dataNascimento', title: 'Data de Nascimento', type: 'date' },
    {
      name: 'periodosClube',
      title: 'Períodos no Clube',
      description: 'Um período por cada "passagem" pelo clube. Deixa "Ano de saída" em branco se o jogador ainda está no clube atualmente.',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'anoInicio', title: 'Ano de chegada', type: 'number', validation: Rule => Rule.required() },
          { name: 'anoFim', title: 'Ano de saída (em branco = ainda no clube)', type: 'number' },
        ],
        preview: {
          select: { inicio: 'anoInicio', fim: 'anoFim' },
          prepare: ({ inicio, fim }) => ({ title: `${inicio} – ${fim ?? 'atual'}` }),
        },
      }],
      validation: Rule => Rule.min(1),
    },
    { name: 'capitao', title: 'É capitão de equipa?', type: 'boolean', initialValue: false },
    {
      name: 'estatisticas',
      title: 'Estatísticas da Época (opcional)',
      type: 'object',
      fields: [
        { name: 'jogos', title: 'Jogos', type: 'number' },
        { name: 'golos', title: 'Golos', type: 'number' },
      ],
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'nome' },
      validation: Rule => Rule.required(),
    },
    {
      name: 'bio',
      title: 'Nota/Biografia (opcional)',
      type: 'text',
    },
  ],
  orderings: [
    { title: 'Número da camisola', name: 'numeroAsc', by: [{ field: 'numero', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'nome', subtitle: 'posicao', media: 'foto' },
    prepare: ({ title, subtitle, media }) => ({ title: `#${title}`, subtitle, media }),
  },
}