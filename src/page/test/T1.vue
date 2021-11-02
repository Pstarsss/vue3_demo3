<template>
  <div class="T1">
    T1
    <div class="a1">
        <div class="box hundred-box">
            background-clip:padding-box 
            背景颜色不会延伸到 border
        </div>
    </div>
    <br>
    <div class="t1-shadow hundred-box bg-yellow-green" />
    <br>
    <div class="t1-outline hundred-box bg-yellow-green" />
    <br>
    <div class="t1-bg-origin tow-hundred-box bg-yellow-green">
        background-position 的位置正常来说是根据padding-box来定位的
        backgroun-origin 可以修改background-position的参照位置。
    </div>
    <br>
    <div class="t1-border-radius">
        <div>边框内圆角</div>
    </div>

    <br>
    <div class="t1-bg-linear hundred-box" />
  </div>
</template>

<script>
export default {
    name: 'T1',

    setup() {
        return {

        }
    }
}
</script>

<style rel="stylesheet/scss" scoped>
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
    background-image: url('~@/common/img/BingWallpaper (1).jpg');
    background-position: center;
    padding: 20px;
    border: 10px solid aqua;
    background-origin: content-box;
}

.t1-border-radius {
    width: 100px;
    padding: .8em;
    background: #655;
    border-radius: 1em;
    box-shadow: 0 0 1em darkgoldenrod;
}   

.t1-border-radius > div {
    border-radius: .8em;
    padding: 1em;
    background: tan;
    outline: 5px solid bisque;
}

.t1-bg-linear {
    background: linear-gradient(#fb5 33%, #58a 0, #58a 67%, yellowgreen 0);
    background-size: 100% 45px;
}
</style>