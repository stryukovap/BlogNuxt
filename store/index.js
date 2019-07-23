const BASE_URL = 'https://pokeapi.co/api/v2/';
export const state = () => ({
  list: [],
  offset: 0,
  limit: 10,
  limitList: [10, 20, 30],
  quantity: 0,
  length: 0,
  currentPage: 0,
  currentPokemon: {},
  currentPokemonId: 0
});
export const mutations = {
  quantity(state, payload) {
    return state.quantity = payload;
  },
  list(state, payload) {
    return state.list = payload;
  },
  offset(state, payload) {
    return state.offset = payload;
  },
  limit(state, payload) {
    return state.limit = payload;
  },
  length(state, payload) {
    return state.length = payload;
  },
  currentPage(state, payload) {
    return state.currentPage = payload;
  },
  currentPokemon(state, payload) {
    return state.currentPokemon = payload;
  },
  currentPokemonId(state, payload) {
    return state.currentPokemonId = parseInt(payload);
  }
};
export const actions = {
  async GET(context, {url, query}) {
    return await this.$axios.$get(url, {
      params: query || {}
    })
  },
  mathLengthPagination: function (context) {
    const count = Math.floor(context.state.quantity / context.state.limit);
    context.commit('length', count);
  },
  async changeCurrentPage(context, payload) {
    context.commit('currentPage', payload);
    const count = parseInt(context.state.limit * context.state.currentPage);
    context.commit('offset', count);
    await context.dispatch('getList');
  },
  async getList(context) {
    const data = await context.dispatch('GET',
      {url: `${BASE_URL}pokemon?offset=${context.state.offset}&limit=${context.state.limit}`},
      {root: true});
    context.commit('quantity', data.count);
    context.dispatch('mathLengthPagination');
    if (data) {
      const result = await Promise.all(
        data.results.map(item => {
          return context.dispatch('GET',
            {url: item.url},
            {root: true})
        })
      );
      return context.commit('list', result);
    }
  },
  async getPokemonById(context) {
    const data = await context.dispatch('GET',
      {url: `${BASE_URL}pokemon/${context.state.currentPokemonId}`},
      {root: true});
    return context.commit('currentPokemon', data);
  },
  async changeLimit(context, payload) {
    context.commit('limit', payload);
    return await context.dispatch('getList')
  },
  async getPokemonSpecies(context, payload) {
    const data = await context.dispatch('GET',
      {url: `${BASE_URL}pokemon/${context.state.currentPokemonId}`},
      {root: true});
    // return context.commit('currentPokemon', data);
  }
};
