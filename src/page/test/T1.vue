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
  </div>
</template>

<script>
export default {

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
</style>