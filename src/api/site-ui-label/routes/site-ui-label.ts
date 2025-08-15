/**
 * site-ui-label router
 */
import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::site-ui-label.site-ui-label', {
    config: {
        find: {
            middlewares: [
                'api::site-ui-label.site-labels-populate',
            ],
        },
        findOne: {
            middlewares: [
                'api::site-ui-label.site-labels-populate',
            ],
        },
    },
});
