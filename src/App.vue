<template>
  <img alt="Vue logo" src="./assets/logo.png" />
</template>

<script lang="ts">

import Instance from './common/util/axios/index';
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "App",

  components: {},

  setup () {
      onMounted(() => {
        //   axios.get("/api");
        init();
      })
    
            
      function init() {
          console.log('this', this);
      }

      return {
          init,
      }
  }
});
</script>
