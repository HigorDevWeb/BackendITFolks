export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'https://admin-panel-itfolks.vercel.app',
        'https://internalagent.itfolkstech.com',
        'https://n8n.itfolkstech.com',
      ],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
      headers: '*',
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  {
    name: 'strapi::body',
    config: {
      multipart: true,
      includeUnparsed: true,   // <--- ALTERAÇÃO ESSENCIAL
      formLimit: "100mb",
      jsonLimit: "100mb",
      textLimit: "100mb",
      formidable: { maxFileSize: 100 * 1024 * 1024 },
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
