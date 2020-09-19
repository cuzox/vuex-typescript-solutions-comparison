import { Getters, Mutations, Actions, Module, registerModule } from 'vuex-smart-module'
import { modulesStore } from "../stores"
import { Person, PersonMapping } from '../types'
import { persons } from '../static-persons'
import _keyBy from 'lodash/keyBy'

class PersonsState {
	persons: PersonMapping = {}
}

class PersonsGetter extends Getters<PersonsState> {
	get personFullName() {
		return (id: string) => {
			const { name, lastName } = this.state.persons[id]
			return `${name} ${lastName}`
		}
	}
}

class PersonsMutations extends Mutations<PersonsState> {
	setPersons(persons: Person[]) {
		this.state.persons = _keyBy(persons, 'id')
	}
}

class PersonsActions extends Actions<
	PersonsState,
	PersonsGetter,
	PersonsMutations,
	PersonsActions
> {
	async getPersons() {
		await new Promise(resolve => setTimeout(resolve, 500))
		this.commit('setPersons', persons)
	}
}

// Create module instance for registration
const Persons = new Module({
	state: PersonsState,
	getters: PersonsGetter,
	mutations: PersonsMutations,
	actions: PersonsActions
})

// Register module in the store
registerModule(
	modulesStore,
	['vsm'],
	'vsm/',
	Persons
)

// Associate module with the store for exporting
export default Persons.context(modulesStore)