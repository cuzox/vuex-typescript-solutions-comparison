<template lang="pug">
	.person-wrapper
		.person-wrapper__title Plain (Imported)
		.person-wrapper__person(v-for="person, id in persons") {{ personFullName(id) }}
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { GetterTypes, ActionTypes } from './persons'
import { plainStore as store } from '../stores'

@Component
class PlainImportedPersonList extends Vue {
	personFullName(id: string){
		return store.getters[GetterTypes.GET_PERSON_FULL_NAME](id)
	}

	get persons(){
		return store.state.plain.persons
	}

	created(){
		store.dispatch(ActionTypes.GET_PERSONS)
	}
}

export default PlainImportedPersonList
</script>
