<template>
  <el-header class="app-header" height="70px">
    <router-link to="/" class="logo"></router-link>
    <ul>
      <li>
        <router-link to="/userManagement">
          {{username}}
        </router-link>
      </li>
      <li @click="logout">{{$t('exit')}}</li>
      <li @click="setLang('en')" v-if="language==='zh'">EN</li>
      <li @click="setLang('zh')" v-else>中文</li>
    </ul>
  </el-header>
</template>
<script>
  import API from '../api'

  export default {
    name: 'header',
    data: function() {
      return {
        username: null,
      }
    },
    created() {
      let self = this
      self.$http.get(API.get_login_info, null, r => {
        console.log(r)
        console.log(r.msg)
        r.status==1? self.username=r.userInfo.username:self.username='Avatar'
      })
    },
    computed: {
      language() {
        let currentLang = this.$store.getters.localeLang;
        return currentLang
      }
    },
    methods: {
      setLang(lang) {
        // console.log(lang);
        this.$i18n.locale = lang;
        this.$store.commit('setLanguage', lang)
      },
      logout() {
        let self = this
        self.$http.get(API.logout, null, r => {
          if (r.status == 1) {
            localStorage.clear();
            window.location.href = '/login.html'
          }
        })
      }
    }
  }
</script>
<style lang="scss">
  .logo {
    display: inline-block;
    background-size: 70px;
    cursor: pointer;
    width: 200px;
    height: 50px;
    padding: 0 1rem;
    background: url(../assets/logo.png) no-repeat center / 144px 50px;
  }

  .app-header {
    position: fixed;
    top: 0;
    padding: 0;
    margin: 0;
    display: flex;
    flex: 0 0 60px;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    z-index: 1020;
    border-bottom: 1px solid #29363d;
    background: #4B79A1; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #283E51, #4B79A1); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #283E51, #4B79A1); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    transition: margin-left .25s, margin-right .25s, width .25s, flex .25s, -ms-flex .25s;
    ul {
      display: flex;
    }
    li {
      padding: 0 2em;
    }
  }
</style>
