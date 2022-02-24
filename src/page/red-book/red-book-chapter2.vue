<template>
    <div class="">
      <div class="px-title">
          <section>
                Function.prototype.bind();
                <br>
                bind()函数被调用时候，会创建一个新的函数，新函数的this为bind()方法里面传进来的第一个参数，剩余参数作为新函数的执行参数
          </section>

          <a-table 
                :dataSource="dataSource" 
                :columns="columns" 
                :custom-row="customRow"
          >
              <a-menu v-if="menuVisible" :style="menuStyle">
                 <a-menu-item>查看</a-menu-item>
                 <a-menu-item>删除</a-menu-item>
              </a-menu>
          </a-table>

          <button @click.right="openContextMenu('button')">按钮</button>
      </div>
    </div>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue';

export default defineComponent({

    name: '',

    setup() {
        function openContextMenu(str: string) {
            console.log('str');
            alert(str);
        };

        const dataSource = [
            {
                key: '1',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号',
            },
            {
                key: '2',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号',
            }
        ];

        const columns = [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: '住址',
                dataIndex: 'address',
                key: 'address',
            }
        ];

        let menuVisible = ref<boolean>(false);
        let menuStyle = ref({
            top: '0px',
            left: '0px'
        });
        let menuData = ref();

        function cancelClick() {
            menuVisible.value = false;
            document.body.removeEventListener('click', cancelClick);
        }

        function customRow(record, index) {
            return  {
                onContextmenu: e => {
                    e.preventDefault();
                    menuData.value = record;
                    menuVisible.value = true;
                    menuStyle.value.top = e.clientY + 'px';
                    menuStyle.value.left = e.clientX + 'px';
                    document.body.addEventListener('click', cancelClick);
                }
            }
        }

        return {
            openContextMenu,
            customRow,

            dataSource,
            columns,
            menuVisible
        }
    }

})

</script>