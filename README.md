# Candelária SC Content Studio

Sanity Studio for managing the content behind the Candelária Sport Clube website.

## Purpose

This studio stores and manages the structured information used by the public site, including:

- homepage content and key statistics
- club milestones and history
- social bodies and governance entries
- annual activity and financial reports
- player profiles and squad data

## Tech stack

- Sanity Studio
- React
- Schema-based content modeling
- Structured content for the frontend website

## Project files

```text
schemaTypes/
  jogador.js
  marco.js
  orgaoSocial.js
  paginaInicial.js
  relatorioAtividades.js
  relatorioContas.js
  index.js
sanity.config.js
sanity.cli.js
```

## Notes

- Content is connected to the frontend through the project configured in the site app.
- If the Sanity project, dataset, or credentials change, update the frontend configuration and studio configuration accordingly.
- Use the studio to keep website content consistent without editing source code directly.

## Resources

- [Sanity Docs](https://www.sanity.io/docs)
- [Sanity Community](https://www.sanity.io/community)
- [Sanity Studio Extensions](https://www.sanity.io/docs/content-studio/extending)
