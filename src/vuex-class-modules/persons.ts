import { VuexModule, Module, Mutation, Action } from "vuex-class-modules"
import { modulesStore } from "../stores"
import { Person, PersonMapping } from '../types'
import { persons } from '../static-persons'
import _keyBy from 'lodash/keyBy'

@Module
class PersonsModule extends VuexModule {
	persons: PersonMapping = {}

	@Mutation
	setPersons(persons: Person[]) {
		this.persons = _keyBy(persons, 'id')
	}

	get personFullName() {
		return (id: string) => {
			const { name, lastName } = this.persons[id]
			return `${name} ${lastName}`
		}
	}

	@Action
	async getPersons() {
		await new Promise(resolve => setTimeout(resolve, 500))
		this.setPersons(persons)
	}
}

// Register the module and Create a proxy to it
export default new PersonsModule({ store: modulesStore, name: "vcm" })
