import { Context } from 'koa';

export default (config, { strapi }) => {
    return async (ctx: Context, next: () => Promise<any>) => {
        if (ctx.method === 'GET') {
            ctx.query = {
                ...ctx.query,
                // só aplica se não foi definido manualmente
                populate: ctx.query.populate || '*',
                fields: ctx.query.fields || undefined,
            };
        }
        await next();
    };
};
