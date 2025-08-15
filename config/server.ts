export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 'https://internalagent.itfolkstech.com'),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
