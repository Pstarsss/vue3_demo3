<!-- @author xingpan -->
<!-- @email xingpan@1377689310.com -->
<!-- @date 2022-12-29 10:42:21 -->
<!-- @desc index -->

<template>
    <div class="vue-table-click">
        <div class="table-wrapper">
            <a-table 
                class="px-table"
                :data-source="dataSource" 
                :columns="columns" 
            >           
                <!-- a-table- 表头插槽 -->
                <template #headerCell="{title, column}">
                    <a-dropdown>
                        <div @click.prevent>{{ title }}</div>
                        <template #overlay>
                            <a-menu>
                                <a-menu-item>
                                    <div @click="onCopy(column)">复制第一行改列的数值</div>
                                </a-menu-item>
                            </a-menu>
                        </template>
                    </a-dropdown>
                </template>
            </a-table>
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
                }
            ]);

            function onCopy(column) {
                const {key} = column;
                let FirstValue = '';
                dataSource.forEach((item, index) => {
                    if (index === 0) {
                        FirstValue = item[key];
                    } else {
                        item[key] = FirstValue ?? item[key];
                    }
                });
            };

            return {
                onCopy,
                dataSource,
                columns: [
                    {
                        title: '姓名',
                        dataIndex: 'name',
                        key: 'name',
                        // 自定义渲染 数据
                        customRender: ({text, record, index, column}) => {
                            return <div>{text} - 1</div>
                        }
                    },
                    {
                        title: '年龄',
                        dataIndex: 'age',
                        key: 'age'
                    },
                    {
                        title: '住址',
                        dataIndex: 'address',
                        key: 'address'
                    }
                ],
            };
        },
    };
</script>

<style lang="less" scoped>
    .vue-table-click {

    }
</style>