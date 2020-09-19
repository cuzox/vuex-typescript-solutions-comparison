
import { Mutations, Actions, Getters } from '../plain/types'

export interface PlainStoreTypes {
	mutations: {
		[K in keyof Mutations]: (
			payload?: Parameters<Mutations[K]>[1],
		) => ReturnType<Mutations[K]>
	}

	getters: {
		[K in keyof Getters]: ReturnType<Getters[K]>
	}

	actions: {
		[K in keyof Actions]: (
			payload?: Parameters<Actions[K]>[1],
		) => ReturnType<Actions[K]>
	}
}
