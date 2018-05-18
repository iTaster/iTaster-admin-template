import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    language: Cookies.get('language') || 'zh'
  },
  getters: {
    localeLang: state => state.language,
  },
  mutations: {
    setLanguage: (state, language) => {
      state.language = language;
      Cookies.set('language', language);
      // console.log('当前设置的语言为：' + state.language);
    }
  },
  actions: {
    setLanguage({commit}, language) {
      commit('setLanguage', language)
    }
  }
})

export default store
