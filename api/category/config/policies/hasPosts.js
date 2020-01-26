module.exports = async (ctx, next) => {
    let entity;
    entity = await strapi.services.category.findOne(ctx.params);
    if(entity.posts.length === 0) {
        return await next();
    }
    ctx.throw(405, `You cannot remove category which has belonging posts!`);
};