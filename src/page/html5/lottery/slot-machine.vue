<!-- @author xingpan -->
<!-- @email xingpan@1377689310.com -->
<!-- @date 2023-05-23 19:03:22 -->
<!-- @desc slot-machine -->

<template>
    <div class="wrapper">
        <img :src="bg" class="bg">

        <div class="container-1">
            <div class="img-box">
                <img v-for="(url, index) in showList" :key="index" :src="url">
            </div>
        </div>

        <img class="btn" :src="btn" @click="onScroll">
    </div>
</template>

<script lang="ts">

import { defineComponent, onMounted, ref, nextTick } from 'vue';

import a1 from './img/大礼包@2x.png';
import a2 from './img/奖励券@2x.png';
import a3 from './img/降息券@2x.png';
import a4 from './img/免息券@2x.png';
import a6 from './img/谢谢参与@2x.png';
import a7 from './img/首图@2x.png';
import bg from './img/bg@2x.png';
import btn from './img/button@2x.png';

export default defineComponent({

    name: '',

    setup() {

        // 奖品配置
        const shoutu = a7;
        const prizeList = [
            a1,
            a2,
            a3,
            a4,
            a6
        ];

        const showList = [
            a7,
            ...prizeList,
            ...prizeList,
            ...prizeList,
            a3
        ].reverse();

        let container = ref(null);
        let topDistance = ref(0);

        onMounted(() => {
            // container.scroll({
            //     top: 2176,
            //     left: 0,
            //     behavior: 'smooth'
            // });
            nextTick(() => {
                container = document.querySelector('.img-box');
                console.log('container', container);
                topDistance.value = -(container.scrollHeight - 128);
                console.log('container.scrollHeight', container.scrollHeight);
                console.log('container.clientHeight', container.clientHeight);

                console.log('topDistance', topDistance);
            })
        })

        // 单个奖品高 x
        // 获取奖品配置区间 高度y， 设置当前奖品img-box 定位为：[-y + x, 0];
        // z = ｜-y + x ｜
        // 动画逻辑: 点击触发 由快到慢的速度变化。 3s得出结果 且奖品位置。
        // 0% ～ 60% 加速区间 
        // 
        function onScroll() {
            container = document.querySelector('.img-box');
            topDistance.value = -(container.scrollHeight - 128);
            container.style.animation = '2.5s ease-in-out 1s 1 forwards move';
            console.log('topDistance', topDistance);
        };

        return {
            showList,
            bg,
            btn,
            onScroll,
            topDistance
        }
    }

})

</script>

<style lang='less' scoped>
    
    .wrapper {
        width: 300px;
        height: 400px;
        position: relative;
        border: 1px solid hotpink;
        overflow: hidden;
        transition: 0.3s all;

        .bg {
            width: 100%;
            height: 100%;
        }

        .container-1 {
            width: 120px;
            height: 128px;
            position: absolute;
            left: 50%;
            margin-left: -60px;
            overflow: hidden;
            overflow-y: auto;
            bottom: 43%;

            .img-box {
                position: absolute;
                // top: -2048px;
                top: var(--topDistance);

                img {
                    width: auto;
                    height: 128px;
                    transform: scale(0.5) translateX(-80px);
                }
            }
        }

        .btn {
            position: absolute;
            bottom: 27px;
            left: 75px;
            width: 150px;
        }
    }


    @keyframes move {
        0% {
            top: var(--topDistance);
        }


        100% {
            top: 0;
        }
    }
</style>