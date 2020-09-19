import Vue from 'vue'
import { PlainStore } from './plain/types'

declare module 'vue/types/vue' {
	interface Vue {
		$vuex: PlainStore
	}
}