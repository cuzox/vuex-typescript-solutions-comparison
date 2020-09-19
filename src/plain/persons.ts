import { plainStore } from "../stores"
import { Person } from "../types"
import { MutationTree, GetterTree, ActionContext, ActionTree } from "vuex"
import { persons } from "../static-persons"
import { RootState, PersonsModule } from "./types"
import _keyBy from 'lodash/keyBy'

type S = PersonsModule // Module
type R = RootState // Root state

/* Mutation names */
export enum MutationTypes {
  SET_PERSONS = "SET_PERSONS"
}

/* Type definition of our mutations */
export interface Mutations {
  [MutationTypes.SET_PERSONS](state: S, payload: Person[]): void
}

/* Enumeration of our mutations */
export const mutations: MutationTree<S> & Mutations = {
  [MutationTypes.SET_PERSONS](state, persons) {
    state.persons = _keyBy(persons, 'id')
  }
}

/* Getter names */
export enum GetterTypes {
  GET_PERSON_FULL_NAME = "GET_PERSON_FULL_NAME"
}

/* Type definition of our actions */
export interface Getters {
  [GetterTypes.GET_PERSON_FULL_NAME](state: S): (id: string) => string
}

/* Enumeration of our actions */
export const getters: GetterTree<S, R> & Getters = {
  [GetterTypes.GET_PERSON_FULL_NAME]: (state) => (id) => {
    const { name, lastName } = state.persons[id]
    return `${name} ${lastName}`
  }
}

/* Action names */
export enum ActionTypes {
  GET_PERSONS = "GET_PERSONS"
}

/* We only want to commit valid mutations, so we override the commit function of the ActionContext */
interface AugmentedActionContext extends Omit<ActionContext<S, R>, "commit"> {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
}

/* Type definition of our actions */
export interface Actions {
  [ActionTypes.GET_PERSONS]({ commit }: AugmentedActionContext): Promise<void>
}

/* Enumeration of our actions */
export const actions: ActionTree<S, R> & Actions = {
  async [ActionTypes.GET_PERSONS]({ commit }) {
    await new Promise((resolve) => setTimeout(resolve, 300))
    commit(MutationTypes.SET_PERSONS, persons)
  }
}

plainStore.registerModule("plain", {
  state: () => ({
    persons: {}
  }),
  mutations,
  getters,
  actions
})
