import Vue from "vue"
import Vuex from "vuex"
import { PlainStore } from './plain/types'

Vue.use(Vuex)

Object.defineProperty(Vue.prototype, "$vuex", {
	get(): PlainStore {
		return this.$store
	},
	enumerable: true
})

export const plainStore: PlainStore = new Vuex.Store({})

export const modulesStore = new Vuex.Store({})