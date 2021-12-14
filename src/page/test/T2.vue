<template>
  <div class="T2">
        <a-button type="primary" @click="changeLocale">
            changeLocale
        </a-button>
  </div>
</template>

<script>
import { inject, onMounted } from 'vue';

import PxLayout from '@/common/components/px-layout/index';

export default {
    name: 'T2',

    components: {
        PxLayout
    },

    setup() {
        const changeLocale = inject('changeLocale');
        const messageInfo = inject('$messageInfo');

        onMounted(() => {
            messageInfo('洒大地撒的撒的');
        });

        return {
            changeLocale,
        }
    }
}
</script>

<style scoped>

</style>