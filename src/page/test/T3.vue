<template>
  <div class="T3">
      <px-layout></px-layout>
  </div>
</template>

<script>
import { inject, onMounted } from 'vue';

import PxLayout from '@/common/components/px-layout/index';

export default {
    name: 'T3',

    components: {
        PxLayout
    },

    setup() {
        
        onMounted(() => {
        });

        return {
        }
    }
}
</script>

<style>

</style>