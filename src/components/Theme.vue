<template>
  <div class="theme">
    <canvas id="starCanvas" class="canvas-star"></canvas>
    <div class="space">
      <div v-for="i in 16" :class="[(i-1)==0?'star':`star star${i-1}`]"></div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "Theme",
    methods: {
      loadStarry() {
        if (!window.addEventListener) {
          document.body.insertAdjacentHTML("afterbegin", '<div class="no-support">当前浏览器版本过低，本页面未对其进行支持</div>');
          return
        }
        var e = navigator.userAgent;
        if (/Safari|iphone/i.test(e) && /chrome/i.test(e) == false) {
          document.querySelector(".main").classList.add("safari")
        }
        var t = document.querySelector("#starCanvas");
        var i = t.getContext("2d");
        var a = {}, n = 0,
          r = {
            r: 1400,
            height: 260,
            density: 300,
            maxLife: 100,
            groundLevel: t.height,
            leftWall: 0,
            rightWall: t.width,
            alpha: 0,
            maxAlpha: 1
          };
        var o = function () {
          var e = Math.random();
          var t = Math.ceil(1 / (1 - e));
          var i = [];
          for (var a = 0; a < t; a++) {
            i.push(Math.random())
          }
          return Math.min.apply(null, i)
        };

        function s() {
          t.width = window.innerWidth;
          t.height = window.innerHeight;
          r.rightWall = t.width;
          r.groundLevel = t.height;
          for (var e in a) {
            a[e].y = o() * t.height
          }
          l();
          if (t.width <= 480) {
            document.body.className = "mobile"
          } else {
            document.body.className = "pc"
          }
        }

        s();
        window.addEventListener("resize", s);

        function l() {
          i.clearRect(0, 0, t.width, t.height)
        }

        function h() {
          var e = t.width / 2, i = t.height;
          this.x = Math.floor(Math.random() * t.width);
          this.y = o() * t.height;
          this.vx = Math.random() * .1 + .05;
          this.particleSize = .5 + (Math.random() + .1 / 4);
          n++;
          a[n] = this;
          this.alpha = 0;
          this.maxAlpha = .2 + this.y / t.height * Math.random() * .8;
          this.alphaAction = 1
        }

        h.prototype.draw = function () {
          this.x += this.vx;
          if (this.alphaAction == 1) {
            if (this.alpha < this.maxAlpha) {
              this.alpha += .005
            } else {
              this.alphaAction = -1
            }
          } else {
            if (this.alpha > .2) {
              this.alpha -= .002
            } else {
              this.alphaAction = 1
            }
          }
          if (this.x + this.particleSize * 2 >= r.rightWall) {
            this.x = this.x - r.rightWall
          }
          i.beginPath();
          i.fillStyle = "rgba(255,255,255," + this.alpha.toString() + ")";
          i.arc(this.x, this.y, this.particleSize, 0, Math.PI * 2, true);
          i.closePath();
          i.fill()
        };

        function c() {
          l();
          var e = 400;
          if (!history.pushState) {
            e = 200
          } else if (document.msHidden != undefined) {
            e = 300
          }
          if (screen.width < 1024) {
            e = 200
          }
          if (screen.width < 640) {
            e = 100
          }
          if (Object.keys(a).length > e) {
            r.density = 0
          }
          for (var t = 0; t < r.density; t++) {
            if (Math.random() > .97) {
              new h
            }
          }
          for (var t in a) {
            a[t].draw()
          }
          requestAnimationFrame(c)
        }

        if (!window.requestAnimationFrame) {
          window.requestAnimationFrame = function (e) {
            setTimeout(e, 17)
          }
        }
        c();
      }
    },
    mounted() {
      this.loadStarry();
    },
  }
</script>
<style lang="scss">
  .theme{
    position: absolute;
    background-color: #141E30;
    z-index: 0;
  }
  .canvas-star {
    position: absolute;
  }

  .space {
    width: 100vw;
    height: 100vh;
    z-index: 1;
    float: left;
    overflow: hidden;
    .star {
      display: block;
      width: 0;
      height: 0;
      border-radius: 50%;
      background: #fff;
      top: -50px;
      left: 200px;
      position: relative;
      transform-origin: 100% 0;
      animation: star-ani 6s infinite ease-out;
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.3);
      opacity: 0;
      z-index: 2;
      &:after {
        content: '';
        display: block;
        top: -10px;
        left: 200px;
        border: 0 solid #fff;
        border-width: 0 90px 3px 90px;
        border-color: transparent transparent transparent #fff;
        transform: rotate(-45deg) translate3d(1px, 3px, 0);
        box-shadow: 0 0 1px 0 rgba(255, 255, 255, 0.1);
        transform-origin: 0% 100%;
        animation: shooting-ani 1s infinite ease-out;
      }
    }
    .star1 {
      top: -10px;
      left: 300px;
      background: #fff;
      animation-delay: 0.5s;
      &:after {
        border-color: transparent transparent transparent #fff;
        animation-delay: 0.5s;
      }
    }
    .star2 {
      top: 100px;
      left: 200px;
      background: #fff;
      animation-delay: 0s;
      &:after {
        border-color: transparent transparent transparent #fff;
        animation-delay: 0s;
      }
    }
    .star3 {
      top: -10px;
      left: 100px;
      background: #fff;
      animation-delay: 1.5s;
      &:after {
        border-color: transparent transparent transparent #fff;
        animation-delay: 1.5s;
      }
    }
    .star4 {
      top: 100px;
      left: 250px;
      background: #fff;
      animation-delay: 1.5s;
      &:after {
        border-color: transparent transparent transparent #fff;
        animation-delay: 1.5s;
      }
    }
    .star5 {
      top: 200px;
      left: 250px;
      background: #fff;
      animation-delay: 1.5s;
      &:after {
        border-color: transparent transparent transparent #fff;
        animation-delay: 1.5s;
      }
    }
    .star6 {
      top: -10px;
      left: 100px;
      background: #fff;
      animation-delay: 1.5s;
      &:after {
        border-color: transparent transparent transparent #fff;
        animation-delay: 1.5s;
      }
    }
    .star7 {
      top: 100px;
      left: 200px;
      background: #fff;
      animation-delay: 3s;
      &:after {
        border-color: transparent transparent transparent #fff;
        animation-delay: 3s;
      }
    }
    .star13 {
      top: -10px;
      left: 210px;
      background: #fff;
      animation-delay: 3s;
      &:after {
        border-color: transparent transparent transparent #fff;
        animation-delay: 3s;
      }
    }
    .star14 {
      top: -100px;
      left: 150px;
      background: #fff;
      animation-delay: 2s;
      &:after {
        border-color: transparent transparent transparent #fff;
        animation-delay: 2s;
      }
    }
    .star15 {
      top: 200px;
      left: 250px;
      background: #fff;
      animation-delay: 2.5s;
      &:after {
        border-color: transparent transparent transparent #fff;
        animation-delay: 2.5s;
      }
    }
    .star8 {
      top: -10px;
      left: 100px;
      background: #fff;
      animation-delay: 3s;
      &:after {
        border-color: transparent transparent transparent #fff;
        animation-delay: 3s;
      }
    }
    .star9 {
      top: 100px;
      left: 250px;
      background: #fff;
      animation-delay: 4s;
      &:after {
        border-color: transparent transparent transparent #fff;
        animation-delay: 4s;
      }
    }
    .star10 {
      top: 200px;
      left: 250px;
      background: #fff;
      animation-delay: 5s;
      &:after {
        border-color: transparent transparent transparent #fff;
        animation-delay: 5s;
      }
    }
    .star11 {
      top: -10px;
      left: 100px;
      background: #fff;
      animation-delay: 5s;
      &:after {
        border-color: transparent transparent transparent #fff;
        animation-delay: 5s;
      }
    }
    .star12 {
      top: -10px;
      left: 100px;
      background: #fff;
      animation-delay: 6s;
      &:after {
        border-color: transparent transparent transparent #fff;
        animation-delay: 6s;
      }
    }
  }

  @keyframes star-ani {
    0% {
      opacity: 0;
      transform: scale(0) rotate(0) translate3d(0, 0, 0);
    }

    50% {
      opacity: 1;
      transform: scale(1) rotate(0) translate3d(-300px, 300px, 0);
    }

    100% {
      opacity: 0;
      transform: scale(1) rotate(0) translate3d(-400px, 300px, 0);
    }
  }
</style>

