export default {
    singular: true,
    plugins: [
        ['umi-plugin-react', {
          antd: true
        }],
    ],
    routes: [{
        path: '/',
        component: '../layout',
        routes: [
            {
                path: '/',
                component: './HelloWorld'
            },
            {
                path: 'analysis',
                component: './Dashboard/Analysis'
            },
            {
                path: 'monitor',
                component: './Dashboard/Monitor'
            },
            {
                path: 'workplace',
                component: './Dashboard/Workplace'
            }
        ]
    }]
};