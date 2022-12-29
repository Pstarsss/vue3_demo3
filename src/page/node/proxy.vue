<template>
    <div>
        {{...user}}
    </div>
</template>

<script lang="ts">
import { ref, defineComponent, reactive } from 'vue';
export default defineComponent({
    name: 'App',

    setup() {
        let user = {
            name: '张三',
            age: 100,
            work: 'qweq'
        };

        let pro_user = new Proxy(user,{
            get(target,prop){
                return Reflect.get(target,prop);
            },

            set(target: object, prop: number, value: string){
                Reflect.set(target, prop, value);
            },

            deleteProperty(target, prop) {
                Reflect.deleteProperty(target,prop);
            }
        })

        return {
            user 
        }
    }
});
</script>
