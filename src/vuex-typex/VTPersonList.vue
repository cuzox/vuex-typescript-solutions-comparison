<template lang="pug">
	.person-wrapper
		.person-wrapper__title Vuex Typex
		.person-wrapper__person(v-for="person, id in persons") {{ personFullName(id) }}
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Persons from './persons'

@Component
class VTPersonList extends Vue {
	personFullName(id: string){
		return Persons.personFullName(id)
	}

	get persons(){
		return Persons.state.persons
	}

	created(){
		Persons.dispatchGetPersons()
	}
}

export default VTPersonList
</script>
