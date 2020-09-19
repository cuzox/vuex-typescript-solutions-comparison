<template lang="pug">
	.person-wrapper
		.person-wrapper__title Vuex Smart Module
		.person-wrapper__person(v-for="person, id in persons") {{ personFullName(id) }}
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Persons from './persons'

@Component
class VSMPersonList extends Vue {
	personFullName(id: string){
		return Persons.getters.personFullName(id)
	}

	get persons(){
		return Persons.state.persons
	}

	created(){
		Persons.actions.getPersons()
	}
}

export default VSMPersonList
</script>
