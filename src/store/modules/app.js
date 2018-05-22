import Cookies from 'js-cookie'

const app = {
  state: {                                        // 类似于 data
    language: Cookies.get('language') || 'zh',    // 设置语言
    sidebar: {
      isFold:  false,                            // 左侧边栏是否折叠
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
    sidebarFold: state => {
      state.sidebar.isFold = false;
    },
    sidebarShow: (state, key) => {
      key ? state.sidebar.isShow = true : state.sidebar.isShow = false;
      // console.log('当前左侧边栏是否隐藏：' + state.sidebar.isShow);
    },
    logoAndSidebarSmall:(state, key) => {
      key? state.sidebar.isSmall = true : state.sidebar.isSmall = false;

    },
  },
  actions: {                                    // 分发 mutations 里面的方法
    setLanguage({commit}, language) {
      commit('setLanguage', language)
    },
    sidebarFold({commit}) {
      commit('sidebarFold')
    },

  }
}

export default app
