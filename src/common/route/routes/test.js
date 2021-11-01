/*
 * @Author: xingpan 
 * @Date: 2021-10-30 10:07:54 
 * @Last Modified by: xingpan
 * @Last Modified time: 2021-10-31 08:59:26
 */
const component = { template: '<router-view />' };

export default [
    {
        name: 'test',
        path: '/test',
        component,
        children: [
            {
                name: 'T1',
                path: '/test/t1',
                component: () => import('@/page/test/T1')
            },
            {
                name: 'T2',
                path: '/test/t2',
                component: () => import('@/page/test/T2')
            },
        ]
    }
]