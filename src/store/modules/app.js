import Cookies from 'js-cookie'

const app = {
  state: {                                        // 类似于 data
    language: Cookies.get('language') || 'zh',    // 设置语言
    sidebar: {
      isFold: false,                            // 左侧边栏是否折叠
      isShow: false,                             // 左侧边栏是否隐藏
      isSmall: false                              // Logo & Sidebar 是否同时变小
    }
  },
  mutations: {                                    // 类似于 methods
    setLanguage: (state, language) => {
      state.language = language;
      Cookies.set('language', language);
      // console.log('当前设置的语言为：' + state.language);
    },
    sidebarFold: (state, key) => {
      state.sidebar.isFold = key;
      // Cookies.set('sidebar', key);
    },
    sidebarShow: (state, key) => {
      state.sidebar.isShow = key;
      // console.log('当前左侧边栏是否隐藏：' + state.sidebar.isShow);
    },
    logoAndSidebarSmall: (state, key) => {
      state.sidebar.isSmall = key
    },
  },
  actions: {                                    // 分发 mutations 里面的方法
    setLanguage({commit}, language) {
      commit('setLanguage', language)
    },
    sidebarFold({commit}, key) {
      commit('sidebarFold', key)
    },

  }
}

export default app
