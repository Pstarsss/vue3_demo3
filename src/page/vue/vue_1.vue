<template>
    <div class="">
      <div class="px-title">
        <img src="./img/vue-init.png">
        <img src="./img/js-1.png">
      </div>
    </div>
</template>

<script lang="ts">

import { defineComponent, onMounted } from 'vue';

export default defineComponent({

    name: '',

    setup() {

        onMounted(() => {
            let timer;
            timer = setTimeout(() => {console.log('232')}, 1000);
            clearTimeout(timer);
        });

        return {
        }
    }

})

</script>