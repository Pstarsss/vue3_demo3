<template>
    <div class="">
      <div id="px-title">右键菜单</div>
      <div id="right-click" v-if="showMenu">
          <ul class="wrapper">  
              <li class="item">
                  点我
              </li>
              <li class="item">
                  点我
              </li>
              <li class="item">
                  点我
              </li>
              <li class="item">
                  点我
              </li>
          </ul>
      </div>
    </div>
</template>

<script lang="ts">

import { ref, defineComponent, onMounted } from 'vue';

export default defineComponent({

    name: '',

    setup() {
        let showMenu = ref(false);

        onMounted(function () {
            rightClick();
        });

        function rightClick() {
            let target = document.getElementById('px-title');
            target?.addEventListener('contextmenu', (e) => {
                // 阻止右键默认行为
                e.preventDefault();
                console.log('')
                showMenu.value = true;
                console.log('showMenu', showMenu);
            }, false);
        }

        return {
            showMenu
        }
    }
})

</script>

<style lang="less" scoped>
#right-click {
    background: hotpink;
    width: 100px;
    height: 100px;
}
</style>