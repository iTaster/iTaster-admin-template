import Cookies from 'js-cookie'

const app = {
  state: {    // 类似于 data
    language: Cookies.get('language') || 'zh',    // 设置语言
    sidebar: {
      fold: Cookies.get('sidebarFold') || true,          // 左侧边栏是否折叠
      show: Cookies.get('sidebarShow') || true         // 左侧边栏是否隐藏
    }
  },
  mutations: {   // 类似于 methods
    setLanguage: (state, language) => {
      state.language = language;
      Cookies.set('language', language);
      console.log('当前设置的语言为：' + state.language);
    },
    sidebarFold: state => {
      if (state.sidebar.fold) {
        Cookies.set('sidebarFold', 1)
      } else {
        Cookies.set('sidebarFold', 0)
      }
      console.log('当前左侧边栏是否折叠：' + state.sidebar.fold);
      state.sidebar.fold = !state.sidebar.fold
    },
    sidebarShow: state => {

    }
  },
  actions: {    // 分发 mutations 里面的方法
    setLanguage({commit}, language) {
      commit('setLanguage', language)
    },
    sidebarFold() {
      commit('sidebarFold', language)
    },
    sidebarShow() {
      commit('sidebarShow', language)
    }
  }
}

export default app
