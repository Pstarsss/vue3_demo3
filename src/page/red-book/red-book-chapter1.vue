<!-- @author xingpan -->
<!-- @email xingpan@1377689310.com -->
<!-- @date 2022-12-29 10:42:21 -->
<!-- @desc index -->

<template>
    <div class="red-book">
      <div class="px-title">
          <section class="">
                <h4>Function.prototype.bind:</h4>
                <p>bind()函数被调用时候，会创建一个新的函数，新函数的this为bind()方法里面传进来的第一个参数，剩余参数作为新函数的执行参数</p>
          </section>

      </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({

    name: 'red-book-chapter1',

    setup() {

        return {

        }
    }

})
</script>

<style lang="less" scoped>
    .red-book {
        font-size: 18px;
    }
</style>