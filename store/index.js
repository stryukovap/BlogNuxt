const BASE_URL = 'https://pokeapi.co/api/v2/';
export const state = () => ({
  list: [],
  offset: 0,
  limit: 10,
  limitList: [10, 20, 30],
  quantity: 0,
  length: 0,
  currentPage: 1,
  currentPokemon: {}
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
    return state.currentPokemon.id = payload;
  },
  currentPokemonSpecies(state, payload) {
    return state.currentPokemon.species = payload;
  },
  currentPokemonLocation(state, payload) {
    return state.currentPokemon.location_area_encounters = payload;
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
    const count = context.state.limit * (context.state.currentPage - 1);
    context.commit('offset', count);
    // if (context.state.currentPage === 1) {
    //   context.commit('offset', 0);
    // }
    await context.dispatch('getList');
  },
  async getList(context) {
    try {
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
    } catch (e) {
      console.log(e)
    }
  },
  async getPokemonById(context, payload) {
    try {
      const data = await context.dispatch('GET',
        {url: `${BASE_URL}pokemon/${context.state.currentPokemon.id || payload}`},
        {root: true});
      return context.commit('currentPokemon', data);
    } catch (e) {
      console.log(e)
    }
  },
  async changeLimit(context, payload) {
    context.commit('limit', payload);
    return await context.dispatch('getList')
  },
  async getPokemonSpecies(context) {
    try {
      const data = await context.dispatch('GET',
        {url: `${context.state.currentPokemon.species.url}`},
        {root: true});
      return await context.commit('currentPokemonSpecies', data);
    } catch (e) {
      console.log(e)
    }
  },
  async getPokemonLocation(context) {
    try {
      const data = await context.dispatch('GET',
        {url: `${context.state.currentPokemon.location_area_encounters}`},
        {root: true});
      return await context.commit('currentPokemonLocation', data);
    } catch (e) {
      console.log(e)
    }
  }
};
