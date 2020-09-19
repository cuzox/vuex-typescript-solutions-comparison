<template lang="pug">
	.person-wrapper
		.person-wrapper__title Vuex Class
		.person-wrapper__person(v-for="person, id in persons") {{ personFullName(id) }}
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State, Action, Getter } from 'vuex-class'
import { PersonMapping } from '../types'
import { PlainStoreTypes } from '../vuex-class/types'
import { ActionTypes, GetterTypes } from '../plain/persons'

@Component
class VCPersonList extends Vue {
	@State(state => state.plain.persons) persons!: PersonMapping
	@Getter(GetterTypes.GET_PERSON_FULL_NAME) personFullName!: PlainStoreTypes['getters'][GetterTypes.GET_PERSON_FULL_NAME]
	@Action(ActionTypes.GET_PERSONS) getPersons!: PlainStoreTypes['actions'][ActionTypes.GET_PERSONS]

	created(){
		this.getPersons()
	}
}

export default VCPersonList
</script>

