import { VuexModule, Module, MutationAction, getModule } from "vuex-module-decorators"
import { modulesStore } from "../stores"
import { PersonMapping } from '../types'
import { persons } from '../static-persons'
import _keyBy from 'lodash/keyBy'

@Module({
	name: 'vmd',
	store: modulesStore,
	dynamic: true,
})
class PersonsModule extends VuexModule {
	persons: PersonMapping = {}

	get personFullName() {
		return (id: string) => {
			const { name, lastName } = this.persons[id]
			return `${name} ${lastName}`
		}
	}

	@MutationAction
	async getPersons() {
		await new Promise(resolve => setTimeout(resolve, 500))
		return { persons: _keyBy(persons, 'id') }
	}
}

export default getModule(PersonsModule)
