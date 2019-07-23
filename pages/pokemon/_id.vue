<template>
  <v-container xs10>
    <h1>
      {{$route.params.id}}
    </h1>
    <Card :height="currentPokemon.height"
          :weight="currentPokemon.weight"
          :base_experience="currentPokemon.base_experience"
          :id="currentPokemon.id"
          :name="currentPokemon.name"
          :front_default="currentPokemon.sprites.front_default"
          :back_default="currentPokemon.sprites.back_default">
    </Card>
    <div>
      <ul>Stats
        <li v-for="item in currentPokemon.stats">
          {{item.stat.name}} = {{item.base_stat}}
        </li>
      </ul>
      <ul>Types
        <li v-for="item in currentPokemon.types">
          {{item.type.name}}
        </li>
      </ul>
      <ul>Forms
        <li v-for="item in currentPokemon.forms">
          {{item.name}}
        </li>
      </ul>
      <ul>Species
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
        <li>flavor_text_entries
          <ul>
            <li v-for="item in currentPokemon.species.flavor_text_entries">
              {{item.flavor_text}}
            </li>
          </ul>
        </li>
        <!--          form_descriptions:Array[0]-->
        <!--          forms_switchable:false-->
        <!--          gender_rate:4-->
        <!--          genera:Array[10]-->
        <!--          generation:Object-->
        <!--          growth_rate:Object-->
        <!--          habitat:Object-->
        <!--          has_gender_differences:true-->
        <!--          hatch_counter:15-->
        <!--          is_baby:false-->
        <!--          name:"rattata"-->
        <!--          names:Array[11]-->
      </ul>
      <ul>Abilities
        <li v-for="item in currentPokemon.abilities">
          {{item.ability.name}}
        </li>
      </ul>
      <ul>held_items
        <li v-for="item in currentPokemon.held_items">
          {{item.item.name}}
        </li>
      </ul>
      <ul>location_area_encounters
        <li v-for="item in currentPokemon.location_area_encounters">
          {{item.location_area.name}}
        </li>
      </ul>
      <!--            {{currentPokemon.species}}-->
      <!--            {{currentPokemon.abilities}}-->
      <!--            {{currentPokemon.held_items}}-->
      <!--            {{currentPokemon.location_area_encounters}}-->
    </div>
  </v-container>
</template>
<script>
  import {mapState} from "vuex";
  import Card from "../../components/Card";

  export default {
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
