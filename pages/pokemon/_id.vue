<template>
  <v-container xs10 v-if="currentPokemon">
    <Card v-if="currentPokemon.sprites"
          :height="currentPokemon.height"
          :weight="currentPokemon.weight"
          :base_experience="currentPokemon.base_experience"
          :id="currentPokemon.id"
          :name="currentPokemon.name"
          :front_default="currentPokemon.sprites.front_default"
          :back_default="currentPokemon.sprites.back_default">
    </Card>
    <div style="margin-top: 25px;">
      <h3>Stats</h3>
      <ul>
        <li v-for="item in currentPokemon.stats">
          {{item.stat.name}} = {{item.base_stat}}
        </li>
      </ul>
      <h3>Types</h3>
      <ul>
        <li v-for="item in currentPokemon.types">
          {{item.type.name}}
        </li>
      </ul>
      <h3>Forms</h3>
      <ul>
        <li v-for="item in currentPokemon.forms">
          {{item.name}}
        </li>
      </ul>
      <h3>Abilities</h3>
      <ul>
        <li v-for="item in currentPokemon.abilities">
          {{item.ability.name}}
        </li>
      </ul>
      <h3>held_items</h3>
      <ul>
        <li v-for="item in currentPokemon.held_items">
          {{item.item.name}}
        </li>
      </ul>
      <h3>location_area_encounters</h3>
      <ul>
        <li v-for="item in currentPokemon.location_area_encounters">
          {{item.location_area.name}}
        </li>
      </ul>
      <h3>Species</h3>
      <ul v-if="currentPokemon.species">
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
          <h3>flavor_text_entries</h3>
          <ul>
            <li v-for="item in currentPokemon.species.flavor_text_entries">
              {{item.flavor_text}}
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <!--        <v-expansion-panels accordion>-->
    <!--          <v-expansion-panel-->
    <!--            v-for="(item,i) in 5"-->
    <!--            :key="i"-->
    <!--          >-->
    <!--            <v-expansion-panel-header>Item</v-expansion-panel-header>-->
    <!--            <v-expansion-panel-content>-->
    <!--              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore-->
    <!--              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo-->
    <!--              consequat.-->
    <!--            </v-expansion-panel-content>-->
    <!--          </v-expansion-panel>-->
    <!--        </v-expansion-panels>-->
  </v-container>
</template>
<script>
  import {mapState} from "vuex";
  import Card from "../../components/Card";
  // import {VExpansionPanelContent, VExpansionPanel} from 'vuetify/lib'

  export default {
    data() {
      return {
        init: false
      }
    },
    validate({params}) {
      return !!params.id
    },
    components: {
      Card,
      // VExpansionPanel,
      // VExpansionPanelContent
    },
    async fetch({store, params}) {
      await store.dispatch('getPokemonById', params.id);
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
