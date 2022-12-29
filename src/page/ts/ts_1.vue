<!-- @author xingpan -->
<!-- @email xingpan@1377689310.com -->
<!-- @date 2022-12-29 10:42:21 -->
<!-- @desc index -->

<template>
    <div class="">
      <div class="px-title">
          ts.json
          <ul>
              <li>
                  当在一个新建的项目安装typescript依赖的时候  通过tsc 指令将ts文件转为js vscode会报‘函数名称重复’错误提示。
                  这个时候  只需要根目录下 走tsc --init指令。会自动创建typescript.json配置文件就不会再报错了。
              </li>
          </ul>
      </div>
    </div>
</template>

<script lang="ts">

import { defineComponent, onMounted } from 'vue';

export default defineComponent({

    name: '',

    setup() {
        onMounted(function () {
        });
    }

})

</script>