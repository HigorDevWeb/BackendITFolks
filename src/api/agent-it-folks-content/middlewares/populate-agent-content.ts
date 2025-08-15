import type { Context, Next } from 'koa';

export default (config, { strapi }) => {
    return async (ctx: Context, next: Next) => {
        await next();

        if (
            ctx.request.path === '/api/agent-it-folks-contents' &&
            ctx.status === 200 &&
            (ctx.body as any)?.data
        ) {
            const populated = await strapi.entityService.findMany(
                'api::agent-it-folks-content.agent-it-folks-content',
                {
                    populate: {
                        AgentITFolksContent: true,
                        quickExample: true,
                        comoFunciona: true,
                    },
                }
            );

            ctx.body = { data: populated };
        }
    };
};
