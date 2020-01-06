
class Resolvers {
    getResolvers() {
        return {
            user({ id }) {
                return {
                    id
                };
              },
              users() {
                return {

                };
              },
              createUser({ name, repo, age }) {
                return {
                    id: '0',
                    name,
                    repo,
                    age
                  };
              }
        };
    }
}
export default Resolvers().getResolvers()