<template lang="pug">
	.wrapper
		plain-injected-person-list
		plain-imported-person-list
		vc-person-list
		vt-person-list
		vsm-person-list
		vcc-person-list
		vcm-person-list
		vmd-person-list
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"
import PlainInjectedPersonList from './plain/PlainInjectedPersonList.vue'
import PlainImportedPersonList from './plain/PlainImportedPersonList.vue'
import VCPersonList from './vuex-class/VCPersonList.vue'
import VTPersonList from './vuex-typex/VTPersonList.vue'
import VSMPersonList from './vuex-smart-module/VSMPersonList.vue'
import VCCPersonList from './vuex-class-component/VCCPersonList.vue'
import VCMPersonList from './vuex-class-modules/VCMPersonList.vue'
import VMDPersonList from './vuex-module-decorators/VMDPersonList.vue'

@Component({
	components: {
		'plain-injected-person-list': PlainInjectedPersonList,
		'plain-imported-person-list': PlainImportedPersonList,
		'vc-person-list': VCPersonList,
		'vt-person-list': VTPersonList,
		'vsm-person-list': VSMPersonList,
		'vcc-person-list': VCCPersonList,
		'vcm-person-list': VCMPersonList,
		'vmd-person-list': VMDPersonList
	}
})
class App extends Vue {}

export default App
</script>

<style lang="scss">
body {
	margin-top: 30px;
}

.wrapper {
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
}

.person-wrapper {
	background-color: lightgray;
	margin: 0 20px 20px 0;
	padding: 10px;
	border-radius: 5px;

	&__title {
		margin-bottom: 10px;
		font-weight: bold;
	}
}
</style>
