import { factories } from '@strapi/strapi';

export default factories.createCoreRouter(
    'api::agent-it-folks-content.agent-it-folks-content',
    {
        config: {
            find: {
                middlewares: ['api::agent-it-folks-content.populate-agent-content'],
            },
            findOne: {
                middlewares: ['api::agent-it-folks-content.populate-agent-content'],
            },
        },
    }
);
