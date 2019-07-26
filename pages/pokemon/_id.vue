<template>
  <v-container xs10>
    <Card :height="currentPokemon.height"
          :weight="currentPokemon.weight"
          :base_experience="currentPokemon.base_experience"
          :id="currentPokemon.id"
          :name="currentPokemon.name"
          :front_default="currentPokemon.sprites.front_default"
          :back_default="currentPokemon.sprites.back_default">
    </Card>
    <div style="margin-top: 25px;">
      <h2>Stats</h2>
      <ul>
        <li v-for="item in currentPokemon.stats">
          {{item.stat.name}} = {{item.base_stat}}
        </li>
      </ul>
      <h2>Types</h2>
      <ul>
        <li v-for="item in currentPokemon.types">
          {{item.type.name}}
        </li>
      </ul>
      <h2>Forms</h2>
      <ul>
        <li v-for="item in currentPokemon.forms">
          {{item.name}}
        </li>
      </ul>
      <h2>Species</h2>
      <ul>
        <li>base_happiness = {{currentPokemon.species.base_happiness}}</li>
        <li>capture_rate = {{currentPokemon.species.capture_rate}}</li>
        <li>color = {{currentPokemon.species.color.name}}</li>
        <li>egg_groups
          <ul>
            <li v-for="item in currentPokemon.species.egg_groups">
              {{item.name}}
            </li>
          </ul>
        </li>
        <li>
          <h2>flavor_text_entries</h2>
          <ul>
            <li v-for="item in currentPokemon.species.flavor_text_entries">
              {{item.flavor_text}}
            </li>
          </ul>
        </li>
      </ul>
      <h2>Abilities</h2>
      <ul>
        <li v-for="item in currentPokemon.abilities">
          {{item.ability.name}}
        </li>
      </ul>
      <h2>held_items</h2>
      <ul>
        <li v-for="item in currentPokemon.held_items">
          {{item.item.name}}
        </li>
      </ul>
      <h2>location_area_encounters</h2>
      <ul>
        <li v-for="item in currentPokemon.location_area_encounters">
          {{item.location_area.name}}
        </li>
      </ul>
    </div>
  </v-container>
</template>
<script>
  import {mapState} from "vuex";
  import Card from "../../components/Card";

  export default {
    // data(){
    //   return{
    //
    //   }
    // },
    // created:{
    //   function(){
    //     const payload = this.$store.state.currentPokemon;
    //     if(payload.hasOwnProperty()){
    //       console.log('------');
    //       return true
    //     }
    //   }
    // },
    validate({params}) {
      // return !!params.id || (params.id < this.$store.state.quantity) || (params.id = 0)
      return !!params.id
    },
    components: {
      Card
    },
    async fetch({store}) {
      await store.dispatch('getPokemonById');
      await store.dispatch('getPokemonSpecies');
      await store.dispatch('getPokemonLocation');
    },
    computed: {
      ...mapState([
        'currentPokemon'
      ])
    }
  }
</script>
