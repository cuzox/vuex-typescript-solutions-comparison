
import { PersonMapping } from '../types'
import { Store as VuexStore, CommitOptions, DispatchOptions } from 'vuex'
import { Mutations as PlainMutations, Getters as PlainGetters, Actions as PlainActions } from './persons'

export type Mutations = PlainMutations // union with mutations from other modules
export type Getters = PlainGetters // union with getters from other modules
export type Actions = PlainActions // union with actions from other modules

export interface PersonsModule {
  persons: PersonMapping
}

export interface RootState {
	plain: PersonsModule
}

export interface PlainStore extends Omit<VuexStore<RootState>, 'commit' | 'getters' | 'dispatch'> {
	commit<K extends keyof Mutations>(
		key: K,
		payload?: Parameters<Mutations[K]>[1],
		options?: CommitOptions
	): ReturnType<Mutations[K]>

	getters: {
		[K in keyof Getters]: ReturnType<Getters[K]>
	}

	dispatch<K extends keyof Actions>(
		key: K,
		payload?: Parameters<Actions[K]>[1],
		options?: DispatchOptions
	): ReturnType<Actions[K]>
}
