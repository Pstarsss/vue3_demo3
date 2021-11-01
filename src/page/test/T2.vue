<template>
  <div class="T2">
        月
        <a-button type="primary" @click="changeLocale">
            changeLocale
        </a-button>
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
    name: 'T2',

    setup() {
        const changeLocale = inject(changeLocale);

        return {
            changeLocale
        }
    }
}
</script>

<style>

</style>