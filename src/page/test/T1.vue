<template>
  <div class="T1">
    <div class="a1">
      <div class="box hundred-box">
        background-clip:padding-box 背景颜色不会延伸到 border
      </div>
    </div>
    <br />
    <div class="t1-shadow hundred-box bg-yellow-green" />
    <br />
    <div class="t1-outline hundred-box bg-yellow-green" />
    <br />
    <div class="t1-bg-origin tow-hundred-box bg-yellow-green">
      background-position 的位置正常来说是根据padding-box来定位的
      backgroun-origin 可以修改background-position的参照位置。
    </div>
    <br />
    <div class="t1-border-radius">
      <div>边框内圆角</div>
    </div>

    <br />
    <div class="t1-bg-linear hundred-box" />

    <fieldset>
      <legend>repeating-linear-gradient</legend>
      一个鲜为人知的真相是linear-gradient()和radial-gradient()还各有一个循环式的加强版：
      repeating-linear-gradient() 和repeating-radial-gradient()。
      它们的工作方式跟前两者类似，
      只有一点不同：色标是无限循环重复的，直到填满整个背景. 效果图：
      <div>
        <img src="./img/2071639968842_.pic.jpg" />
        <img src="./img/2061639968768_.pic.jpg" />
      </div>
      <div class="t1-repeating-linear-gradient"></div>
    </fieldset>

    <section>
      <div class="px-title">css 渐变，条纹背景</div>

      <div class="stripe-1 hundred-box">
        通过交错的颜色条 与背景色的配合来展示网格效果
        <!-- 
                background: white;
                background-image: linear-gradient(90deg, rgba(255,0,0, 0.5)50%, transparent 0), linear-gradient(rgba(255,0,0)50%, transparent 0);
                background-size: 30px 30px;
            -->
      </div>

      <div class="stripe-2 hundred-box">
        通过修改bg 颜色条的宽度 来控制网格子的大小。
        <!-- 
                background: #;
                background-image: linear-gradient(90deg, rgba(255,0,0, 0.5)50%, transparent 0), linear-gradient(rgba(255,0,0)50%, transparent 0);
                background-size: 30px 30px;
            -->
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "T1",

  setup() {
    return {};
  },
};
</script>

<style scoped lang="less">
@import "~@/common/style/common.less";

.T1 {
  padding: 10px;
}
.a1 {
  background: purple;
}
.box {
  font-size: 10px;
  background: white;
  border: 10px solid hsla(0, 0%, 100%, 0.5);
  background-clip: padding-box;
  line-height: 2;
}

.t1-shadow {
  box-shadow: 0 0 10px #665, 0 0 15px deeppink;
  transition: all 0.4s;
}

.t1-outline {
  border: 10px solid #655;
  outline: 5px solid deeppink;
  outline-offset: 1px;
}

.t1-bg-origin {
  background-image: url("~@/common/img/BingWallpaper (1).jpg");
  background-position: center;
  padding: 20px;
  border: 10px solid aqua;
  background-origin: content-box;
}

.t1-border-radius {
  width: 100px;
  padding: 0.8em;
  background: #655;
  border-radius: 1em;
  box-shadow: 0 0 1em darkgoldenrod;
}

.t1-border-radius > div {
  border-radius: 0.8em;
  padding: 1em;
  background: tan;
  outline: 5px solid bisque;
}

.t1-bg-linear {
  background: linear-gradient(#fb5 33%, #58a 0, #58a 67%, yellowgreen 0);
  background-size: 100% 45px;
}

.t1-repeating-linear-gradient {
  background: repeating-linear-gradient(
    60deg,
    #fb3,
    #fb3 15px,
    #58a 0,
    #58a 30px
  );
  height: 100px;
}

.stripe-1 {
  background: white;
  background-image: linear-gradient(
      90deg,
      rgba(255, 0, 0, 0.5) 50%,
      transparent 0
    ),
    linear-gradient(rgba(255, 0, 0) 50%, transparent 0);
  background-size: 30px 30px;
}

.stripe-2 {
  background: #58a;
  background-image: linear-gradient(white 2px, transparent 0),
    linear-gradient(90deg, white 2px, transparent 0);
  background-size: 30px 30px;
}
</style>
