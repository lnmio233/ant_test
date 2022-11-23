// config/routes.ts

export default [
    { path: '/', component: '@/pages/index' },
    {
        path: '/overview',
        component: '@/layouts/overview/index',
        name: '概览',
        routes: [
            {
                path: '/overview/data',
                name: '数据统计',
                component: '@/pages/overview/data'
            },
            {
                path: '/overview/graph',
                name: '图表统计',
                component: '@/pages/overview/graph'
            },
        ]
    },
    {
        path: '/evaluate',
        component: '@/layouts/evaluate/index',
        name: '评测',
        routes: [
            {
                path: '/evaluate/before',
                name: '测前评估',
                component: '@/pages/evaluate/before'
            },
            {
                path: '/evaluate/after',
                name: '测后评估',
                component: '@/pages/evaluate/after'
            },
            {
                path: '/evaluate/score',
                name: '评分详情',
                component: '@/pages/evaluate/score'
            },
        ]
    },
    {
        path: '/monitor',
        component: '@/layouts/monitor/index',
        name: '监控',
        routes: [
            {
                path: '/monitor/step',
                name: '步骤详情',
                component: '@/pages/monitor/step'
            },
            {
                path: '/monitor/exception',
                name: '异常详情',
                component: '@/pages/monitor/exception'
            },
        ]
    },
    {
        path: '/settings',
        component: '@/layouts/settings/index',
        name: '基础设置',
        routes: [
            {
                path: '/settings/bug',
                name: '异常设置',
                component: '@/pages/settings/bug'
            },
            {
                path: '/settings/warn',
                name: '报警设置',
                component: '@/pages/settings/warn'
            },
        ]
    },
];