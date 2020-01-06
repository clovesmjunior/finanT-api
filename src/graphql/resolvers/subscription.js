export default {
    subscribe: (parent, args, context) => {
        return context.prisma.$subscribe.link({ mutation_in: ['CREATED'] }).node()
    },
    resolve: payload => {
      return payload
    },
};