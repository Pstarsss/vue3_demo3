<!-- @author xingpan -->
<!-- @email xingpan@1377689310.com -->
<!-- @date 2022-12-29 10:42:21 -->
<!-- @desc index -->

<script setup lang="ts">

    import {ref, onMounted} from 'vue';
    import coverImg from './img/灰色刮开区域@2x.png';
    
    // 初始化配置
    let canvasOffsetX, canvasOffsetY;
    const hastouch = 'ontouchstart' in window ? true : false;
    const tapstart = hastouch ? 'touchstart' : 'mousedown';
    const tapmove = hastouch ? 'touchmove' : 'mousemove';
    const tapend = hastouch ? 'touchend' : 'mouseup';
    let hasDone = false; 
    let mouseDownFlag = false; // 鼠标落下
    let mouseUpFlag = false; // 鼠标抬起

    // 获取画布dom 在onMounted里面获取
    const canvas = ref();
    const eventUp = (e) => {
        mouseUpFlag = true; 
        mouseDownFlag = false;
        e.preventDefault();
    }

    const eventDown = (e) => {
        mouseUpFlag = false; 
        mouseDownFlag = true;
        e.preventDefault();
    }

    const eventMove = (e) => {
        if (hasDone) return; // 刮奖结束则return
        const ctx = canvas.value.getContext('2d');
        e.preventDefault();
        if (mouseDownFlag) {
            console.log('mousedown', e);
            let x = e.pageX - canvasOffsetX,
                y = e.pageY - canvasOffsetY;

            ctx.beginPath();
            ctx.arc(x, y, 20, 0, Math.PI * 2);
            ctx.fill();
        }
    }


    onMounted(() => {
        canvas.value.width = 287;
        canvas.value.height = 78;
        const ctx = canvas.value.getContext('2d');
        const img = new Image();
        img.src = coverImg;
        img.onload = function () {
            canvasOffsetX = canvas.value.offsetLeft || 0;
            canvasOffsetY = canvas.value.offsetTop || 0;
            ctx.drawImage(img, 0, 0, 287, 78);

            ctx.globalCompositeOperation = 'destination-out';
            canvas.value.addEventListener(tapstart, eventDown, false);
            canvas.value.addEventListener(tapend, eventUp, false);
            canvas.value.addEventListener(tapmove, eventMove, false);
        }
    });

</script>

<template>
    <div>
        <h1>刮刮乐</h1>

        <div class="demo">
            <canvas ref="canvas" id="canvas"></canvas>
        </div>
    </div>
</template>

<style scoped>
    .demo {
        background: url('./img/card@2x.png');
        background-size: 100% 100%;
        width: 345px;
        height: 165px;
    }

    #canvas {
        margin: 60px 0 0 30px; 
    }
</style>