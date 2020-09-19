<template lang="pug">
	.person-wrapper
		.person-wrapper__title Plain (Injected)
		.person-wrapper__person(v-for="person, id in persons") {{ personFullName(id) }}
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { GetterTypes, ActionTypes } from './persons'

@Component
class PlainInjectedPersonList extends Vue {
	personFullName(id: string){
		return this.$vuex.getters[GetterTypes.GET_PERSON_FULL_NAME](id)
	}

	get persons(){
		return this.$vuex.state.plain.persons
	}

	created(){
		this.$vuex.dispatch(ActionTypes.GET_PERSONS)
	}
}

export default PlainInjectedPersonList
</script>
