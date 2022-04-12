<template>
    <div class="vue-table-click">
        <div class="table-wrapper">
            <a-table 
                class="px-table"
                :dataSource="dataSource" 
                :columns="columns" 
                :customHeaderCell="customHeaderCell"
            />

            <div id="context-menu">
                <ul class="wrapper">
                    <li class="menu-item" @click="copy">
                        复制第一行该列的数值的数值
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>

    import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';

    export default {
        setup() {
            let dataSource = reactive([
                {
                    key: '1',
                    name: '胡彦斌',
                    age: 32,
                    address: '东湖区湖底公园1号'
                },
                {
                    key: '2',
                    name: '胡彦祖',
                    age: 42,
                    address: '西湖区湖底公园1号'
                },
                {
                    key: '3',
                    name: '胡一菲',
                    age: 22,
                    address: '北湖区湖底公园1号'
                },
                {
                    key: '4',
                    name: '胡军',
                    age: 52,
                    address: '南湖区湖底公园1号'
                },
            ]);

            let activeKey = ref('');

            function customHeaderCell(column) {
                return {
                    onContextmenu: (event) => {
                        // 拿到当前点击的 表头的key， 既可以获取了  需要操作行的索引
                        activeKey = column.key;

                        event.preventDefault();

                        // 获取位置， 展示菜单
                        // 位置计算（定位基于 菜单 && 表格的父元素）， 点击的位置 - 表格的位置 = 菜单展示的位置
                        // 边缘展示处理， 当 页面视口宽高 - 点击的位置的空间 小于 菜单的空间  菜单的位置即为：点击宽高 - 表格宽高
                        const {left: tableLeft, top: tableTop} = document.querySelector('.px-table').getBoundingClientRect(); // 表格位置 宽高
                        const ContextMenu = document.querySelector('#context-menu');
                        const {clientWidth: ContextMenuWidth, clientHeight: ContextMenuHeight} = ContextMenu; // 菜单位置 宽高
                        const {clientWidth, clientHeight} = document.body; // 页面视口 宽高
                        const {clientX, clientY} = event; // 点击位置 宽高

                        const realX = (clientWidth - clientX) > ContextMenuWidth ? clientX - tableLeft : clientX - tableLeft - ContextMenuWidth;
                        const realY = (clientHeight - clientY) > ContextMenuHeight ?  clientY - tableTop  : clientY - tableTop - ContextMenuHeight;
                        ContextMenu.style.left = `${realX}px`;
                        ContextMenu.style.top = `${realY}px`;
                        ContextMenu.style.visibility = 'visible';
                    }
                }
            }

            function copy() {
                let FirstValue = '';
                dataSource.forEach((item, index) => {
                    if (index === 0) {
                        FirstValue = item[activeKey];
                    } else {
                        item[activeKey] = FirstValue ?? item[activeKey];
                    }
                });
            }

            onMounted(() => {
                document.addEventListener('click', () => {
                    const ContextMenu = document.querySelector('#context-menu');
                    ContextMenu.style.visibility = 'hidden';
                }, false);

            })

            onBeforeUnmount(() => {
                document.removeEventListener('click', () => ({}), false);
            }) 

            return {
                copy,
                dataSource,
                customHeaderCell,
                columns: [
                    {
                        title: '姓名',
                        dataIndex: 'name',
                        key: 'name',
                        customHeaderCell
                    },
                    {
                        title: '年龄',
                        dataIndex: 'age',
                        key: 'age',
                        customHeaderCell
                    },
                    {
                        title: '住址',
                        dataIndex: 'address',
                        key: 'address',
                        customHeaderCell
                    }
                ],
            };
        },
    };
</script>

<style lang="less" scoped>
* {
    margin: 0;
    padding: 0;
}
.vue-table-click {
    .placeholder {
        width: 100%;
        height: 1000px;
        background: greenyellow;
    }
    
    .table-wrapper {
        position: relative;

        #context-menu {
            position: absolute;
            visibility: hidden;
            left: 0;
            top: 0;

            ul {
                border-radius: 8px;
                color:#242424;

                font-size: 14px;
                line-height: 18px;

                li {
                    list-style: none;
                    min-width: 80px;
                    border-radius: 8px;
                    background: #ffffff;
                    padding: 10px;

                    &:hover {
                        background: rebeccapurple;
                    }
                }
            }
        }
    }
}
</style>