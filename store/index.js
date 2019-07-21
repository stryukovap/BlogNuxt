const BASE_URL = 'https://pokeapi.co/api/v2/';
export const state = () => ({
  list: [],
  prevList: [],
  nextList: [],
  offset: 0,
  limit: 10
});
export const mutations = {
  list(state, payload) {
    return state.list = payload;
  },
  offset(state, payload) {
    return state.quantityItems = payload;
  },
  limit(state, payload) {
    return state.quantityItems = payload;
  }
};
export const actions = {
  async fetchList(context) {
    await this.$axios.$get(`${BASE_URL}pokemon?offset=${context.state.offset}&limit=${context.state.limit}`)
      .then(response => {
        // handle success
        // console.log(response);
        const tempArray = Promise.all(response.results.map(item => {
          console.log(item.url);
          return context.dispatch('fetchItem', item.url, {root: true});
        }));
        // const tempArray = response.results.map(item => {
        //   console.log(item.url);
        //   return context.dispatch('fetchItem', item.url, {root: true});
        // });
        console.log(tempArray);
        context.commit('list', tempArray);
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  },
  async fetchItem(context, payload) {
    await this.$axios.$get(payload)
      .then(response => {
        // handle success
        // console.log(response);
        console.log(payload);
        return {
          height: response.height,
          weight: response.weight,
          base_experience: response.base_experience,
          id: response.id,
          name: response.name,
          front_default: response.sprites.front_default,
          back_default: response.sprites.back_default
        }
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  }
};
