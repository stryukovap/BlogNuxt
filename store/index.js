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
  async GET(context, {url, query}) {
    return await this.$axios.$get(url, {
      params: query || {}
    })
  },
  async getList(context) {
    const data = await context.dispatch('GET', {url: `${BASE_URL}pokemon?offset=${context.state.offset}&limit=${context.state.limit}`}, {root: true});
    if (data) {
      const result = await Promise.all(
        data.results.map(item => {
          return context.dispatch('GET', {url: item.url}, {root: true})
        })
      );
      return context.commit('list', result);
    }
  }
};
