import { getStoreBuilder, BareActionContext } from "vuex-typex"
import { Person, PersonMapping } from '../types'
import { modulesStore } from "../stores"
import { Store } from 'vuex'
import _keyBy from 'lodash/keyBy'
import { persons } from '../static-persons'

export interface PersonsState { persons: PersonMapping }
export interface RootState { vt: PersonsState }

const b = getStoreBuilder<RootState>().module<PersonsState>("vt", {
	persons: {}
})

/* Mutations */
const setPersonsMutation = (state: PersonsState, persons: Person[]) => state.persons = _keyBy(persons, 'id')
/* End Mutations */

/* Getters */
const stateGetter = b.state()
const personFullNameGetter = b.read(state => (id: string) => `${state.persons[id].name} ${state.persons[id].lastName}`, "personFullName")
/* End Getters */

/* Actions */
const getPersonsAction = async (context: BareActionContext<PersonsState, RootState>) => {
	await new Promise(resolve => setTimeout(resolve, 500))
	Persons.commitSetPersons(persons)
}
/* End Actions */

// Define the module
const Persons = {
	commitSetPersons: b.commit(setPersonsMutation),

	get state(){ return stateGetter() },
	get personFullName(){ return personFullNameGetter() },

	dispatchGetPersons: b.dispatch(getPersonsAction)
}

// Register the module in the store
modulesStore.registerModule(['vt'], b.vuexModule() as any)

// Associate the store to the module
b._provideStore(modulesStore as Store<RootState>)

export default Persons
