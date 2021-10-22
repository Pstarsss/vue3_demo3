<template>
  <img alt="Vue logo" src="./assets/logo.png" />
</template>

<script lang="ts">

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
        //   $error('123123');
      }

      return {
          init,
      }
  }
});
</script>
