<template>
  <div class="T2">
        月
        <a-button type="primary" @click="changeLocale">
            changeLocale
        </a-button>
        <a-date-picker />
  </div>
</template>

<script>
import { inject, onMounted } from 'vue';

export default {
    name: 'T2',

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

<style>

</style>