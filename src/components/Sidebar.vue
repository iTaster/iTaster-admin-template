<template>
  <el-aside class="sidebar" width="200px">
    <nav class="sidebar-nav">

    </nav>
    <button type="button" class="sidebar-minimizer"></button>
  </el-aside>
</template>

<script>
    export default {
        name: "sidebar"
    }
</script>

<style lang="scss">
  .sidebar {
    display: flex;
    flex-direction: column;
    padding: 0;
    color: #fff;
    background: #29363d;
    transition: width .25s;

    z-index: 1019;
    width: 200px;
    height: calc(100vh - 70px);
  }
  .sidebar-minimizer{
    position: relative;
    flex: 0 0 50px;
    background-color: rgba(0,0,0,.2);
    border: 0;
    &:hover{
      background-color: rgba(0,0,0,.3);
      &::before{
        background-image: url(data:image/svg+xml;charset=utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMSAxNCI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTkuMTQ4IDIuMzUyIDUgNi41bDQuMTQ4IDQuMTQ4cS4xNDguMTQ4LjE0OC4zNTJ0LS4xNDguMzUybC0xLjI5NyAxLjI5N3EtLjE0OC4xNDgtLjM1Mi4xNDh0LS4zNTItLjE0OGwtNS43OTctNS43OTdxLS4xNDgtLjE0OC0uMTQ4LS4zNTJ0LjE0OC0uMzUybDUuNzk3LTUuNzk3cS4xNDgtLjE0OC4zNTItLjE0OHQuMzUyLjE0OGwxLjI5NyAxLjI5N3EuMTQ4LjE0OC4xNDguMzUydC0uMTQ4LjM1MnoiLz48L3N2Zz4=);
      }
    }
    &::before{
      position: absolute;
      top: 0;
      right: 0;
      width: 50px;
      height: 50px;
      content: "";
      background-image: url(data:image/svg+xml;charset=utf8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMSAxNCI+PHBhdGggZmlsbD0iIzUzNmM3OSIgZD0iTTkuMTQ4IDIuMzUyIDUgNi41bDQuMTQ4IDQuMTQ4cS4xNDguMTQ4LjE0OC4zNTJ0LS4xNDguMzUybC0xLjI5NyAxLjI5N3EtLjE0OC4xNDgtLjM1Mi4xNDh0LS4zNTItLjE0OGwtNS43OTctNS43OTdxLS4xNDgtLjE0OC0uMTQ4LS4zNTJ0LjE0OC0uMzUybDUuNzk3LTUuNzk3cS4xNDgtLjE0OC4zNTItLjE0OHQuMzUyLjE0OGwxLjI5NyAxLjI5N3EuMTQ4LjE0OC4xNDguMzUydC0uMTQ4LjM1MnoiLz48L3N2Zz4=);
      background-repeat: no-repeat;
      background-position: 50%;
      background-size: 12.5px;
      transition: .3s;
    }
  }

</style>
