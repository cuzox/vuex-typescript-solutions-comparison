import { modulesStore } from "../stores"
import { createModule, mutation, action, extractVuexModule, createProxy } from 'vuex-class-component'
import { Person, PersonMapping } from '../types'
import { persons } from '../static-persons'
import _keyBy from 'lodash/keyBy'


const VuexModule = createModule({
	namespaced: 'vcc'
})

class PersonsModule extends VuexModule {
	persons: PersonMapping = {}

	@mutation
	setPersons(persons: Person[]) {
		this.persons = _keyBy(persons, 'id')
	}

	get personFullName() {
		return (id: string) => {
			const { name, lastName } = this.persons[id]
			return `${name} ${lastName}`
		}
	}

	@action
	async getPersons() {
		await new Promise(resolve => setTimeout(resolve, 500))
		this.setPersons(persons)
	}
}

// Register the module in the store
modulesStore.registerModule(['vcc'], extractVuexModule( PersonsModule )['vcc'])

// Create a proxy to the connected module
export default createProxy(modulesStore, PersonsModule)
